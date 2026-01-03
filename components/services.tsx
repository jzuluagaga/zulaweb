import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { LayoutTemplate, Globe, Calendar, ShoppingCart } from "lucide-react"

const services = [
  {
    icon: LayoutTemplate,
    title: "Landing Page",
    subtitle: "Zula Start",
    description: "Ideal para captar clientes por WhatsApp y formularios.",
  },
  {
    icon: Globe,
    title: "Web de negocio",
    subtitle: "Zula Pro",
    description: "Más secciones, más confianza, más presencia profesional.",
  },
  {
    icon: Calendar,
    title: "Agendamiento de citas",
    subtitle: "Zula Agenda",
    description: "Reservas automáticas para negocios por citas.",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce a medida",
    subtitle: "Zula Store",
    description: "Vende online con una tienda hecha para ti.",
  },
]

export function Services() {
  return (
    <section id="servicios" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight md:text-5xl">
            Lo que podemos construir para tu negocio
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 3).map((service, index) => {
            const Icon = service.icon
            return (
              <Card key={index} className="group transition-all hover:shadow-lg hover:-translate-y-1">
                <CardHeader>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-primary font-semibold">{service.subtitle}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="mt-6 flex justify-center">
          <Card className="group transition-all hover:shadow-lg hover:-translate-y-1 w-full md:w-1/2 lg:w-1/3">
            <CardHeader>
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <ShoppingCart className="h-6 w-6" />
              </div>
              <CardTitle className="text-xl">{services[3].title}</CardTitle>
              <CardDescription className="text-primary font-semibold">{services[3].subtitle}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">{services[3].description}</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
