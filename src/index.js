import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import { createLogger } from 'redux-logger'
import './index.css'
import App from './App'
import { searchRobots } from './reducers'
import reportWebVitals from './reportWebVitals'

const logger = createLogger()

const store = configureStore({
  reducer: searchRobots,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

const root = createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
