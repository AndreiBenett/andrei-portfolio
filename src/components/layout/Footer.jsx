import { motion } from "motion/react"
import { FaGithub, FaLinkedin } from "react-icons/fa6"

export default function Footer({ darkMode }) {
  return (
    <footer
      className={`border-t px-6 py-10 ${
        darkMode ? "border-white/10 text-slate-400" : "border-slate-200 text-slate-600"
      }`}
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 md:flex-row">
        <div>
          <p className="font-semibold text-sky-400">Andrei Benett P. Dela Cruz</p>
          <p className="mt-1 text-sm">
            BSIT Student & Developer • Seeking OJT / Internship Opportunities
          </p>
        </div>

        <div className="flex items-center gap-3">
          <motion.a
            whileHover={{ y: -2 }}
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className={`rounded-full border p-3 transition ${
              darkMode
                ? "border-white/10 bg-white/5 text-white hover:bg-white/10"
                : "border-slate-200 bg-white text-slate-900 hover:bg-slate-50"
            }`}
          >
            <FaGithub />
          </motion.a>

          <motion.a
            whileHover={{ y: -2 }}
            href="https://linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className={`rounded-full border p-3 transition ${
              darkMode
                ? "border-white/10 bg-white/5 text-white hover:bg-white/10"
                : "border-slate-200 bg-white text-slate-900 hover:bg-slate-50"
            }`}
          >
            <FaLinkedin />
          </motion.a>
        </div>
      </div>
    </footer>
  )
}