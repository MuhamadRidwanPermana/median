import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from './Page/Login.jsx'
import Register from './Page/Register.jsx'
import ForgotPassword from './Page/ForgotPassword.jsx'
import LandingPage from './Page/LandingPage.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/dashboard" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
