import { useState } from "react";

export default function FillBlankQuestion({ question, moduleColor, onAnswer }) {
  const [selections, setSelections] = useState({});
  const [answered, setAnswered] = useState(false);

  const handleBlankChange = (blankId, value) => {
    if (answered) return;
    setSelections(prev => ({ ...prev, [blankId]: parseInt(value) }));
  };

  const handleCheck = () => {
    if (answered) return;
    setAnswered(true);
    const allCorrect = question.blanks.every(b => selections[b.id] === b.answer);
    onAnswer(allCorrect);
  };

  const allSelected = question.blanks.every(b => selections[b.id] !== undefined);

  // Render code with blanks replaced by dropdowns
  const renderCodeWithBlanks = () => {
    let parts = question.code.split(/(___BLANK\d+___)/g);
    return parts.map((part, i) => {
      const blankMatch = part.match(/___BLANK(\d+)___/);
      if (blankMatch) {
        const blank = question.blanks.find(b => b.id === `BLANK${blankMatch[1]}`);
        if (!blank) return <span key={i}>{part}</span>;

        const selected = selections[blank.id];
        let bgColor = "#1a2533";
        let borderCol = moduleColor;
        if (answered) {
          bgColor = selected === blank.answer ? "#58CC0233" : "#FF4B4B33";
          borderCol = selected === blank.answer ? "#58CC02" : "#FF4B4B";
        }

        return (
          <select
            key={i}
            value={selected !== undefined ? selected : ""}
            onChange={(e) => handleBlankChange(blank.id, e.target.value)}
            disabled={answered}
            style={{
              background: bgColor,
              color: "#fff",
              border: `2px solid ${borderCol}`,
              borderRadius: 8,
              padding: "4px 8px",
              fontSize: "0.9rem",
              fontFamily: "'Fira Code', 'Consolas', monospace",
              fontWeight: 700,
              cursor: answered ? "default" : "pointer",
              outline: "none",
              margin: "0 2px",
              minWidth: 100,
            }}
          >
            <option value="" disabled>???</option>
            {blank.options.map((opt, oi) => (
              <option key={oi} value={oi}>{opt}</option>
            ))}
          </select>
        );
      }
      return <span key={i}>{part}</span>;
    });
  };

  return (
    <div style={{ maxWidth: 560, width: "100%" }}>
      <div style={{
        fontSize: "1.3rem", fontWeight: 800, color: "#fff", textAlign: "center",
        marginBottom: 20, fontFamily: "'Nunito', sans-serif", lineHeight: 1.4,
      }}>{question.q}</div>

      <pre style={{
        background: "#0d1117",
        borderRadius: 12,
        padding: "20px 24px",
        overflowX: "auto",
        fontFamily: "'Fira Code', 'Cascadia Code', 'Consolas', monospace",
        fontSize: "0.9rem",
        lineHeight: 2,
        color: "#abb2bf",
        border: "1px solid rgba(255,255,255,0.08)",
        margin: "0 0 20px",
        whiteSpace: "pre-wrap",
      }}>
        <code>{renderCodeWithBlanks()}</code>
      </pre>

      {!answered && (
        <button
          onClick={handleCheck}
          disabled={!allSelected}
          style={{
            width: "100%", padding: "16px", borderRadius: 16, border: "none", cursor: allSelected ? "pointer" : "not-allowed",
            background: allSelected ? moduleColor : "rgba(255,255,255,0.1)",
            color: "#fff", fontSize: "1rem", fontWeight: 800, fontFamily: "'Nunito', sans-serif",
            boxShadow: allSelected ? `0 4px 0 ${moduleColor}88` : "none",
            opacity: allSelected ? 1 : 0.5,
            transition: "all 0.2s",
          }}
        >CHECK</button>
      )}

      {answered && (
        <div style={{ marginTop: 4 }}>
          {question.blanks.map(b => (
            <div key={b.id} style={{
              padding: "8px 14px", borderRadius: 10, marginBottom: 6,
              background: selections[b.id] === b.answer ? "#58CC0218" : "#FF4B4B18",
              border: `1px solid ${selections[b.id] === b.answer ? "#58CC0244" : "#FF4B4B44"}`,
              color: selections[b.id] === b.answer ? "#58CC02" : "#FF4B4B",
              fontSize: "0.85rem", fontWeight: 700, fontFamily: "'Nunito', sans-serif",
            }}>
              {selections[b.id] === b.answer
                ? `\u2713 ${b.options[b.answer]} is correct!`
                : `\u2717 Correct answer: ${b.options[b.answer]}`}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
