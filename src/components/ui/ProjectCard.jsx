import { motion } from "motion/react"
import { HiArrowTopRightOnSquare, HiCodeBracket } from "react-icons/hi2"

export default function ProjectCard({ project, darkMode, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      viewport={{ once: true, amount: 0.15 }}
      whileHover={{ y: -8 }}
      className={`group glass-shine overflow-hidden rounded-[1.75rem] border shadow-[0_0_40px_rgba(56,189,248,0.08)] transition ${
        darkMode
          ? "border-sky-400/20 bg-slate-900/70"
          : "border-slate-200 bg-white"
      }`}
    >
      <div className="relative h-56 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />

        <div className="absolute bottom-4 left-4">
          <span className="rounded-full bg-sky-400/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-950">
            {project.subtitle}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bold leading-snug">{project.title}</h3>

        <p className={`mt-4 text-sm leading-7 ${darkMode ? "text-slate-300" : "text-slate-600"}`}>
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((item) => (
            <motion.span
              key={item}
              whileHover={{ scale: 1.06 }}
              className={`rounded-full border px-3 py-1 text-sm ${
                darkMode
                  ? "border-sky-400/20 bg-sky-400/10 text-sky-200"
                  : "border-sky-200 bg-sky-50 text-sky-700"
              }`}
            >
              {item}
            </motion.span>
          ))}
        </div>

        <div className="mt-7 flex flex-wrap gap-3">
          <motion.a
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-sky-400 px-5 py-3 font-semibold text-slate-950 transition hover:bg-sky-300"
          >
            <HiArrowTopRightOnSquare />
            Live Demo
          </motion.a>

          <motion.a
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className={`inline-flex items-center gap-2 rounded-full border px-5 py-3 font-semibold transition ${
              darkMode
                ? "border-white/15 bg-white/5 text-white hover:bg-white/10"
                : "border-slate-300 bg-white text-slate-900 hover:bg-slate-50"
            }`}
          >
            <HiCodeBracket />
            GitHub Repo
          </motion.a>
        </div>
      </div>
    </motion.article>
  )
}