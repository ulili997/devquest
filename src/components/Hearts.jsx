export default function Hearts({ count }) {
  return (
    <div style={{ display: "flex", gap: 3, alignItems: "center" }}>
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} style={{
          fontSize: "1.1rem", opacity: i < count ? 1 : 0.2,
          filter: i < count ? "none" : "grayscale(1)",
          transition: "all 0.3s ease",
        }}>{"\u2764\uFE0F"}</span>
      ))}
    </div>
  );
}
