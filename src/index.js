import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import useConfigureStore from './store/useConfigureStore'

import App from './components/App'

const container = document.getElementById('root')
const root = createRoot(container)
const store = useConfigureStore()
root.render(
  <Provider store={store}>
    <App /> 
  </Provider>
)
