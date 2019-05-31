import React from 'react'
import ReactDOM from 'react-dom'
import DefaultErrorBoundary from './DefaultErrorBoundary'
import App from './App'
import './style.css'
import 'babel-polyfill'

if (process.env.NODE_ENV === 'development') {
  const axe = require('react-axe')
  axe(React, ReactDOM, 1000)
}

ReactDOM.render(
  <React.strictMode>
    <DefaultErrorBoundary>
      <App />
    </DefaultErrorBoundary>
  </React.strictMode>,
  document.getElementById('app')
)
