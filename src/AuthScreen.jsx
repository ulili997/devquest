import { useState } from "react";

export default function AuthScreen({ onLogin, onRegister, error, loading }) {
  const [isRegister, setIsRegister] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isRegister) onRegister(email, password);
    else onLogin(email, password);
  };

  return (
    <div style={{
      minHeight: "100vh", background: "#131F24", display: "flex", alignItems: "center",
      justifyContent: "center", fontFamily: "'Nunito', sans-serif", padding: 20,
    }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap');`}</style>
      <div style={{ maxWidth: 400, width: "100%" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: "2.5rem", marginBottom: 8 }}>{"\uD83D\uDDA5\uFE0F"}</div>
          <div style={{ fontSize: "1.8rem", fontWeight: 900, color: "#58CC02", letterSpacing: "-0.02em" }}>
            DevQuest
          </div>
          <div style={{ color: "#A0A0A0", fontSize: "0.9rem", fontWeight: 600, marginTop: 4 }}>
            Learn Full Stack Development
          </div>
        </div>

        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              padding: "14px 16px", borderRadius: 12, border: "2px solid rgba(255,255,255,0.1)",
              background: "rgba(255,255,255,0.05)", color: "#E5E5E5", fontSize: "1rem",
              fontFamily: "'Nunito', sans-serif", fontWeight: 600, outline: "none",
              transition: "border-color 0.2s",
            }}
            onFocus={(e) => e.target.style.borderColor = "#58CC02"}
            onBlur={(e) => e.target.style.borderColor = "rgba(255,255,255,0.1)"}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength={6}
            style={{
              padding: "14px 16px", borderRadius: 12, border: "2px solid rgba(255,255,255,0.1)",
              background: "rgba(255,255,255,0.05)", color: "#E5E5E5", fontSize: "1rem",
              fontFamily: "'Nunito', sans-serif", fontWeight: 600, outline: "none",
              transition: "border-color 0.2s",
            }}
            onFocus={(e) => e.target.style.borderColor = "#58CC02"}
            onBlur={(e) => e.target.style.borderColor = "rgba(255,255,255,0.1)"}
          />

          {error && (
            <div style={{
              padding: "12px 16px", borderRadius: 12, background: "#FF4B4B18",
              border: "1px solid #FF4B4B44", color: "#FF4B4B", fontSize: "0.9rem",
              fontWeight: 700, textAlign: "center",
            }}>
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            style={{
              padding: "14px", borderRadius: 14, border: "none", cursor: loading ? "wait" : "pointer",
              background: "#58CC02", color: "#fff", fontSize: "1.05rem", fontWeight: 800,
              fontFamily: "'Nunito', sans-serif", letterSpacing: "0.02em",
              boxShadow: "0 4px 0 #46a302, 0 6px 20px rgba(88,204,2,0.3)",
              opacity: loading ? 0.7 : 1, transition: "opacity 0.2s",
            }}
          >
            {loading ? "Please wait..." : isRegister ? "CREATE ACCOUNT" : "LOG IN"}
          </button>
        </form>

        <div style={{ textAlign: "center", marginTop: 24 }}>
          <button
            onClick={() => { setIsRegister(!isRegister); }}
            style={{
              background: "none", border: "none", color: "#1CB0F6", cursor: "pointer",
              fontSize: "0.9rem", fontWeight: 700, fontFamily: "'Nunito', sans-serif",
            }}
          >
            {isRegister ? "Already have an account? Log in" : "Don't have an account? Sign up"}
          </button>
        </div>
      </div>
    </div>
  );
}
