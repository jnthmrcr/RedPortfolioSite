import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Portfolio from './Portfolio'
// import './index.css'
import './Portfolio.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Portfolio/>
	{/* <App/> */}
  </React.StrictMode>
)
