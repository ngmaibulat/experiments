import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import Hello from '@aibulat/components/hello'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">

      test: import Hello from '@aibulat/components/hello'

      <Hello />

    </div>
  )
}

export default App
