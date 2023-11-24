import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import userState from '../../store/atom/userState'

const ProtectedRoute = () => {
  const { isAuth } = useRecoilValue(userState)

  return isAuth ? <Outlet /> : <Navigate to="/login" />
}

export default ProtectedRoute
