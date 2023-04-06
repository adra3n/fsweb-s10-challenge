import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'

import reducer from './reducers'
import { legacy_createStore as createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import thunk from 'redux-thunk'
import { composeWithDevTools } from '@redux-devtools/extension'
import logger from 'redux-logger'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import './index.css'

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk, logger))
)

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <>
        <ToastContainer />
        <App />
      </>
    </BrowserRouter>
  </Provider>
)
