import { useState } from "react";
import CodeBlock from "./CodeBlock";

export default function OutputQuestion({ question, moduleColor, onAnswer }) {
  const [selected, setSelected] = useState(null);
  const [answered, setAnswered] = useState(false);

  const handleSelect = (idx) => {
    if (answered) return;
    setSelected(idx);
    setAnswered(true);
    const isCorrect = idx === question.answer;
    onAnswer(isCorrect);
  };

  return (
    <div style={{ maxWidth: 560, width: "100%" }}>
      <div style={{
        fontSize: "1.3rem", fontWeight: 800, color: "#fff", textAlign: "center",
        marginBottom: 16, fontFamily: "'Nunito', sans-serif", lineHeight: 1.4,
      }}>{question.q}</div>

      <CodeBlock code={question.code} />

      <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 20 }}>
        {question.options.map((opt, i) => {
          let bg = "rgba(255,255,255,0.06)";
          let borderColor = "rgba(255,255,255,0.15)";
          let textColor = "#E5E5E5";
          if (answered) {
            if (i === question.answer) { bg = "#58CC0222"; borderColor = "#58CC02"; textColor = "#58CC02"; }
            else if (i === selected && i !== question.answer) { bg = "#FF4B4B22"; borderColor = "#FF4B4B"; textColor = "#FF4B4B"; }
          } else if (i === selected) { bg = `${moduleColor}22`; borderColor = moduleColor; textColor = moduleColor; }
          return (
            <button key={i} onClick={() => handleSelect(i)} style={{
              padding: "14px 20px", borderRadius: 14, border: `2px solid ${borderColor}`,
              background: bg, color: textColor, fontSize: "0.95rem", fontWeight: 700,
              fontFamily: "'Fira Code', 'Consolas', monospace", cursor: answered ? "default" : "pointer",
              textAlign: "left", transition: "all 0.2s",
            }}>
              <span style={{
                display: "inline-flex", alignItems: "center", justifyContent: "center",
                width: 28, height: 28, borderRadius: 8, border: `2px solid ${borderColor}`,
                marginRight: 12, fontSize: "0.8rem", fontWeight: 800, fontFamily: "'Nunito', sans-serif",
              }}>{String.fromCharCode(65 + i)}</span>
              {opt}
            </button>
          );
        })}
      </div>
    </div>
  );
}
