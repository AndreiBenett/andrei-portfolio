import { motion } from "motion/react"
import SectionTitle from "../layout/SectionTitle"

export default function About({ darkMode }) {
  return (
    <motion.section
      id="about"
      className="px-6 py-20 lg:px-8"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="About Me"
          title="A student developer focused on practical, user-centered solutions"
          subtitle="A short introduction about my background, strengths, and what I bring to a team."
          darkMode={darkMode}
        />

        <div
          className={`rounded-[2rem] border p-8 md:p-10 shadow-[0_0_40px_rgba(56,189,248,0.08)] ${
            darkMode
              ? "border-sky-400/20 bg-slate-900/70"
              : "border-slate-200 bg-white"
          }`}
        >
          <p className={`max-w-4xl text-base leading-8 md:text-lg ${darkMode ? "text-slate-300" : "text-slate-600"}`}>
            I am a Bachelor of Science in Information Technology (BSIT) student
            with hands-on experience in developing web and mobile systems,
            including e-commerce platforms and health information systems. I
            bring a strong foundation in system analysis, UI/UX considerations,
            information security fundamentals, documentation, and Agile (Scrum)
            development. I am eager to apply my technical knowledge in real
            projects, contribute to a team environment, and continue growing
            through practical industry experience.
          </p>
        </div>
      </div>
    </motion.section>
  )
}