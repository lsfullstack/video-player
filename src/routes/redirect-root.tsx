import { Navigate } from 'react-router-dom'

export function RedirectRoot() {
  const token = localStorage.getItem('video-player:token')
  return token ? (
    <Navigate to="/home" replace />
  ) : (
    <Navigate to="/sign-in" replace />
  )
}
