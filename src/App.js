import React from 'react'
import './App.css'
import { Outlet, Route, Routes } from 'react-router-dom'
import NotAuthRoute from './pages/NotAuthRoute'
import ProtectedRoute from './pages/ProtectedRoute'
import SigninPage from './pages/SigninPage'
import SignupPage from './pages/SignupPage'
import MainPage from './pages/MainPage'
import ReviewPage from './pages/ReviewPage'
import ProfilePage from './pages/ProfilePage'

function Layout() {
  return <Outlet />
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="post/:postId" element={<ReviewPage />} />
        <Route element={<NotAuthRoute />}>
          <Route path="/login" element={<SigninPage />} />
          <Route path="signup" element={<SignupPage />} />
        </Route>
        <Route element={<ProtectedRoute />}>
          <Route path="/profile/:userId" element={<ProfilePage />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default App
