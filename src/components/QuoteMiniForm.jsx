import { useState } from 'react'
import { CheckCircle2, ChevronDown, MessageCircle } from 'lucide-react'
import { SITE } from '../data/site'

const inputClass =
  'w-full rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-700 placeholder:text-slate-400 focus:border-brand-700 focus:outline-none focus:ring-2 focus:ring-brand-700/20'

export default function QuoteMiniForm({ serviceName }) {
  const [values, setValues] = useState({ name: '', phone: '', service: serviceName })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const update = (field) => (e) => {
    setValues((v) => ({ ...v, [field]: e.target.value }))
    setErrors((er) => ({ ...er, [field]: undefined }))
  }

  const validate = () => {
    const er = {}
    if (!values.name.trim()) er.name = 'Please enter your name'
    if (!/^[+\d][\d\s-]{6,}$/.test(values.phone.trim())) er.phone = 'Enter a valid phone number'
    return er
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const er = validate()
    setErrors(er)
    if (Object.keys(er).length) return
    // Frontend only: no backend. Hook up an API here later.
    setSubmitted(true)
  }

  const reset = () => {
    setValues({ name: '', phone: '', service: serviceName })
    setSubmitted(false)
  }

  return (
    <div className="rounded-2xl border border-brand-700/10 bg-[#EAF2EF] p-5 shadow-sm">
      {submitted ? (
        <div className="py-6 text-center" role="status">
          <CheckCircle2 className="mx-auto h-10 w-10 text-brand-700" />
          <h3 className="mt-3 text-lg font-bold">Thank you, {values.name.split(' ')[0]}!</h3>
          <p className="mt-1 text-sm text-slate-600">
            We received your request for {values.service} and will call you shortly.
          </p>
          <button type="button" onClick={reset} className="mt-4 text-sm font-semibold text-brand-700 underline">
            Send another request
          </button>
        </div>
      ) : (
        <>
          <h3 className="text-base font-bold">Request this service</h3>
          <p className="mt-1 text-xs text-slate-500">
            Tell us what you need and we will respond quickly. {SITE.hours}.
          </p>

          <form onSubmit={onSubmit} noValidate className="mt-4 space-y-3">
            <div>
              <label htmlFor="qm-name" className="sr-only">Full name</label>
              <input
                id="qm-name"
                type="text"
                autoComplete="name"
                placeholder="Full name"
                value={values.name}
                onChange={update('name')}
                aria-invalid={!!errors.name}
                className={inputClass}
              />
              {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
            </div>
            <div>
              <label htmlFor="qm-phone" className="sr-only">Phone number</label>
              <input
                id="qm-phone"
                type="tel"
                autoComplete="tel"
                placeholder="Phone number"
                value={values.phone}
                onChange={update('phone')}
                aria-invalid={!!errors.phone}
                className={inputClass}
              />
              {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone}</p>}
            </div>
            <div className="relative">
              <label htmlFor="qm-service" className="sr-only">Service</label>
              <select
                id="qm-service"
                value={values.service}
                onChange={update('service')}
                className={`${inputClass} appearance-none pr-9`}
              >
                <option>{serviceName}</option>
              </select>
              <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            </div>

            <button type="submit" className="btn-dark w-full">
              Get a  quote
            </button>
            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn w-full border border-[#25D366]/50 bg-white text-[#128C4A] hover:bg-[#25D366]/10"
            >
              <MessageCircle className="h-4 w-4" />
              Chat on WhatsApp
            </a>
          </form>
        </>
      )}
    </div>
  )
}
