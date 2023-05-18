import React from 'react'
import ReactDOM from 'react-dom/client'

import { CssBaseline, ThemeProvider } from '@mui/material'
import { Global } from '@emotion/react'

import { HashRouter } from 'react-router-dom'

import App from './App'
import { theme } from './layout/theme'

import './styles/style.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Global
          styles={{
            '*': {
              boxSizing: 'border-box',
              fontFamily: 'Poppins, sans-serif',
              margin: 0,
              padding: 0,
              textDecoration: 'none',
              scrollBehavior: 'smooth',
            },
          }}
        />
        <App />
      </ThemeProvider>
    </HashRouter>
  </React.StrictMode>
)
