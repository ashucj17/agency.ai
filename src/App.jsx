import { useState, useEffect } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Routing from './Routing/Routing'
import { Toaster } from 'react-hot-toast';
import Footer from './Components/Footer/Footer';


function App() {

const [theme, setTheme] = useState(() => {
  // if not saved before, check system preference
  const saved = localStorage.getItem("theme");
  if (saved) return saved;

  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  return prefersDark ? "dark" : "light";
});


  return (
    <>
     <div className='dark:bg-black relative'>
     <Toaster />
     <Navbar theme={theme} setTheme={setTheme} />
     <main>
      <Routing/>
     </main>
     <Footer theme={theme} setTheme={setTheme}/>
     </div>
    </>
  )
}

export default App
