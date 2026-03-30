import { motion } from "motion/react"
import { HiAcademicCap, HiBolt, HiUsers, HiDocumentText } from "react-icons/hi2"
import SectionTitle from "../layout/SectionTitle"

const items = [
  {
    icon: HiAcademicCap,
    title: "Strong technical foundation",
    text: "Built practical systems using web and mobile technologies with focus on real-world use cases.",
  },
  {
    icon: HiDocumentText,
    title: "Good documentation skills",
    text: "Experienced in requirements gathering, technical writing, and system analysis.",
  },
  {
    icon: HiUsers,
    title: "Team-ready mindset",
    text: "Understands collaboration, communication, and Agile workflows in project environments.",
  },
  {
    icon: HiBolt,
    title: "Fast learner",
    text: "Adaptable, curious, and willing to learn new tools, workflows, and technologies quickly.",
  },
]

export default function WhyHireMe({ darkMode }) {
  return (
    <motion.section
      id="why-hire-me"
      className="px-6 py-20 lg:px-8"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Why Hire Me"
          title="What I can bring to your team"
          subtitle="A quick snapshot of the value I can offer during internship or OJT opportunities."
          darkMode={darkMode}
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {items.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: index * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className={`glass-shine rounded-[1.75rem] border p-6 shadow-[0_0_40px_rgba(56,189,248,0.08)] ${
                  darkMode
                    ? "border-sky-400/20 bg-slate-900/70"
                    : "border-slate-200 bg-white"
                }`}
              >
                <div className="mb-4 inline-flex rounded-2xl bg-sky-400/10 p-3 text-2xl text-sky-400">
                  <Icon />
                </div>
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className={`mt-3 leading-7 ${darkMode ? "text-slate-300" : "text-slate-600"}`}>
                  {item.text}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </motion.section>
  )
}