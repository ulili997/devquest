import { useState } from "react";
import Hearts from "./components/Hearts";
import OutputQuestion from "./components/OutputQuestion";
import FillBlankQuestion from "./components/FillBlankQuestion";
import OrderQuestion from "./components/OrderQuestion";
import FreeformQuestion from "./components/FreeformQuestion";

export default function LessonView({ lesson, moduleColor, onComplete, hearts, onLoseHeart }) {
  const [phase, setPhase] = useState("slides");
  const [slideIdx, setSlideIdx] = useState(0);
  const [qIdx, setQIdx] = useState(0);
  const [selected, setSelected] = useState(null);
  const [answered, setAnswered] = useState(false);
  const [correct, setCorrect] = useState(0);
  const [wrong, setWrong] = useState(0);
  const [shake, setShake] = useState(false);
  const [showContinue, setShowContinue] = useState(false);

  const totalSteps = lesson.slides.length + lesson.questions.length;
  const currentStep = phase === "slides" ? slideIdx : lesson.slides.length + qIdx;
  const progress = ((currentStep + (answered ? 1 : 0)) / totalSteps) * 100;

  const handleNext = () => {
    if (phase === "slides") {
      if (slideIdx < lesson.slides.length - 1) setSlideIdx(s => s + 1);
      else { setPhase("quiz"); setQIdx(0); }
    }
  };

  // Unified answer handler for all question types
  const handleAnswer = (isCorrect, opts = {}) => {
    if (answered) return;
    setAnswered(true);
    setShowContinue(true);
    if (isCorrect) {
      setCorrect(c => c + (opts.halfCredit ? 0.5 : 1));
    } else {
      setWrong(w => w + 1);
      setShake(true);
      setTimeout(() => setShake(false), 500);
      onLoseHeart();
    }
  };

  // Legacy MCQ handler (for backwards compatibility)
  const handleMCQAnswer = (idx) => {
    if (answered) return;
    setSelected(idx);
    setAnswered(true);
    setShowContinue(true);
    const isCorrect = idx === lesson.questions[qIdx].answer;
    if (isCorrect) setCorrect(c => c + 1);
    else {
      setWrong(w => w + 1);
      setShake(true);
      setTimeout(() => setShake(false), 500);
      onLoseHeart();
    }
  };

  const handleNextQ = () => {
    if (qIdx < lesson.questions.length - 1) {
      setQIdx(q => q + 1);
      setSelected(null);
      setAnswered(false);
      setShowContinue(false);
    } else {
      setPhase("result");
    }
  };

  const slide = phase === "slides" ? lesson.slides[slideIdx] : null;
  const question = phase === "quiz" ? lesson.questions[qIdx] : null;
  const qType = question?.type || "mcq";

  // Results XP calculation: full correct = 10 XP, half credit (freeform self-grade) = 5 XP
  const xpEarned = Math.floor(correct) * 10 + (correct % 1 > 0 ? 5 : 0);
  const isPerfect = Math.floor(correct) === lesson.questions.length && correct % 1 === 0;

  return (
    <div style={{ minHeight: "100vh", background: "#131F24", display: "flex", flexDirection: "column" }}>
      {/* Progress bar */}
      <div style={{ padding: "16px 20px 0", display: "flex", alignItems: "center", gap: 12 }}>
        <div style={{ flex: 1, height: 12, background: "rgba(255,255,255,0.1)", borderRadius: 99 }}>
          <div style={{
            height: "100%", borderRadius: 99, background: moduleColor,
            width: `${Math.min(progress, 100)}%`, transition: "width 0.4s ease",
            boxShadow: `0 0 12px ${moduleColor}66`,
          }} />
        </div>
        <Hearts count={hearts} />
      </div>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "20px" }}>
        {/* SLIDES PHASE */}
        {phase === "slides" && slide && (
          <div style={{ maxWidth: 560, width: "100%", animation: "slideIn 0.3s ease" }}>
            <div style={{
              background: "rgba(255,255,255,0.06)", borderRadius: 20, padding: "32px 28px",
              border: `1px solid ${moduleColor}33`, marginBottom: 32,
            }}>
              <div style={{
                fontSize: "0.75rem", fontWeight: 800, color: moduleColor, letterSpacing: "0.1em",
                textTransform: "uppercase", marginBottom: 16,
              }}>NEW CONCEPT</div>
              <div style={{
                fontSize: "1.15rem", lineHeight: 1.7, color: "#E5E5E5", fontFamily: "'Nunito', sans-serif",
              }}>{slide.content.split("**").map((part, i) =>
                i % 2 === 1 ? <span key={i} style={{ color: moduleColor, fontWeight: 800 }}>{part}</span> : part
              )}</div>
            </div>
            <button onClick={handleNext} style={{
              width: "100%", padding: "16px", borderRadius: 16, border: "none", cursor: "pointer",
              background: moduleColor, color: "#fff", fontSize: "1rem", fontWeight: 800,
              fontFamily: "'Nunito', sans-serif", letterSpacing: "0.02em",
              boxShadow: `0 4px 0 ${moduleColor}88, 0 6px 20px ${moduleColor}33`,
              transform: "translateY(0)", transition: "transform 0.1s",
            }} onMouseDown={e => e.target.style.transform = "translateY(3px)"}
               onMouseUp={e => e.target.style.transform = "translateY(0)"}>
              CONTINUE
            </button>
          </div>
        )}

        {/* QUIZ PHASE */}
        {phase === "quiz" && question && (
          <div style={{
            maxWidth: 560, width: "100%",
            animation: shake ? "shakeX 0.4s ease" : "slideIn 0.3s ease",
          }}>
            <div style={{
              fontSize: "0.75rem", fontWeight: 800, color: "#89E219", letterSpacing: "0.1em",
              textTransform: "uppercase", marginBottom: 12, textAlign: "center",
            }}>QUESTION {qIdx + 1} OF {lesson.questions.length}</div>

            {/* MCQ (default / no type) */}
            {qType === "mcq" && (
              <>
                <div style={{
                  fontSize: "1.3rem", fontWeight: 800, color: "#fff", textAlign: "center",
                  marginBottom: 32, fontFamily: "'Nunito', sans-serif", lineHeight: 1.4,
                }}>{question.q}</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {question.options.map((opt, i) => {
                    let bg = "rgba(255,255,255,0.06)";
                    let borderColor = "rgba(255,255,255,0.15)";
                    let textColor = "#E5E5E5";
                    if (answered) {
                      if (i === question.answer) { bg = "#58CC0222"; borderColor = "#58CC02"; textColor = "#58CC02"; }
                      else if (i === selected && i !== question.answer) { bg = "#FF4B4B22"; borderColor = "#FF4B4B"; textColor = "#FF4B4B"; }
                    } else if (i === selected) { bg = `${moduleColor}22`; borderColor = moduleColor; textColor = moduleColor; }
                    return (
                      <button key={i} onClick={() => handleMCQAnswer(i)} style={{
                        padding: "16px 20px", borderRadius: 14, border: `2px solid ${borderColor}`,
                        background: bg, color: textColor, fontSize: "1rem", fontWeight: 700,
                        fontFamily: "'Nunito', sans-serif", cursor: answered ? "default" : "pointer",
                        textAlign: "left", transition: "all 0.2s",
                      }}>
                        <span style={{
                          display: "inline-flex", alignItems: "center", justifyContent: "center",
                          width: 28, height: 28, borderRadius: 8, border: `2px solid ${borderColor}`,
                          marginRight: 12, fontSize: "0.8rem", fontWeight: 800,
                        }}>{String.fromCharCode(65 + i)}</span>
                        {opt}
                      </button>
                    );
                  })}
                </div>
              </>
            )}

            {/* Output question */}
            {qType === "output" && (
              <OutputQuestion question={question} moduleColor={moduleColor} onAnswer={handleAnswer} />
            )}

            {/* Fill-in-the-blank question */}
            {qType === "fill" && (
              <FillBlankQuestion question={question} moduleColor={moduleColor} onAnswer={handleAnswer} />
            )}

            {/* Code ordering question */}
            {qType === "order" && (
              <OrderQuestion question={question} moduleColor={moduleColor} onAnswer={handleAnswer} />
            )}

            {/* Freeform code question */}
            {qType === "freeform" && (
              <FreeformQuestion question={question} moduleColor={moduleColor} onAnswer={handleAnswer} />
            )}

            {/* Continue button (MCQ shows inline, others use showContinue) */}
            {answered && (
              <div style={{ marginTop: 20, animation: "slideUp 0.3s ease" }}>
                {qType === "mcq" && (
                  <div style={{
                    padding: "14px 20px", borderRadius: 14, marginBottom: 16,
                    background: selected === question.answer ? "#58CC0218" : "#FF4B4B18",
                    border: `1px solid ${selected === question.answer ? "#58CC0244" : "#FF4B4B44"}`,
                    color: selected === question.answer ? "#58CC02" : "#FF4B4B",
                    fontSize: "0.95rem", fontWeight: 700, fontFamily: "'Nunito', sans-serif",
                  }}>
                    {selected === question.answer ? "Correct! Great job!" : `The correct answer was: ${question.options[question.answer]}`}
                  </div>
                )}
                <button onClick={handleNextQ} style={{
                  width: "100%", padding: "16px", borderRadius: 16, border: "none", cursor: "pointer",
                  background: "#58CC02", color: "#fff", fontSize: "1rem", fontWeight: 800,
                  fontFamily: "'Nunito', sans-serif",
                  boxShadow: "0 4px 0 #46a302",
                }}>CONTINUE</button>
              </div>
            )}
          </div>
        )}

        {/* RESULTS PHASE */}
        {phase === "result" && (
          <div style={{ maxWidth: 480, width: "100%", textAlign: "center", animation: "slideIn 0.4s ease" }}>
            <div style={{ fontSize: "4rem", marginBottom: 16 }}>
              {isPerfect ? "\u{1F389}" : Math.floor(correct) >= lesson.questions.length / 2 ? "\u{1F44F}" : "\u{1F4AA}"}
            </div>
            <div style={{
              fontSize: "1.8rem", fontWeight: 900, color: "#fff", fontFamily: "'Nunito', sans-serif",
              marginBottom: 8,
            }}>{isPerfect ? "Perfect!" : Math.floor(correct) >= lesson.questions.length / 2 ? "Great Job!" : "Keep Practicing!"}</div>
            <div style={{ color: "#89E219", fontSize: "1.2rem", fontWeight: 800, marginBottom: 32, fontFamily: "'Nunito', sans-serif" }}>
              +{xpEarned} XP earned
            </div>
            <div style={{
              display: "flex", justifyContent: "center", gap: 32, marginBottom: 40,
              color: "#A0A0A0", fontSize: "0.95rem", fontFamily: "'Nunito', sans-serif",
            }}>
              <div><span style={{ fontSize: "1.5rem", display: "block", color: "#58CC02", fontWeight: 900 }}>{Math.floor(correct)}</span>Correct</div>
              <div><span style={{ fontSize: "1.5rem", display: "block", color: "#FF4B4B", fontWeight: 900 }}>{wrong}</span>Wrong</div>
              <div><span style={{ fontSize: "1.5rem", display: "block", color: "#FFC800", fontWeight: 900 }}>{xpEarned}</span>XP</div>
            </div>
            <button onClick={() => onComplete(xpEarned, isPerfect)} style={{
              width: "100%", padding: "16px", borderRadius: 16, border: "none", cursor: "pointer",
              background: "#58CC02", color: "#fff", fontSize: "1.1rem", fontWeight: 800,
              fontFamily: "'Nunito', sans-serif",
              boxShadow: "0 4px 0 #46a302, 0 6px 20px rgba(88,204,2,0.3)",
            }}>CONTINUE</button>
          </div>
        )}
      </div>
    </div>
  );
}
