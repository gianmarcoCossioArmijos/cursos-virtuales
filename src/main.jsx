import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from './routes/Router'
import './index.css'
import { Toaster } from 'sonner'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Router />

    <Toaster
        richColors
        position="bottom-right"/>
  </>
)
