import React from 'react'
import App from './App.jsx'
import { createRoot } from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import './index.css'

const container = document.getElementById('root')
const root = createRoot(container)
root.render(<App />)