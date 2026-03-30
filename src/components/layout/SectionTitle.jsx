export default function SectionTitle({ eyebrow, title, subtitle, darkMode }) {
  return (
    <div className="mb-12">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-400">
        {eyebrow}
      </p>
      <h2 className="mt-4 max-w-4xl text-3xl font-black leading-tight md:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 max-w-2xl text-base leading-7 ${
            darkMode ? "text-slate-300" : "text-slate-600"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}