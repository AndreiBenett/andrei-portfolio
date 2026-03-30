import { motion } from "motion/react"
import {
  HiEnvelope,
  HiMapPin,
  HiPhone,
  HiArrowUpRight,
} from "react-icons/hi2"
import { FaGithub, FaLinkedin } from "react-icons/fa6"
import SectionTitle from "../layout/SectionTitle"

export default function Contact({ darkMode }) {
  return (
    <motion.section
      id="contact"
      className="relative overflow-hidden px-6 py-20 lg:px-8"
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
          eyebrow="Contact"
          title="Let’s build something meaningful together"
          subtitle="If you’re looking for a motivated BSIT student who can contribute to real projects, I’d be glad to connect."
          darkMode={darkMode}
        />

        <div className="grid gap-8 xl:grid-cols-[0.95fr_1.05fr]">
          <motion.div
            whileHover={{ y: -5 }}
            className={`glass-shine rounded-[2rem] border p-8 shadow-[0_0_50px_rgba(56,189,248,0.1)] md:p-10 ${
              darkMode
                ? "border-sky-400/20 bg-slate-900/70"
                : "border-slate-200 bg-white"
            }`}
          >
            <div className="mb-8">
              <span className="rounded-full bg-sky-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-sky-400">
                Open for OJT / Internship
              </span>
              <h3 className="mt-5 text-3xl font-black leading-tight">
                Start a conversation
              </h3>
              <p
                className={`mt-4 max-w-md leading-8 ${
                  darkMode ? "text-slate-300" : "text-slate-600"
                }`}
              >
                I’m open to internship opportunities, project collaboration, and
                meaningful connections in web, mobile, and systems-related work.
              </p>
            </div>

            <div className="space-y-5">
              <ContactInfoCard
                icon={<HiPhone />}
                label="Phone"
                value="0907 355 9585"
                href="tel:09073559585"
                darkMode={darkMode}
              />

              <ContactInfoCard
                icon={<HiEnvelope />}
                label="Primary Email"
                value="andreivenett@gmail.com"
                href="mailto:andreivenett@gmail.com"
                darkMode={darkMode}
              />

              <ContactInfoCard
                icon={<HiEnvelope />}
                label="School Email"
                value="delacruz.andreibenett@clsu2.edu.ph"
                href="mailto:delacruz.andreibenett@clsu2.edu.ph"
                darkMode={darkMode}
              />

              <div
                className={`rounded-[1.5rem] border p-5 ${
                  darkMode
                    ? "border-white/10 bg-slate-950/60"
                    : "border-slate-200 bg-slate-50"
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className="rounded-2xl bg-sky-400/10 p-3 text-sky-400">
                    <HiMapPin className="text-xl" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-400">
                      Address
                    </p>
                    <p
                      className={`mt-2 leading-7 ${
                        darkMode ? "text-slate-300" : "text-slate-600"
                      }`}
                    >
                      Zircon Street, Lexber Homes Sto.Tomas, San Jose City,
                      Nueva Ecija
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-sky-400">
                Professional Links
              </p>

              <div className="flex flex-wrap gap-3">
                <SocialButton
                  href="https://github.com/"
                  label="GitHub"
                  icon={<FaGithub />}
                  darkMode={darkMode}
                />
                <SocialButton
                  href="https://linkedin.com/"
                  label="LinkedIn"
                  icon={<FaLinkedin />}
                  darkMode={darkMode}
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className={`glass-shine rounded-[2rem] border p-8 shadow-[0_0_50px_rgba(56,189,248,0.1)] md:p-10 ${
              darkMode
                ? "border-sky-400/20 bg-slate-900/70"
                : "border-slate-200 bg-white"
            }`}
          >
            <div className="mb-8 flex flex-wrap items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-400">
                  Send a Message
                </p>
                <h3 className="mt-3 text-3xl font-black leading-tight">
                  Let’s talk about opportunities
                </h3>
              </div>

              <div
                className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] ${
                  darkMode
                    ? "border-sky-400/20 bg-sky-400/10 text-sky-300"
                    : "border-sky-200 bg-sky-50 text-sky-700"
                }`}
              >
                Usually replies within 24–48 hours
              </div>
            </div>

            <form className="space-y-5">
              <div className="grid gap-5 md:grid-cols-2">
                <FloatingInput
                  label="Your Name"
                  type="text"
                  name="name"
                  darkMode={darkMode}
                />
                <FloatingInput
                  label="Your Email"
                  type="email"
                  name="email"
                  darkMode={darkMode}
                />
              </div>

              <FloatingInput
                label="Subject"
                type="text"
                name="subject"
                darkMode={darkMode}
              />

              <FloatingTextarea
                label="Your Message"
                name="message"
                darkMode={darkMode}
              />

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <motion.button
                  whileHover={{ y: -2, scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  type="button"
                  className="inline-flex items-center gap-2 rounded-full bg-sky-400 px-7 py-3.5 font-semibold text-slate-950 shadow-[0_0_24px_rgba(56,189,248,0.2)] transition hover:bg-sky-300"
                >
                  Send Message
                  <HiArrowUpRight />
                </motion.button>

                <p
                  className={`text-sm ${
                    darkMode ? "text-slate-400" : "text-slate-500"
                  }`}
                >
                  Open to internship, OJT, and collaboration inquiries.
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

function ContactInfoCard({ icon, label, value, href, darkMode }) {
  return (
    <motion.a
      whileHover={{ y: -3 }}
      href={href}
      className={`block rounded-[1.5rem] border p-5 transition ${
        darkMode
          ? "border-white/10 bg-slate-950/60 hover:bg-slate-950/80"
          : "border-slate-200 bg-slate-50 hover:bg-white"
      }`}
    >
      <div className="flex items-start gap-4">
        <div className="rounded-2xl bg-sky-400/10 p-3 text-sky-400">
          <span className="text-xl">{icon}</span>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-400">
            {label}
          </p>
          <p
            className={`mt-2 font-medium leading-7 ${
              darkMode ? "text-slate-200" : "text-slate-700"
            }`}
          >
            {value}
          </p>
        </div>
      </div>
    </motion.a>
  )
}

function SocialButton({ href, label, icon, darkMode }) {
  return (
    <motion.a
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex items-center gap-2 rounded-full border px-5 py-3 font-semibold transition ${
        darkMode
          ? "border-white/15 bg-white/5 text-white hover:bg-white/10"
          : "border-slate-300 bg-white text-slate-900 hover:bg-slate-50"
      }`}
    >
      {icon}
      {label}
    </motion.a>
  )
}

function FloatingInput({ label, type, name, darkMode }) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-sky-400">
        {label}
      </span>
      <input
        type={type}
        name={name}
        placeholder={label}
        className={`w-full rounded-[1.25rem] border px-4 py-3.5 outline-none transition focus:border-sky-400 ${
          darkMode
            ? "border-white/10 bg-slate-950/60 text-white placeholder:text-slate-500"
            : "border-slate-300 bg-white text-slate-900 placeholder:text-slate-400"
        }`}
      />
    </label>
  )
}

function FloatingTextarea({ label, name, darkMode }) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-sky-400">
        {label}
      </span>
      <textarea
        name={name}
        rows="6"
        placeholder={label}
        className={`w-full rounded-[1.25rem] border px-4 py-3.5 outline-none transition focus:border-sky-400 ${
          darkMode
            ? "border-white/10 bg-slate-950/60 text-white placeholder:text-slate-500"
            : "border-slate-300 bg-white text-slate-900 placeholder:text-slate-400"
        }`}
      />
    </label>
  )
}