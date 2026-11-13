import { MessageCircle } from 'lucide-react'
import { SITE } from '../data/site'

export default function WhatsAppButton() {
  return (
    <a
      href={SITE.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with VKQAV on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg ring-4 ring-white/70 transition hover:scale-105 hover:shadow-xl"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  )
}
