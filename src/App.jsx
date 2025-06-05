import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="font-sans text-white bg-black min-h-screen">

        {/* Header Section */}
        <header className="bg-gray-900 p-4">
          <h1 className="text-3xl font-bold">Shilesh Mavchi</h1>
          <p className="text-gray-400">Full Stack Developer</p>
        </header>

        {/* Main Content */}
        <main className="p-6 space-y-10">

          {/* About Section */}
          <section id="about">
            <h2 className="text-2xl font-semibold mb-2">About Me</h2>
            <p className="text-gray-300">
              I am a passionate Full Stack Developer with 1 year of experience in React.js, JavaScript, and backend development.
            </p>
          </section>

          {/* Projects Section */}
          <section id="projects">
            <h2 className="text-2xl font-semibold mb-2">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-800 p-4 rounded-lg">
                <img src="/project1.png" alt="Screenshot of Project 1" className="rounded mb-2" />
                <h3 className="text-xl font-semibold">Project One</h3>
                <p className="text-gray-400">A responsive portfolio using React and Tailwind CSS.</p>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg">
                <img src="/project2.png" alt="Screenshot of Project 2" className="rounded mb-2" />
                <h3 className="text-xl font-semibold">Project Two</h3>
                <p className="text-gray-400">A job portal web app built using the MERN stack.</p>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact">
            <h2 className="text-2xl font-semibold mb-2">Contact</h2>
            <p>Email: <a href="mailto:shileshmavchi@gmail.com" className="text-blue-400 underline">shileshmavchi@gmail.com</a></p>
          </section>

        </main>

        {/* Footer */}
        <footer className="bg-gray-900 text-center p-4 mt-10">
          <p className="text-gray-500">© {new Date().getFullYear()} Shilesh Mavchi. All rights reserved.</p>
        </footer>

      </div>
    </>
  )
}

export default App
