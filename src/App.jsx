import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import { MantineProvider } from '@mantine/core';
import './App.css'
import '@mantine/core/styles.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MantineProvider>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </MantineProvider>
    </>
  )
}

export default App
