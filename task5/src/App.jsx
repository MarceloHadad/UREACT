import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CarDetails from './components/CarDetails/CarDetails'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Challenge CSS</h1>
      <CarDetails />
    </>
  )
}

export default App
