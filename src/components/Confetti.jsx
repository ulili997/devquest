export default function Confetti({ active }) {
  if (!active) return null;
  const particles = Array.from({ length: 40 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    delay: Math.random() * 0.5,
    duration: 1 + Math.random() * 1.5,
    color: ["#58CC02", "#FFC800", "#FF4B4B", "#1CB0F6", "#CE82FF", "#FF9600"][i % 6],
    size: 6 + Math.random() * 8,
    rotation: Math.random() * 360,
  }));
  return (
    <div style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 9999 }}>
      {particles.map(p => (
        <div key={p.id} style={{
          position: "absolute", left: `${p.x}%`, top: "-10px",
          width: p.size, height: p.size, backgroundColor: p.color,
          borderRadius: p.size > 10 ? "50%" : "2px",
          animation: `confettiFall ${p.duration}s ease-in ${p.delay}s forwards`,
          transform: `rotate(${p.rotation}deg)`,
        }} />
      ))}
    </div>
  );
}
