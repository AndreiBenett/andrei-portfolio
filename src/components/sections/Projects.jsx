import { motion } from "motion/react"
import SectionTitle from "../layout/SectionTitle"
import { projects } from "../../data/portfolioData"
import {
  HiArrowTopRightOnSquare,
  HiCodeBracket,
  HiSparkles,
} from "react-icons/hi2"

export default function Projects({ darkMode }) {
  const featuredProject = projects[0]
  const otherProjects = projects.slice(1)

  return (
    <motion.section
      id="projects"
      className="px-6 py-20 lg:px-8"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Featured Projects"
          title="Selected work that reflects my skills, thinking, and design approach"
          subtitle="A showcase of projects focused on usability, system structure, and practical real-world value."
          darkMode={darkMode}
        />

        <div className="space-y-8">
          <FeaturedProjectCard project={featuredProject} darkMode={darkMode} />

          <div className="grid gap-8 xl:grid-cols-2">
            {otherProjects.map((project, index) => (
              <SecondaryProjectCard
                key={project.title}
                project={project}
                darkMode={darkMode}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  )
}

function FeaturedProjectCard({ project, darkMode }) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      className={`group glass-shine overflow-hidden rounded-[2rem] border shadow-[0_0_50px_rgba(56,189,248,0.12)] ${
        darkMode
          ? "border-sky-400/20 bg-slate-900/70"
          : "border-slate-200 bg-white"
      }`}
    >
      <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
        <div className="relative min-h-[320px] overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/75 via-slate-950/30 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.18),transparent_30%)]" />

          <div className="absolute left-6 top-6 flex flex-wrap gap-3">
            <span className="rounded-full bg-sky-400 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-slate-950">
              Spotlight Project
            </span>
            <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white backdrop-blur">
              {project.subtitle}
            </span>
          </div>

          <div className="absolute bottom-6 left-6 max-w-lg">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.26em] text-sky-300">
              Premium Showcase
            </p>
            <h3 className="text-3xl font-black leading-tight text-white md:text-4xl">
              {project.title}
            </h3>
          </div>
        </div>

        <div className="p-8 md:p-10">
          <div className="mb-5 inline-flex rounded-2xl bg-sky-400/10 p-3 text-sky-400">
            <HiSparkles className="text-xl" />
          </div>

          <h4 className="text-2xl font-bold">Project Overview</h4>

          <p
            className={`mt-5 text-base leading-8 ${
              darkMode ? "text-slate-300" : "text-slate-600"
            }`}
          >
            {project.description}
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <InfoBox
              label="Focus"
              value="Usability, system structure, and practical implementation"
              darkMode={darkMode}
            />
            <InfoBox
              label="Approach"
              value="Clean interface, organized workflow, and real-world relevance"
              darkMode={darkMode}
            />
          </div>

          <div className="mt-8">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-sky-400">
              Tech Stack
            </p>
            <div className="flex flex-wrap gap-3">
              {project.tech.map((item) => (
                <motion.span
                  key={item}
                  whileHover={{ scale: 1.05 }}
                  className={`rounded-full border px-4 py-2 text-sm ${
                    darkMode
                      ? "border-sky-400/20 bg-sky-400/10 text-sky-200"
                      : "border-sky-200 bg-sky-50 text-sky-700"
                  }`}
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-sky-400 px-6 py-3.5 font-semibold text-slate-950 transition hover:bg-sky-300"
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
              className={`inline-flex items-center gap-2 rounded-full border px-6 py-3.5 font-semibold transition ${
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
      </div>
    </motion.article>
  )
}

function SecondaryProjectCard({ project, darkMode, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      viewport={{ once: true, amount: 0.18 }}
      whileHover={{ y: -6 }}
      className={`group glass-shine overflow-hidden rounded-[1.75rem] border shadow-[0_0_40px_rgba(56,189,248,0.08)] ${
        darkMode
          ? "border-sky-400/20 bg-slate-900/70"
          : "border-slate-200 bg-white"
      }`}
    >
      <div className="relative h-60 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/15 to-transparent" />

        <div className="absolute left-5 top-5">
          <span className="rounded-full bg-sky-400/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-950">
            {project.subtitle}
          </span>
        </div>

        <div className="absolute bottom-5 left-5 right-5">
          <h3 className="text-2xl font-bold leading-tight text-white">
            {project.title}
          </h3>
        </div>
      </div>

      <div className="p-6">
        <p
          className={`text-sm leading-7 ${
            darkMode ? "text-slate-300" : "text-slate-600"
          }`}
        >
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((item) => (
            <motion.span
              key={item}
              whileHover={{ scale: 1.05 }}
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

        <div className="mt-6 flex flex-wrap gap-3">
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

function InfoBox({ label, value, darkMode }) {
  return (
    <div
      className={`rounded-2xl border p-4 ${
        darkMode
          ? "border-white/10 bg-slate-950/60"
          : "border-slate-200 bg-slate-50"
      }`}
    >
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-400">
        {label}
      </p>
      <p
        className={`mt-2 text-sm leading-7 ${
          darkMode ? "text-slate-300" : "text-slate-600"
        }`}
      >
        {value}
      </p>
    </div>
  )
}