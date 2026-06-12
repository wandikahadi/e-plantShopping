import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store.js'

import AppRoutes from './AppRoutes.jsx'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <Router>
      <AppRoutes />
    </Router>
  </Provider>
)
