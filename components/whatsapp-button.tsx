"use client"

import { MessageCircle } from "lucide-react"
import Link from "next/link"

export function WhatsAppButton() {
  return (
    <Link
      href="https://wa.me/573053277555?text=Hola%2C%20quiero%20información%20sobre%20ZULA"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all hover:scale-110 hover:shadow-xl active:scale-95 md:h-16 md:w-16"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="h-7 w-7 md:h-8 md:w-8" />
      <span className="absolute -top-1 -right-1 flex h-5 w-5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-75"></span>
        <span className="relative inline-flex h-5 w-5 rounded-full bg-[#25D366]"></span>
      </span>
    </Link>
  )
}
