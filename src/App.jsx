import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <nav>
        <ul>
          <li>Red</li>
          <li>Green</li>
          <li>Blue</li>
          <li>Purple</li>
          
        </ul>
      </nav>
    </>
  )
}

export default App
