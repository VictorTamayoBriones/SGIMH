import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { ProviderBuildings } from './context/buildings'
import { ProviderCycles } from './context/cycles'
import { UsersProvider } from './context/users'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <UsersProvider>
        <ProviderCycles>
          <ProviderBuildings>
            <App />
          </ProviderBuildings>
        </ProviderCycles>
      </UsersProvider>
    </BrowserRouter>
  </React.StrictMode>
)
