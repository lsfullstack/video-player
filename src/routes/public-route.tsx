import { Navigate, Outlet } from 'react-router-dom'

export function PublicRoute() {
  const token = localStorage.getItem('video-player:token')
  return token ? <Navigate to="/home" replace /> : <Outlet />
}
