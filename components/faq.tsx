import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "¿La página es 100% personalizada?",
    answer:
      'Sí. El diseño se adapta a tu marca, tu negocio y tu tipo de cliente. No usamos plantillas genéricas "copiar y pegar".',
  },
  {
    question: "¿Qué incluye el precio?",
    answer:
      "Incluye diseño personalizado, hosting, dominio, implementación y publicación. (En Agenda/Store/Custom el alcance se define contigo.)",
  },
  {
    question: '¿Qué es la "vista previa del diseño"?',
    answer:
      "Es una propuesta visual de cómo quedará tu página antes de iniciar el desarrollo. Te ayuda a ver el estilo y la estructura sin compromiso.",
  },
  {
    question: "¿Cuánto se demora la entrega?",
    answer:
      "Zula Start: 10 días hábiles. Zula Pro: 10 días hábiles. Agenda / Store / Custom: depende del alcance acordado.",
  },
  {
    question: "¿Qué necesitas de mi parte para empezar?",
    answer:
      "Nombre del negocio, servicios/productos, datos de contacto, logo (si tienes), redes sociales y referencias de estilo (si te gustan).",
  },
  {
    question: "¿Puedo pedir cambios?",
    answer: "Sí. Revisamos contigo durante el proceso para que quede como lo necesitas.",
  },
  {
    question: "¿La página queda bien en celular?",
    answer: "Sí, todas las páginas son responsive (celular, tablet y computador).",
  },
  {
    question: "¿La web aparece en Google?",
    answer:
      "Trabajamos SEO básico (estructura y configuración). El posicionamiento depende del tiempo, competencia y contenido; si quieres, se puede escalar a SEO avanzado.",
  },
  {
    question: "¿Manejas pagos o tienda online?",
    answer:
      "Sí, con Zula Store configuramos catálogo, carrito y pagos (según plataforma) o pedidos por WhatsApp si prefieres algo más simple.",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight md:text-5xl">Preguntas frecuentes</h2>
        </div>

        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-base font-semibold">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
