import { motion } from "motion/react"
import SectionTitle from "../layout/SectionTitle"
import SkillCard from "../ui/SkillCard"
import { technicalSkills, otherSkills } from "../../data/portfolioData"

export default function Skills({ darkMode }) {
  return (
    <motion.section
      id="skills"
      className="px-6 py-20 lg:px-8"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Skills"
          title="Technical and professional strengths"
          subtitle="A balanced mix of development skills and workplace readiness."
          darkMode={darkMode}
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {[["Technical Skills", technicalSkills], ["Other Skills", otherSkills]].map(
            ([title, items], index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <SkillCard title={title} items={items} darkMode={darkMode} />
              </motion.div>
            )
          )}
        </div>
      </div>
    </motion.section>
  )
}