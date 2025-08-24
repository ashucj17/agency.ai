import { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Routing from './Routing/Routing'


function App() {

  const [theme, setTheme] = useState('light')

  return (
    <>
     <div className='relative'> {/* {dark:bg-black} */}
     <Navbar theme={theme} setTheme={setTheme} />
     <main>
      <Routing/>
     </main>
     </div>
    </>
  )
}

export default App
