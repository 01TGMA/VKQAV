import { HOW_IT_WORKS } from '../data/site'

export default function HowItWorks() {
  return (
    <section className="bg-mint py-16">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
          <h2 className="text-3xl font-extrabold">How it works</h2>
          <p className="text-sm text-slate-500">Simple from the first call to the finished job.</p>
        </div>

        <ol className="relative mt-10 grid gap-8 md:grid-cols-3 md:gap-10">
          {/* dashed connector line (desktop) */}
          <span
            aria-hidden
            className="absolute left-4 right-0 top-4 hidden border-t border-dashed border-brand-700/30 md:block"
          />
          {HOW_IT_WORKS.map((step, i) => (
            <li key={step.title} className="relative">
              <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-brand-700 text-sm font-bold text-white ring-8 ring-mint">
                {i + 1}
              </span>
              <h3 className="mt-5 text-base font-bold">{step.title}</h3>
              <p className="mt-1.5 max-w-xs text-sm leading-relaxed text-slate-500">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
