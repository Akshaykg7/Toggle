import { useState } from 'react'
import './App.css'
import Title from './Components/Title'

function App() {
  const [toggle, setToggle] = useState(true)

  return (
    <>
      {toggle && <Title />}
      <button onClick={() => setToggle((prev) => !prev)}>Toggle</button>

    </>
  )
}

export default App
