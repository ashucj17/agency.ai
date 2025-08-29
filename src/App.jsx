import { useState, useEffect, useRef } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Routing from './Routing/Routing'
import { Toaster } from 'react-hot-toast';
import Footer from './Components/Footer/Footer';


function App() {

  const dotRef = useRef(null)
  const outlineRef = useRef(null)

  // custom cursor position

  const mouse = useRef({x:0, y:0})
  const position = useRef({x:0, y:0})

  useEffect(()=>{

    const handleMouseMove= (e)=>{
    mouse.current.x = e.clientX
    mouse.current.y = e.clientY
    }

    document.addEventListener('mousemove',handleMouseMove)

    const animate = () =>{
      position.current.x += (mouse.current.x - position.current.x) * 0.1
      position.current.y += (mouse.current.y - position.current.y) * 0.1

      if(dotRef.current && outlineRef.current){
        dotRef.current.style.transform = `translate3d(${mouse.current.x - 6}px, ${mouse.current.y - 6}px, 0)`
        outlineRef.current.style.transform = `translate3d(${position.current.x - 20}px, ${position.current.y - 20}px, 0)`
      }

      requestAnimationFrame(animate)
    }

animate()

return () =>{
  document.removeEventListener('mousemove', handleMouseMove)
}

  },[])

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
     {/* Custom cursor ring */}
     <div ref={outlineRef} className='fixed top-0 left-0 h-10 w-10 rounded-full border border-gray-200 pointer-events-none z-[9999]' style={{transition: 'transform 0.1s ease-out'}}></div>

     {/* Custom cursor dot */}
     <div ref={dotRef} className='fixed top-0 left-0 h-3 w-3 rounded-full border border-gray-200 pointer-events-none z-[9999]'></div>
     </div>
    </>
  )
}

export default App
