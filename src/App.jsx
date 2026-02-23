import { useState } from 'react'
import useAuth from './useAuth'
import AuthScreen from './AuthScreen'
import DevQuest from './DevQuest.jsx'

function App() {
  const { user, loading, login, register, logout } = useAuth()
  const [authError, setAuthError] = useState(null)
  const [authLoading, setAuthLoading] = useState(false)

  const handleLogin = async (email, password) => {
    setAuthError(null)
    setAuthLoading(true)
    try {
      await login(email, password)
    } catch (e) {
      setAuthError(e.message)
    } finally {
      setAuthLoading(false)
    }
  }

  const handleRegister = async (email, password) => {
    setAuthError(null)
    setAuthLoading(true)
    try {
      await register(email, password)
    } catch (e) {
      setAuthError(e.message)
    } finally {
      setAuthLoading(false)
    }
  }

  if (loading) {
    return (
      <div style={{
        minHeight: "100vh", background: "#131F24", display: "flex",
        alignItems: "center", justifyContent: "center",
      }}>
        <div style={{
          color: "#58CC02", fontSize: "2rem", fontWeight: 900,
          fontFamily: "'Nunito', sans-serif", animation: "pulse 1.5s infinite",
        }}>
          Loading DevQuest...
        </div>
        <style>{`@keyframes pulse { 0%,100% { opacity: 1; } 50% { opacity: 0.5; } }`}</style>
      </div>
    )
  }

  if (!user) {
    return (
      <AuthScreen
        onLogin={handleLogin}
        onRegister={handleRegister}
        error={authError}
        loading={authLoading}
      />
    )
  }

  return <DevQuest uid={user.uid} userEmail={user.email} onLogout={logout} />
}

export default App
