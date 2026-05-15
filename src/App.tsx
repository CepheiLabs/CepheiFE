import { Navigate, Route, Routes, useNavigate } from "react-router-dom"

import LandingPage from "@/pages/LandingPage"
import LoginPage from "@/pages/LoginPage"
import SignUpPage from "@/pages/SignUpPage"

function App() {
  const navigate = useNavigate()

  return (
    <Routes>
      <Route
        path="/"
        element={<LandingPage onLogIn={() => navigate("/login")} onSignUp={() => navigate("/signup")} />}
      />
      <Route
        path="/login"
        element={
          <LoginPage
            onBackHome={() => navigate("/")}
            onSignUp={() => navigate("/signup")}
            onComplete={() => navigate("/")}
          />
        }
      />
      <Route
        path="/signup"
        element={
          <SignUpPage
            onBackHome={() => navigate("/")}
            onLogIn={() => navigate("/login")}
            onComplete={() => navigate("/")}
          />
        }
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
