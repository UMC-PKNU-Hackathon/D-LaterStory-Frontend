import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import userState from '../../store/atom/userState'

const NotAuthRoute = () => {
  const { isAuth } = useRecoilValue(userState)

  return isAuth ? <Navigate to="/" /> : <Outlet />
}

export default NotAuthRoute
