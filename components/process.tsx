import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageSquare, Eye, Wrench, Rocket } from "lucide-react"

const steps = [
  {
    icon: MessageSquare,
    number: "01",
    title: "Diagnóstico rápido",
    subtitle: "10–15 min",
    description: "Entendemos tu negocio, tu cliente ideal y el objetivo de la web (mensajes, reservas o ventas).",
  },
  {
    icon: Eye,
    number: "02",
    title: "Vista previa del diseño",
    subtitle: "Antes de iniciar",
    description: "Te mostramos cómo se vería tu página antes de iniciar. Si te gusta, avanzamos.",
  },
  {
    icon: Wrench,
    number: "03",
    title: "Desarrollo y ajustes",
    subtitle: "Proceso colaborativo",
    description: "Construimos tu web a medida y hacemos ajustes con base en tu feedback.",
  },
  {
    icon: Rocket,
    number: "04",
    title: "Publicación y soporte",
    subtitle: "Lista para recibir clientes",
    description: "La dejamos online y lista. Te damos guía rápida para usarla y soporte según el plan.",
  },
]

export function Process() {
  return (
    <section id="proceso" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight md:text-5xl">
            Un proceso claro, sin enredos
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <Card key={index} className="relative border-none shadow-none bg-transparent">
                <CardHeader>
                  <div className="mb-4">
                    <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                      <Icon className="h-7 w-7" />
                    </div>
                  </div>
                  <div className="mb-2 text-5xl font-bold text-primary/20">{step.number}</div>
                  <CardTitle className="text-xl mb-1">{step.title}</CardTitle>
                  <p className="text-sm font-semibold text-primary">{step.subtitle}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
