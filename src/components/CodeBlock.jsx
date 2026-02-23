const KEYWORDS = [
  "def", "return", "if", "elif", "else", "for", "while", "in", "import", "from",
  "class", "try", "except", "with", "as", "lambda", "yield", "pass", "break",
  "continue", "True", "False", "None", "and", "or", "not", "is", "print",
  "const", "let", "var", "function", "async", "await", "export", "import",
  "new", "this", "throw", "catch", "finally", "typeof", "instanceof",
];

function highlightCode(code) {
  return code.split("\n").map((line, li) => {
    const tokens = line.split(/(\b\w+\b|[^\w\s]|\s+)/g);
    return (
      <div key={li} style={{ minHeight: "1.4em" }}>
        <span style={{ color: "#5a6a7a", userSelect: "none", display: "inline-block", width: 32, textAlign: "right", marginRight: 12 }}>
          {li + 1}
        </span>
        {tokens.map((tok, ti) => {
          if (KEYWORDS.includes(tok)) {
            return <span key={ti} style={{ color: "#c678dd", fontWeight: 700 }}>{tok}</span>;
          }
          if (/^["'`]/.test(tok) || /^["'`]/.test(tok)) {
            return <span key={ti} style={{ color: "#98c379" }}>{tok}</span>;
          }
          if (/^\d+$/.test(tok)) {
            return <span key={ti} style={{ color: "#d19a66" }}>{tok}</span>;
          }
          if (/^#/.test(tok) || /^\/\//.test(tok)) {
            return <span key={ti} style={{ color: "#5c6370", fontStyle: "italic" }}>{tok}</span>;
          }
          return <span key={ti}>{tok}</span>;
        })}
      </div>
    );
  });
}

export default function CodeBlock({ code, style = {} }) {
  return (
    <pre style={{
      background: "#0d1117",
      borderRadius: 12,
      padding: "16px 20px",
      overflowX: "auto",
      fontFamily: "'Fira Code', 'Cascadia Code', 'Consolas', monospace",
      fontSize: "0.9rem",
      lineHeight: 1.6,
      color: "#abb2bf",
      border: "1px solid rgba(255,255,255,0.08)",
      margin: "12px 0",
      ...style,
    }}>
      <code>{highlightCode(code)}</code>
    </pre>
  );
}
