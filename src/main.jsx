import React from 'react'
import ReactDOM from 'react-dom/client'
import { TodoProvider } from './context/TodoContext.jsx'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('app-root')).render(
    <React.StrictMode>
        <TodoProvider>
            <App />
        </TodoProvider>
    </React.StrictMode>
)
