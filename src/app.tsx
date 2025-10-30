import { Toaster } from 'sonner'

import { QueryClientProvider } from '@tanstack/react-query'

import { queryClient } from './lib/react-query'
import { AppRouter } from './routes/routes'

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster position="top-right" closeButton richColors duration={3000} />
      <AppRouter />
    </QueryClientProvider>
  )
}
