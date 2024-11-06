import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Signup from './pages/Signup/index.tsx'
import Signin from './pages/SignIn/index.tsx'
// pages
import { HomePage } from './pages/HomePage/index.tsx'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/signin' element={<Signin />} />
      </Routes>
    </Router>

  </StrictMode>,
)
