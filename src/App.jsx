import { useState } from 'react'
import { Registration } from "./Registration"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      < Registration />
    </>
  )
}

export default App
