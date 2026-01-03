import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Plans } from "@/components/plans"
import { Process } from "@/components/process"
import { FAQ } from "@/components/faq"
import { FinalCTA } from "@/components/final-cta"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function Page() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      <Plans />
      <Process />
      <FAQ />
      <FinalCTA />
      <WhatsAppButton />
    </main>
  )
}
