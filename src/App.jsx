import { useState } from "react"
import Navbar from "./components/layout/Navbar"
import Footer from "./components/layout/Footer"
import Hero from "./components/sections/Hero"
import About from "./components/sections/About"
import Skills from "./components/sections/Skills"
import Projects from "./components/sections/Projects"
import Education from "./components/sections/Education"
import Contact from "./components/sections/Contact"
import WhyHireMe from "./components/sections/WhyHireMe"

function App() {
  const [darkMode, setDarkMode] = useState(true)

  return (
    <main
  className={
    darkMode
      ? "min-h-screen bg-slate-950 text-white transition-colors duration-300"
      : "min-h-screen bg-slate-100 text-slate-900 transition-colors duration-300"
  }>
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-sky-500/15 blur-3xl" />
        <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Hero darkMode={darkMode} />
      <About darkMode={darkMode} />
      <WhyHireMe darkMode={darkMode} />
      <Skills darkMode={darkMode} />
      <Projects darkMode={darkMode} />
      <Education darkMode={darkMode} />
      <Contact darkMode={darkMode} />
      <Footer darkMode={darkMode} />
    </main>
  )
}

export default App