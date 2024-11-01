import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hello from './components/hello'
import Message from './components/message'
import Form from './components/Form'
import Search from './components/Search'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <Search></Search>
    </>
  )
}

export default App
