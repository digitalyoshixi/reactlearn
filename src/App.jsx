import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hello from './components/hello'
import Message from './components/message'
import Form from './components/Form'
import Search from './components/Search'
import Card from './components/Card'
import Light from './components/Light'

function App() {
  const [light, setLight] = useState(false);

  return (
    <>
     <div className={`${light ? 'bg-black' : 'bg-white'} flex flex-row h-screen w-screen place-content-center`}> 
      <Light light={light} setLight={setLight}></Light>
      <Card name='daniel' profession='eater' desc='he is p cool'></Card>
      <Card ></Card>
    </div>
    </>
  )
}

export default App
