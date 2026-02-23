export default function XPBurst({ amount, visible }) {
  if (!visible) return null;
  return (
    <div style={{
      position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)",
      zIndex: 9998, animation: "xpBurst 1.2s ease-out forwards",
      fontSize: "3rem", fontWeight: 900, color: "#FFC800",
      textShadow: "0 0 30px rgba(255,200,0,0.6)", fontFamily: "'Nunito', sans-serif",
    }}>+{amount} XP</div>
  );
}
