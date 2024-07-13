import { useState } from 'react'
import '@/App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from '@/Page/Login.jsx'
import LandingPage from '@/Page/LandingPage.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
