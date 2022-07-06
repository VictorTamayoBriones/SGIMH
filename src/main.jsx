import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { ProviderCycles } from './context/cycles'
import { UsersProvider } from './context/users'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <UsersProvider>
        <ProviderCycles>
          <App />
        </ProviderCycles>
      </UsersProvider>
    </BrowserRouter>
  </React.StrictMode>
)
