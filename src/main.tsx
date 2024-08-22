import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Flow } from './Flow'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Flow />
  </StrictMode>,
)
