import { TRUST } from '../data/pages'

/** 2x2 grid of trust signals, for use on a dark background. */
export default function TrustGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {TRUST.map(({ icon: Icon, title, text }) => (
        <div key={title} className="rounded-2xl border border-white/15 bg-white/5 p-6">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-brand-900">
            <Icon className="h-5 w-5" />
          </span>
          <h3 className="mt-4 text-lg font-bold text-white">{title}</h3>
          <p className="mt-1.5 text-sm leading-relaxed text-white/70">{text}</p>
        </div>
      ))}
    </div>
  )
}
