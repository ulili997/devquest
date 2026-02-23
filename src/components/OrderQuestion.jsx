import { useState } from "react";

export default function OrderQuestion({ question, moduleColor, onAnswer }) {
  // Start with shuffled order (indices 0..n-1 shuffled)
  const [order, setOrder] = useState(() => {
    const indices = question.lines.map((_, i) => i);
    for (let i = indices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [indices[i], indices[j]] = [indices[j], indices[i]];
    }
    return indices;
  });
  const [answered, setAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const moveUp = (pos) => {
    if (answered || pos === 0) return;
    setOrder(prev => {
      const next = [...prev];
      [next[pos - 1], next[pos]] = [next[pos], next[pos - 1]];
      return next;
    });
  };

  const moveDown = (pos) => {
    if (answered || pos === order.length - 1) return;
    setOrder(prev => {
      const next = [...prev];
      [next[pos], next[pos + 1]] = [next[pos + 1], next[pos]];
      return next;
    });
  };

  const handleCheck = () => {
    if (answered) return;
    setAnswered(true);
    const correct = order.every((lineIdx, pos) => lineIdx === question.correctOrder[pos]);
    setIsCorrect(correct);
    onAnswer(correct);
  };

  return (
    <div style={{ maxWidth: 560, width: "100%" }}>
      <div style={{
        fontSize: "1.3rem", fontWeight: 800, color: "#fff", textAlign: "center",
        marginBottom: 24, fontFamily: "'Nunito', sans-serif", lineHeight: 1.4,
      }}>{question.q}</div>

      <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 24 }}>
        {order.map((lineIdx, pos) => {
          let bg = "rgba(255,255,255,0.06)";
          let borderCol = "rgba(255,255,255,0.15)";
          if (answered) {
            const correctPos = question.correctOrder.indexOf(lineIdx);
            if (correctPos === pos) { bg = "#58CC0222"; borderCol = "#58CC02"; }
            else { bg = "#FF4B4B22"; borderCol = "#FF4B4B"; }
          }

          return (
            <div key={lineIdx} style={{
              display: "flex", alignItems: "center", gap: 8,
              padding: "12px 16px", borderRadius: 12,
              background: bg, border: `2px solid ${borderCol}`,
              transition: "all 0.2s",
            }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <button onClick={() => moveUp(pos)} disabled={answered || pos === 0} style={{
                  background: "none", border: "none", cursor: answered || pos === 0 ? "default" : "pointer",
                  color: answered || pos === 0 ? "#333" : moduleColor,
                  fontSize: "1rem", padding: "2px 6px", lineHeight: 1,
                  fontWeight: 900, opacity: answered || pos === 0 ? 0.3 : 1,
                }}>{"\u25B2"}</button>
                <button onClick={() => moveDown(pos)} disabled={answered || pos === order.length - 1} style={{
                  background: "none", border: "none", cursor: answered || pos === order.length - 1 ? "default" : "pointer",
                  color: answered || pos === order.length - 1 ? "#333" : moduleColor,
                  fontSize: "1rem", padding: "2px 6px", lineHeight: 1,
                  fontWeight: 900, opacity: answered || pos === order.length - 1 ? 0.3 : 1,
                }}>{"\u25BC"}</button>
              </div>
              <code style={{
                flex: 1, fontFamily: "'Fira Code', 'Consolas', monospace",
                fontSize: "0.9rem", color: "#E5E5E5",
              }}>{question.lines[lineIdx]}</code>
            </div>
          );
        })}
      </div>

      {!answered && (
        <button onClick={handleCheck} style={{
          width: "100%", padding: "16px", borderRadius: 16, border: "none", cursor: "pointer",
          background: moduleColor, color: "#fff", fontSize: "1rem", fontWeight: 800,
          fontFamily: "'Nunito', sans-serif",
          boxShadow: `0 4px 0 ${moduleColor}88`,
        }}>CHECK ORDER</button>
      )}

      {answered && (
        <div style={{
          padding: "14px 20px", borderRadius: 14, marginTop: 4,
          background: isCorrect ? "#58CC0218" : "#FF4B4B18",
          border: `1px solid ${isCorrect ? "#58CC0244" : "#FF4B4B44"}`,
          color: isCorrect ? "#58CC02" : "#FF4B4B",
          fontSize: "0.95rem", fontWeight: 700, fontFamily: "'Nunito', sans-serif",
        }}>
          {isCorrect ? "Perfect order! Great job!" : "Not quite. The correct order is shown with green borders."}
        </div>
      )}
    </div>
  );
}
