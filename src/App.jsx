import { useState } from 'react'
import Navbar from './Components/Navbar'


function App() {

  const [theme, setTheme] = useState('light')

  return (
    <>
     <div className='dark:bg-black relative'>
     <Navbar theme={theme} setTheme={setTheme} />
     </div>
    </>
  )
}

export default App
