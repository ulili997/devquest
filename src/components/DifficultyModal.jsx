import { DIFFICULTY_CONFIG, DIFFICULTY_KEYS } from "../data/difficulty";

export default function DifficultyModal({ lessonTitle, completedDifficulties, onSelect, onClose }) {
  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed", inset: 0, zIndex: 999,
        background: "rgba(0,0,0,0.7)", backdropFilter: "blur(4px)",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: 20, animation: "fadeIn 0.2s ease",
      }}
    >
      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes scaleIn { from { opacity: 0; transform: scale(0.92); } to { opacity: 1; transform: scale(1); } }
      `}</style>
      <div
        onClick={e => e.stopPropagation()}
        style={{
          background: "#1a2f38", borderRadius: 24, padding: "28px 24px",
          maxWidth: 420, width: "100%",
          border: "1px solid rgba(255,255,255,0.1)",
          boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
          animation: "scaleIn 0.25s ease",
        }}
      >
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 24 }}>
          <div style={{ fontSize: "0.75rem", fontWeight: 800, color: "#89E219", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>
            CHOOSE DIFFICULTY
          </div>
          <div style={{ fontSize: "1.2rem", fontWeight: 900, color: "#fff", fontFamily: "'Nunito', sans-serif" }}>
            {lessonTitle}
          </div>
        </div>

        {/* Difficulty cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 20 }}>
          {DIFFICULTY_KEYS.map(key => {
            const cfg = DIFFICULTY_CONFIG[key];
            const done = completedDifficulties.includes(key);
            return (
              <button
                key={key}
                onClick={() => onSelect(key)}
                style={{
                  display: "flex", alignItems: "center", gap: 14,
                  padding: "14px 16px", borderRadius: 16, cursor: "pointer",
                  background: done ? `${cfg.color}12` : "rgba(255,255,255,0.04)",
                  border: `2px solid ${done ? cfg.color : "rgba(255,255,255,0.08)"}`,
                  transition: "all 0.15s", textAlign: "left", position: "relative",
                }}
              >
                {/* Emoji */}
                <div style={{
                  width: 44, height: 44, borderRadius: 12,
                  background: `${cfg.color}18`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "1.4rem", flexShrink: 0,
                }}>
                  {cfg.emoji}
                </div>

                {/* Info */}
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <span style={{ color: cfg.color, fontWeight: 900, fontSize: "1rem", fontFamily: "'Nunito', sans-serif" }}>
                      {cfg.label}
                    </span>
                    {done && (
                      <span style={{
                        background: cfg.color, color: "#131F24",
                        fontSize: "0.65rem", fontWeight: 900, padding: "2px 7px",
                        borderRadius: 6,
                      }}>
                        {"\u2713"}
                      </span>
                    )}
                  </div>
                  <div style={{ color: "#A0A0A0", fontSize: "0.78rem", fontWeight: 600 }}>
                    {cfg.desc}
                  </div>
                </div>

                {/* XP badge */}
                <div style={{
                  background: `${cfg.color}18`, borderRadius: 10, padding: "6px 10px",
                  flexShrink: 0,
                }}>
                  <div style={{ color: cfg.color, fontWeight: 900, fontSize: "0.85rem", fontFamily: "'Nunito', sans-serif" }}>
                    +{cfg.xpPerQuestion * 3} XP
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Close */}
        <button
          onClick={onClose}
          style={{
            width: "100%", padding: "12px", borderRadius: 12,
            border: "1px solid rgba(255,255,255,0.1)",
            background: "rgba(255,255,255,0.04)", color: "#A0A0A0",
            fontSize: "0.9rem", fontWeight: 700, cursor: "pointer",
            fontFamily: "'Nunito', sans-serif",
          }}
        >
          Back
        </button>
      </div>
    </div>
  );
}
