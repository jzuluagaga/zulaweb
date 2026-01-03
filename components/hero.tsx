import { Button } from "@/components/ui/button"
import { ArrowRight, Check, Sparkles } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <div className="mb-12 animate-fadeIn">
            <Image
              src="/images/logo.png"
              alt="ZULA Logo"
              width={300}
              height={80}
              className="h-16 md:h-20 w-auto"
              priority
            />
          </div>

          <div className="mb-8 animate-fadeIn animate-delay-100 inline-flex items-center gap-2 rounded-full border-2 border-primary/30 bg-primary/5 px-6 py-3 text-base font-semibold text-primary shadow-lg shadow-primary/10 backdrop-blur-sm">
            <Sparkles className="h-5 w-5" />
            <span>Vista previa del diseño antes de iniciar</span>
          </div>

          {/* Heading */}
          <h1 className="mb-6 max-w-4xl text-balance text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl animate-fadeIn animate-delay-200">
            Diseñamos páginas web{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-300% animate-gradient">
              100% personalizadas
            </span>{" "}
            para tu negocio
          </h1>

          <p className="mb-10 max-w-2xl text-pretty text-lg text-muted-foreground md:text-xl leading-relaxed animate-fadeIn animate-delay-300">
            <strong className="text-foreground">
              Te presentamos una vista previa del diseño de tu página antes de iniciar. Si te gusta, avanzamos.
            </strong>{" "}
            Desde Landing Pages hasta e-commerce y agendamiento de citas.
          </p>

          {/* CTAs */}
          <div className="flex flex-col gap-4 sm:flex-row sm:gap-6 mb-12 animate-fadeIn animate-delay-400">
            <Button
              size="lg"
              className="text-base font-semibold shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all"
  asChild
>
  <Link href="https://wa.me/573053277555?text=Hola,%20quiero%20mi%20propuesta%20de%20diseño%20web">
    Quiero mi propuesta
    <ArrowRight className="ml-2 h-5 w-5" />
  </Link>
</Button>
            <Button
              size="lg"
              variant="outline"
              className="text-base font-semibold bg-background/50 backdrop-blur-sm hover:bg-background/80 transition-all border-2"
              asChild
            >
              <Link href="#planes">Ver planes</Link>
            </Button>
          </div>

          {/* Microbeneficios */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-muted-foreground animate-fadeIn animate-delay-500">
            <div className="flex items-center gap-2 group">
              <div className="rounded-full bg-primary/10 p-1 group-hover:bg-primary/20 transition-colors">
                <Check className="h-3 w-3 text-primary" />
              </div>
              <span>Hosting + dominio incluidos</span>
            </div>
            <div className="flex items-center gap-2 group">
              <div className="rounded-full bg-primary/10 p-1 group-hover:bg-primary/20 transition-colors">
                <Check className="h-3 w-3 text-primary" />
              </div>
              <span>Diseño a medida</span>
            </div>
            <div className="flex items-center gap-2 group">
              <div className="rounded-full bg-primary/10 p-1 group-hover:bg-primary/20 transition-colors">
                <Check className="h-3 w-3 text-primary" />
              </div>
              <span>Enfoque en conversión</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/4 top-20 h-72 w-72 rounded-full bg-primary/10 blur-3xl animate-pulse-slow" />
        <div className="absolute right-1/4 bottom-20 h-96 w-96 rounded-full bg-accent/10 blur-3xl animate-pulse-slow animate-delay-1000" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl" />
      </div>
    </section>
  )
}
