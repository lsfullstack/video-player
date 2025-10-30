import { BrowserRouter, useRoutes } from 'react-router-dom'
import { Home } from '@/pages/app/home'

function useRouterConfig() {
  const baseRoutes = [
    {
      path: '/',
      element: <Home />,
    },
  ]

  return [...baseRoutes]
}

function RouterWrapper() {
  const routes = useRouterConfig()
  return useRoutes(routes)
}

export function AppRouter() {
  return (
    <BrowserRouter>
      <RouterWrapper />
    </BrowserRouter>
  )
}
