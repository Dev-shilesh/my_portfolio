import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import About from './components/About'
import Projects from './components/Projects'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Services from './components/Services'
// import Navbar from './components/Navbar'

// import NET from 'vanta/dist/vanta.net.min.js';

function App() {
  // const [count, setCount] = useState(0)
  // useEffect(() => {
  //   NET({
  //     el: "#main",
  //     mouseControls: true,
  //     touchControls: true,
  //     gyroControls: false,
  //     minHeight: 200.00,
  //     minWidth: 200.00,
  //     scale: 1.00,
  //     scaleMobile: 1.00,
  //     color: 0x1e46c2,
  //     backgroundColor: 0x10022,
  //     maxDistance: 27.00,
  //     spacing: 16.00

  //   })
  // }, [])

  return (
    <>
      <div className="font-sans text-white bg-black min-h-screen ">

        <Navbar />
        <main className="p-6 space-y-10" >

          <Hero />
          {/* About Section */}
          <About />

          {/* Projects Section */}
          <Projects />

          {/*           Skills Section */}
          <Skills />

          {/* services */}
          <Services />
        </main>

        {/* Footer */}
        <Footer />
        {/* <footer className="bg-gray-900 text-center p-4 mt-10">
          <p className="text-gray-500">© {new Date().getFullYear()} Shilesh Mavchi. All rights reserved.</p>
        </footer> */}

      </div>
    </>
  )
}

export default App
