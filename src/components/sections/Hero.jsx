import { motion } from "motion/react"
import {
  HiArrowDownTray,
  HiEnvelope,
  HiArrowDown,
  HiSparkles,
  HiCodeBracket,
  HiBriefcase,
} from "react-icons/hi2"
import profileImg from "../../assets/profile.jpeg"

const statCards = [
  { value: "3+", label: "Featured Projects", icon: HiCodeBracket },
  { value: "10+", label: "Core Skills", icon: HiSparkles },
  { value: "OJT", label: "Open for Internship", icon: HiBriefcase },
]

export default function Hero({ darkMode }) {
  return (
    <section className="grid-overlay relative overflow-hidden px-6 pb-24 pt-24 md:pt-32 lg:px-8">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-[8%] top-8 h-72 w-72 rounded-full bg-sky-500/12 blur-3xl" />
        <div className="absolute right-[6%] top-24 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-72 w-[44rem] -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(2,6,23,0.15)_70%,rgba(2,6,23,0.4)_100%)]" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="mb-6 flex flex-wrap gap-3"
          >
            <span className="rounded-full border border-sky-400/25 bg-sky-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-sky-300">
              BSIT Student
            </span>
            <span
              className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] ${
                darkMode
                  ? "border-white/10 bg-white/5 text-white/80"
                  : "border-slate-300 bg-white text-slate-700"
              }`}
            >
              Web Developer
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05, duration: 0.5 }}
            className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-400"
          >
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mt-6 max-w-5xl text-5xl font-black leading-[0.95] md:text-7xl xl:text-[5.5rem]"
          >
            Andrei Benett
            <span className="mt-1 block bg-gradient-to-r from-sky-300 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
              P. Dela Cruz
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18, duration: 0.55 }}
            className="mt-8 max-w-3xl"
          >
            <p
              className={`text-xl font-medium leading-8 md:text-2xl md:leading-9 ${
                darkMode ? "text-white/90" : "text-slate-800"
              }`}
            >
              Building secure, scalable web and mobile solutions with clean UI/UX, 
              structured system analysis, and practical real-world value.
            </p>

            <p
              className={`mt-5 text-base leading-8 md:text-lg ${
                darkMode ? "text-slate-300" : "text-slate-600"
              }`}
            >
              I am a graduating BSIT honors candidate and IT Intern at PHilMech, 
              specializing in full-stack development using Agile methodologies. 
              I am actively seeking full-time IT opportunities post-graduation 
              where I can leverage my technical expertise and utilize AI tools to 
              deliver impactful, forward-thinking digital solutions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28, duration: 0.55 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <motion.a
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#projects"
              className="rounded-full bg-sky-400 px-7 py-3.5 font-semibold text-slate-950 shadow-[0_0_30px_rgba(56,189,248,0.18)] transition hover:bg-sky-300"
            >
              View Projects
            </motion.a>

            <motion.a
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className={`inline-flex items-center gap-2 rounded-full border px-7 py-3.5 font-semibold transition ${
                darkMode
                  ? "border-white/15 bg-white/5 text-white hover:bg-white/10"
                  : "border-slate-300 bg-white text-slate-900 hover:bg-slate-50"
              }`}
            >
              <HiArrowDownTray className="text-lg" />
              Download Resume
            </motion.a>

            <motion.a
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#contact"
              className={`inline-flex items-center gap-2 rounded-full border px-7 py-3.5 font-semibold transition ${
                darkMode
                  ? "border-white/15 bg-white/5 text-white hover:bg-white/10"
                  : "border-slate-300 bg-white text-slate-900 hover:bg-slate-50"
              }`}
            >
              <HiEnvelope className="text-lg" />
              Contact Me
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.38, duration: 0.55 }}
            className="mt-12 grid max-w-3xl gap-4 sm:grid-cols-3"
          >
            {statCards.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.label}
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.42 + index * 0.08, duration: 0.45 }}
                  className={`glass-shine rounded-[1.5rem] border p-5 ${
                    darkMode
                      ? "border-sky-400/20 bg-slate-900/70"
                      : "border-slate-200 bg-white"
                  }`}
                >
                  <div className="mb-3 inline-flex rounded-xl bg-sky-400/10 p-3 text-sky-400">
                    <Icon />
                  </div>
                  <p className="text-3xl font-black text-sky-400">
                    {item.value}
                  </p>
                  <p
                    className={`mt-1 text-sm ${
                      darkMode ? "text-slate-300" : "text-slate-600"
                    }`}
                  >
                    {item.label}
                  </p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.12 }}
          className={`relative rounded-[2rem] border p-6 shadow-[0_0_60px_rgba(56,189,248,0.14)] ${
            darkMode
              ? "border-sky-400/20 bg-slate-900/70"
              : "border-slate-200 bg-white"
          }`}
        >
          <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.14),transparent_34%)]" />

          <div
            className={`relative rounded-[1.7rem] border p-8 ${
              darkMode
                ? "border-white/10 bg-slate-950/60"
                : "border-slate-200 bg-slate-50"
            }`}
          >
            <div className="mb-8 flex gap-2">
              <span className="h-3 w-3 rounded-full bg-sky-400" />
              <span className="h-3 w-3 rounded-full bg-cyan-300" />
              <span className="h-3 w-3 rounded-full bg-blue-500" />
            </div>

            <div className="flex flex-col items-center text-center">
              <motion.div
                animate={{ y: [0, -8, 0], rotate: [0, 1, 0, -1, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="relative mb-7"
              >
                <div className="absolute inset-0 rounded-full bg-sky-400/20 blur-2xl" />
                <div className="absolute -inset-3 rounded-full border border-sky-400/15" />
                <img
                  src={profileImg}
                  alt="Andrei Benett P. Dela Cruz"
                  className="relative h-48 w-48 rounded-full border border-sky-400/30 object-cover shadow-[0_0_40px_rgba(56,189,248,0.22)]"
                />
              </motion.div>

              <div className="mb-4 rounded-full border border-sky-400/20 bg-sky-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-sky-300">
                Seeking Full-Time Roles
              </div>

              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-400">
                Career Focus
              </p>

              <h3 className="mt-4 text-3xl font-bold">
                Practical systems with modern UI
              </h3>

              <p
                className={`mt-4 leading-7 ${
                  darkMode ? "text-slate-300" : "text-slate-600"
                }`}
              >
                Focused on web applications, mobile experiences, system
                thinking, and clean design that solves real user needs.
              </p>

              <div className="mt-8 grid w-full gap-3 sm:grid-cols-2">
                <div
                  className={`rounded-2xl border p-4 text-left ${
                    darkMode
                      ? "border-white/10 bg-slate-900/60"
                      : "border-slate-200 bg-white"
                  }`}
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-400">
                    Strength
                  </p>
                  <p className="mt-2 font-semibold">System Analysis</p>
                </div>

                <div
                  className={`rounded-2xl border p-4 text-left ${
                    darkMode
                      ? "border-white/10 bg-slate-900/60"
                      : "border-slate-200 bg-white"
                  }`}
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-400">
                    Focus
                  </p>
                  <p className="mt-2 font-semibold">UI & Web Solutions</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.75 }}
        className="mx-auto mt-14 flex w-fit flex-col items-center gap-2 text-sky-400"
      >
        <span className="text-xs font-semibold uppercase tracking-[0.25em]">
          Scroll
        </span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="rounded-full border border-sky-400/30 p-2"
        >
          <HiArrowDown />
        </motion.span>
      </motion.a>
    </section>
  )
}