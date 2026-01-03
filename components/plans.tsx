import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import Link from "next/link"

const plans = [
  {
    name: "Zula Start",
    subtitle: "Landing Page",
    price: "$400.000 COP",
    time: "10 días hábiles",
    features: [
      "1 landing con secciones clave (servicios, beneficios, testimonios, contacto)",
      "Botón de WhatsApp + formulario",
      "Adaptable a celular y computador",
      "Conexión a redes + Google Maps",
      "SEO básico (estructura para Google)",
    ],
    cta: "Quiero Zula Start",
    highlighted: false,
  },
  {
    name: "Zula Pro",
    subtitle: "Web de Negocio",
    price: "$490.000 COP",
    time: "10 días hábiles",
    features: [
      "Sitio con 5–7 secciones/páginas (según necesidad)",
      "Servicios + portafolio + testimonios + FAQ",
      "WhatsApp + formulario + redes + mapa",
      "SEO básico",
    ],
    cta: "Quiero Zula Pro",
    highlighted: true,
  },
  {
    name: "Zula Agenda",
    subtitle: "Agendamiento de citas",
    price: "A cotizar",
    time: "Según desarrollo acordado",
    features: [
      "Página o sitio + módulo de reservas",
      "Servicios, horarios, datos del cliente",
      "Confirmaciones (según herramienta acordada)",
      "Ajustes según tu proceso de atención",
    ],
    cta: "Cotizar Zula Agenda",
    highlighted: false,
  },
  {
    name: "Zula Store",
    subtitle: "E-commerce a medida",
    price: "A cotizar",
    time: "Según desarrollo acordado",
    features: [
      "Catálogo + carrito + gestión de productos/pedidos",
      "Pagos o pedidos por WhatsApp",
      "Secciones de envíos/cambios/FAQ",
    ],
    cta: "Cotizar Zula Store",
    highlighted: false,
  },
]

export function Plans() {
  return (
    <section id="planes" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight md:text-5xl">
            Elige el plan que mejor se adapte a tu negocio
          </h2>
          <p className="mx-auto max-w-2xl text-pretty text-lg text-muted-foreground leading-relaxed">
            Todos incluyen:{" "}
            <strong className="text-foreground">
              diseño 100% personalizado + hosting + dominio + vista previa del diseño antes de iniciar
            </strong>
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`flex flex-col transition-all hover:shadow-xl hover:-translate-y-1 ${
                plan.highlighted
                  ? "border-primary shadow-lg ring-2 ring-primary/20 scale-105 lg:scale-110"
                  : "hover:border-primary/50"
              }`}
            >
              <CardHeader>
                {plan.highlighted && (
                  <div className="mb-2 inline-flex self-start rounded-full bg-gradient-to-r from-primary to-accent px-3 py-1 text-xs font-semibold text-primary-foreground shadow-md">
                    Más popular
                  </div>
                )}
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription className="text-base">{plan.subtitle}</CardDescription>
                <div className="mt-4">
                  <span className="text-3xl font-bold bg-gradient-to-br from-foreground to-muted-foreground bg-clip-text text-transparent">
                    {plan.price}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">Tiempo: {plan.time}</p>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex gap-3">
                      <div className="rounded-full bg-primary/10 p-0.5 mt-0.5">
                        <Check className="h-4 w-4 shrink-0 text-primary" />
                      </div>
                      <span className="text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  className={`w-full font-semibold ${plan.highlighted ? "shadow-lg shadow-primary/30" : ""}`}
                  variant={plan.highlighted ? "default" : "outline"}
                  asChild
                >
                  <Link
                    href={`https://wa.me/573053277555?text=${encodeURIComponent(`Hola, quiero información sobre ${plan.name}`)}`}
                  >
                    {plan.cta}
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
