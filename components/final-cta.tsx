import { Button } from "@/components/ui/button"
import { Phone, ArrowRight } from "lucide-react"
import Link from "next/link"

export function FinalCTA() {
  return (
    <section className="py-20 md:py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <h2 className="mb-6 max-w-3xl text-balance text-3xl font-bold tracking-tight md:text-5xl">
            ¿Listo para potenciar tu negocio este año?
          </h2>
          <p className="mb-10 max-w-2xl text-pretty text-lg md:text-xl text-primary-foreground/90 leading-relaxed">
            Escríbenos y te enviamos la vista previa del diseño.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:gap-6 mb-8">
            <Button size="lg" variant="secondary" className="text-base font-semibold" asChild>
              <Link href="https://wa.me/573053277555?text=Hola%2C%20quiero%20pedir%20una%20propuesta%20de%20dise%C3%B1o">
                Pedir propuesta ahora
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>

          <div className="flex items-center gap-2 text-primary-foreground/80">
            <Phone className="h-5 w-5" />
            <Link href="tel:+573053277555" className="text-lg font-semibold hover:underline">
              +57 305 327 7555
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
