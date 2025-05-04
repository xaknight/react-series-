import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'

// const anotherElement = <a href="https://google.com">Visit google</a>
const anotherUser = 'chai aur react'

const reactElement = React.createElement(
  'a',
  { href: 'https://google.com', targetS:'_blank' },
  'click me to visit google',
  anotherUser
)
createRoot(document.getElementById('root')).render(
    reactElement
)
