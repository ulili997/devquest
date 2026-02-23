import { useState } from "react";

export default function FreeformQuestion({ question, moduleColor, onAnswer }) {
  const [code, setCode] = useState(question.starterCode || "");
  const [answered, setAnswered] = useState(false);
  const [result, setResult] = useState(null); // "pass" | "fail" | "selfgrade"
  const [selfGraded, setSelfGraded] = useState(false);

  const handleCheck = () => {
    if (answered) return;
    const allMatch = question.patterns.every(pat => new RegExp(pat).test(code));
    if (allMatch) {
      setResult("pass");
      setAnswered(true);
      onAnswer(true);
    } else {
      setResult("selfgrade");
    }
  };

  const handleSelfGrade = (correct) => {
    setAnswered(true);
    setSelfGraded(true);
    if (correct) {
      setResult("pass");
      onAnswer(true, { halfCredit: true });
    } else {
      setResult("fail");
      onAnswer(false);
    }
  };

  return (
    <div style={{ maxWidth: 560, width: "100%" }}>
      <div style={{
        fontSize: "1.3rem", fontWeight: 800, color: "#fff", textAlign: "center",
        marginBottom: 20, fontFamily: "'Nunito', sans-serif", lineHeight: 1.4,
      }}>{question.q}</div>

      <textarea
        value={code}
        onChange={(e) => !answered && setCode(e.target.value)}
        disabled={answered}
        spellCheck={false}
        style={{
          width: "100%",
          minHeight: 160,
          background: "#0d1117",
          color: "#abb2bf",
          border: `2px solid ${answered ? (result === "pass" ? "#58CC02" : "#FF4B4B") : "rgba(255,255,255,0.15)"}`,
          borderRadius: 12,
          padding: "16px 20px",
          fontFamily: "'Fira Code', 'Cascadia Code', 'Consolas', monospace",
          fontSize: "0.9rem",
          lineHeight: 1.6,
          resize: "vertical",
          outline: "none",
          boxSizing: "border-box",
          transition: "border-color 0.2s",
        }}
      />

      {!answered && result !== "selfgrade" && (
        <button onClick={handleCheck} style={{
          width: "100%", padding: "16px", borderRadius: 16, border: "none", cursor: "pointer",
          background: moduleColor, color: "#fff", fontSize: "1rem", fontWeight: 800,
          fontFamily: "'Nunito', sans-serif", marginTop: 16,
          boxShadow: `0 4px 0 ${moduleColor}88`,
        }}>RUN CHECK</button>
      )}

      {result === "selfgrade" && !selfGraded && (
        <div style={{
          marginTop: 16, padding: "20px", borderRadius: 14,
          background: "rgba(255,200,0,0.08)", border: "1px solid rgba(255,200,0,0.25)",
        }}>
          <div style={{
            color: "#FFC800", fontWeight: 800, fontSize: "1rem", marginBottom: 8,
            fontFamily: "'Nunito', sans-serif",
          }}>Auto-check didn't match. Compare your answer:</div>
          <pre style={{
            background: "#0d1117", borderRadius: 10, padding: "12px 16px",
            fontFamily: "'Fira Code', 'Consolas', monospace", fontSize: "0.85rem",
            color: "#89E219", margin: "12px 0", lineHeight: 1.5,
            border: "1px solid rgba(255,255,255,0.08)", whiteSpace: "pre-wrap",
          }}>{question.sampleAnswer}</pre>
          <div style={{ color: "#A0A0A0", fontSize: "0.85rem", marginBottom: 14, fontFamily: "'Nunito', sans-serif" }}>
            Is your solution correct? (5 XP for self-verified answers)
          </div>
          <div style={{ display: "flex", gap: 12 }}>
            <button onClick={() => handleSelfGrade(true)} style={{
              flex: 1, padding: "14px", borderRadius: 12, border: "none", cursor: "pointer",
              background: "#58CC02", color: "#fff", fontWeight: 800, fontSize: "0.95rem",
              fontFamily: "'Nunito', sans-serif",
            }}>Yes, it's correct</button>
            <button onClick={() => handleSelfGrade(false)} style={{
              flex: 1, padding: "14px", borderRadius: 12, border: "none", cursor: "pointer",
              background: "#FF4B4B", color: "#fff", fontWeight: 800, fontSize: "0.95rem",
              fontFamily: "'Nunito', sans-serif",
            }}>No, it's wrong</button>
          </div>
        </div>
      )}

      {answered && (
        <div style={{
          padding: "14px 20px", borderRadius: 14, marginTop: 16,
          background: result === "pass" ? "#58CC0218" : "#FF4B4B18",
          border: `1px solid ${result === "pass" ? "#58CC0244" : "#FF4B4B44"}`,
          color: result === "pass" ? "#58CC02" : "#FF4B4B",
          fontSize: "0.95rem", fontWeight: 700, fontFamily: "'Nunito', sans-serif",
        }}>
          {result === "pass" && !selfGraded && "Correct! Your code passes all checks!"}
          {result === "pass" && selfGraded && "Marked as correct! +5 XP"}
          {result === "fail" && (
            <>
              Not quite. Here's a sample solution:
              <pre style={{
                background: "#0d1117", borderRadius: 8, padding: "10px 14px", marginTop: 8,
                fontFamily: "'Fira Code', 'Consolas', monospace", fontSize: "0.85rem",
                color: "#89E219", lineHeight: 1.5, whiteSpace: "pre-wrap",
              }}>{question.sampleAnswer}</pre>
            </>
          )}
        </div>
      )}
    </div>
  );
}
