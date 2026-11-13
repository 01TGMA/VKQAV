import { Link } from 'react-router-dom'
import { SITE } from '../data/site'

export default function CtaBanner() {
  return (
    <section className="bg-accent">
      <div className="container-x flex flex-col items-start justify-between gap-6 py-10 md:flex-row md:items-center">
        <h2 className="max-w-xl text-2xl font-extrabold leading-tight text-brand-900 sm:text-3xl">
          Not sure which service you need? Talk to our team.
        </h2>
        <div className="flex flex-wrap gap-3">
          <Link to="/quote" className="btn-dark">
            Get a Free Quote
          </Link>
          <a
            href={SITE.phoneHref}
            className="btn border border-brand text-brand hover:bg-brand hover:text-white"
          >
            Call {SITE.phone}
          </a>
        </div>
      </div>
    </section>
  )
}
