import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import WeatherApp from './components/WeatherApp/WeatherApp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <WeatherApp/>
    </>
    
 
  )
}

export default App
