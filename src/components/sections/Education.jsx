import { motion } from "motion/react"
import SectionTitle from "../layout/SectionTitle"
import { education, certifications } from "../../data/portfolioData"
import {
  HiAcademicCap,
  HiCheckBadge,
  HiSparkles,
} from "react-icons/hi2"

export default function Education({ darkMode }) {
  return (
    <motion.section
      id="education"
      className="relative px-6 py-20 lg:px-8"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-[8%] top-10 h-64 w-64 rounded-full bg-sky-500/8 blur-3xl" />
        <div className="absolute right-[10%] bottom-10 h-72 w-72 rounded-full bg-cyan-400/8 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Education & Certifications"
          title="Academic journey and professional credentials"
          subtitle="A refined timeline of my educational background, honors, and relevant training."
          darkMode={darkMode}
        />

        <div className="grid gap-8 xl:grid-cols-[1.1fr_0.9fr]">
          <div
            className={`glass-shine rounded-[2rem] border p-8 shadow-[0_0_45px_rgba(56,189,248,0.08)] md:p-10 ${
              darkMode
                ? "border-sky-400/20 bg-slate-900/70"
                : "border-slate-200 bg-white"
            }`}
          >
            <div className="mb-8 flex items-center gap-4">
              <div className="rounded-2xl bg-sky-400/10 p-3 text-2xl text-sky-400">
                <HiAcademicCap />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-400">
                  Education Timeline
                </p>
                <h3 className="mt-1 text-2xl font-black">Learning Path</h3>
              </div>
            </div>

            <div className="relative">
              <div className="absolute left-[15px] top-0 h-full w-px bg-gradient-to-b from-sky-400/40 via-sky-400/20 to-transparent" />

              <div className="space-y-8">
                {education.map((item, index) => (
                  <motion.div
                    key={item.school + item.detail}
                    initial={{ opacity: 0, x: -18 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    viewport={{ once: true, amount: 0.2 }}
                    className="relative pl-12"
                  >
                    <div className="absolute left-0 top-1 flex h-8 w-8 items-center justify-center rounded-full border border-sky-400/30 bg-slate-950 text-sky-400 shadow-[0_0_18px_rgba(56,189,248,0.22)]">
                      <span className="h-2.5 w-2.5 rounded-full bg-sky-400" />
                    </div>

                    <div
                      className={`rounded-[1.5rem] border p-5 transition hover:-translate-y-1 ${
                        darkMode
                          ? "border-white/10 bg-slate-950/60"
                          : "border-slate-200 bg-slate-50"
                      }`}
                    >
                      <div className="flex flex-wrap items-start justify-between gap-3">
                        <div>
                          <h4 className="text-xl font-bold">{item.school}</h4>
                          <p
                            className={`mt-2 leading-7 ${
                              darkMode ? "text-slate-300" : "text-slate-600"
                            }`}
                          >
                            {item.detail}
                          </p>
                        </div>

                        {item.year && (
                          <span className="rounded-full bg-sky-400/10 px-3 py-1 text-sm font-semibold text-sky-400">
                            {item.year}
                          </span>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div
              className={`glass-shine rounded-[2rem] border p-8 shadow-[0_0_45px_rgba(56,189,248,0.08)] md:p-10 ${
                darkMode
                  ? "border-sky-400/20 bg-slate-900/70"
                  : "border-slate-200 bg-white"
              }`}
            >
              <div className="mb-8 flex items-center gap-4">
                <div className="rounded-2xl bg-sky-400/10 p-3 text-2xl text-sky-400">
                  <HiCheckBadge />
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-400">
                    Certifications
                  </p>
                  <h3 className="mt-1 text-2xl font-black">
                    Professional Development
                  </h3>
                </div>
              </div>

              <div className="space-y-4">
                {certifications.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: index * 0.05 }}
                    viewport={{ once: true, amount: 0.15 }}
                    whileHover={{ y: -4 }}
                    className={`rounded-[1.25rem] border p-5 ${
                      darkMode
                        ? "border-white/10 bg-slate-950/60"
                        : "border-slate-200 bg-slate-50"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 rounded-xl bg-sky-400/10 p-2 text-sky-400">
                        <HiSparkles />
                      </div>
                      <p
                        className={`leading-7 ${
                          darkMode ? "text-slate-300" : "text-slate-600"
                        }`}
                      >
                        {item}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              whileHover={{ y: -4 }}
              className={`glass-shine rounded-[2rem] border p-8 shadow-[0_0_45px_rgba(56,189,248,0.08)] ${
                darkMode
                  ? "border-sky-400/20 bg-slate-900/70"
                  : "border-slate-200 bg-white"
              }`}
            >
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-400">
                Highlights
              </p>
              <h3 className="mt-3 text-2xl font-black">
                Academic and growth milestones
              </h3>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div
                  className={`rounded-[1.25rem] border p-5 ${
                    darkMode
                      ? "border-white/10 bg-slate-950/60"
                      : "border-slate-200 bg-slate-50"
                  }`}
                >
                  <p className="text-3xl font-black text-sky-400">2022</p>
                  <p
                    className={`mt-2 text-sm leading-7 ${
                      darkMode ? "text-slate-300" : "text-slate-600"
                    }`}
                  >
                    Started BSIT at Central Luzon State University
                  </p>
                </div>

                <div
                  className={`rounded-[1.25rem] border p-5 ${
                    darkMode
                      ? "border-white/10 bg-slate-950/60"
                      : "border-slate-200 bg-slate-50"
                  }`}
                >
                  <p className="text-3xl font-black text-sky-400">Honors</p>
                  <p
                    className={`mt-2 text-sm leading-7 ${
                      darkMode ? "text-slate-300" : "text-slate-600"
                    }`}
                  >
                    Completed Junior and Senior High School with honors
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}