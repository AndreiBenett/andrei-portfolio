import { motion } from "motion/react"

export default function SkillCard({ title, items, darkMode }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className={`glass-shine rounded-[2rem] border p-8 shadow-[0_0_40px_rgba(56,189,248,0.08)] ${
        darkMode
          ? "border-sky-400/20 bg-slate-900/70"
          : "border-slate-200 bg-white"
      }`}
    >
      <h3 className="text-2xl font-bold">{title}</h3>

      <div className="mt-6 flex flex-wrap gap-3">
        {items.map((skill, idx) => (
          <motion.span
            key={skill}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.25, delay: idx * 0.03 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.06 }}
            className={`rounded-full border px-4 py-2 text-sm ${
              darkMode
                ? "border-sky-400/20 bg-sky-400/10 text-sky-200"
                : "border-sky-200 bg-sky-50 text-sky-700"
            }`}
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  )
}