import { useEffect, useState } from "react"
import { HiBars3, HiXMark } from "react-icons/hi2"

const navItems = ["about", "why-hire-me", "skills", "projects", "education", "contact"]

export default function Navbar({ darkMode, setDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("about")

  useEffect(() => {
    const sections = navItems
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting)
        if (visible) setActiveSection(visible.target.id)
      },
      {
        rootMargin: "-35% 0px -50% 0px",
        threshold: 0.1,
      }
    )

    sections.forEach((section) => observer.observe(section))
    return () => sections.forEach((section) => observer.unobserve(section))
  }, [])

  const navText = darkMode ? "text-slate-300" : "text-slate-700"

  return (
    <header
      className={`sticky top-0 z-50 border-b backdrop-blur-xl ${
        darkMode
          ? "border-white/10 bg-slate-950/70"
          : "border-slate-200 bg-white/75"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#" className="text-xl font-black tracking-wide">
          Andrei<span className="text-sky-400">.</span>
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => {
            const isActive = activeSection === item
            return (
              <a
                key={item}
                href={`#${item}`}
                className={`relative text-sm font-medium capitalize transition ${
                  isActive ? "text-sky-400" : `${navText} hover:text-sky-400`
                }`}
              >
                {item.replaceAll("-", " ")}
                <span
                  className={`absolute -bottom-2 left-0 h-0.5 bg-sky-400 transition-all ${
                    isActive ? "w-full" : "w-0"
                  }`}
                />
              </a>
            )
          })}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`rounded-full border px-4 py-2 text-sm font-semibold transition hover:scale-105 ${
              darkMode
                ? "border-sky-400/30 bg-sky-400/10 text-sky-300 hover:bg-sky-400/20"
                : "border-sky-300 bg-sky-50 text-sky-700 hover:bg-sky-100"
            }`}
          >
            {darkMode ? "Light" : "Dark"}
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`inline-flex rounded-full border p-2 md:hidden ${
              darkMode
                ? "border-white/10 bg-white/5 text-white"
                : "border-slate-200 bg-white text-slate-900"
            }`}
            aria-label="Toggle menu"
          >
            {menuOpen ? <HiXMark size={22} /> : <HiBars3 size={22} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div
          className={`border-t px-6 py-4 md:hidden ${
            darkMode ? "border-white/10 bg-slate-950/95" : "border-slate-200 bg-white"
          }`}
        >
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item}`}
                onClick={() => setMenuOpen(false)}
                className={`text-sm font-medium capitalize ${
                  activeSection === item ? "text-sky-400" : navText
                }`}
              >
                {item.replaceAll("-", " ")}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}