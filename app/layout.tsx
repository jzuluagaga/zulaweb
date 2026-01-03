import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ZULA Web - Diseño de Páginas Web Profesionales en Colombia | Landing Pages, E-commerce y Más",
  description:
    "Diseñamos páginas web 100% personalizadas para tu negocio en Colombia. Landing pages, e-commerce, sistemas de agendamiento y webs corporativas. Te mostramos una vista previa antes de iniciar. Desde $350.000 COP.",
  keywords: [
    "diseño web colombia",
    "páginas web personalizadas",
    "landing page colombia",
    "e-commerce colombia",
    "diseño web profesional",
    "agendamiento de citas online",
    "desarrollo web",
    "sitios web para negocios",
    "diseño web económico",
    "ZULA web",
  ],
  authors: [{ name: "ZULA Web" }],
  creator: "ZULA Web",
  publisher: "ZULA Web",
  metadataBase: new URL("https://zulaweb.co"),
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: "https://zulaweb.co",
    title: "ZULA Web - Diseño de Páginas Web Profesionales en Colombia",
    description:
      "Te presentamos una vista previa del diseño de tu página antes de iniciar. Si te gusta, avanzamos. Landing pages, e-commerce y más desde $350.000 COP",
    siteName: "ZULA Web",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "ZULA Web - Diseño de Páginas Web",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ZULA Web - Diseño de Páginas Web Profesionales",
    description: "Te mostramos una vista previa antes de iniciar. Landing pages, e-commerce y más desde $350.000 COP",
    images: ["/images/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "tu-codigo-de-verificacion-aqui",
  },
  generator: "v0.app",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.jpg",
  },
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#06b6d4",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${inter.className} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
