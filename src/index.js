import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {BrowserRouter} from "react-router-dom"
import PizzeriaProvider from "./context/PizzeriaProvider"

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap"


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <PizzeriaProvider>
            <App />
        </PizzeriaProvider>
    </BrowserRouter>
  </React.StrictMode>
)