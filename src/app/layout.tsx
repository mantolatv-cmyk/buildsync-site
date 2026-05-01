import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "BuildSync | Gestão de Obras de Alto Padrão e KPIs Financeiros",
  description: "A plataforma definitiva para construtores e investidores imobiliários. Controle financeiro rigoroso, visão executiva e gestão de obras com foco em ROI e rentabilidade.",
  keywords: ["gestão de obras", "construção civil", "KPIs de construção", "dashboard financeiro obras", "investimento imobiliário", "controle de custos obras", "rentabilidade construção", "software gestão obras"],
  authors: [{ name: "BuildSync Team" }],
  openGraph: {
    title: "BuildSync | Inteligência em Gestão de Obras",
    description: "Transforme seus dados de construção em decisões lucrativas com o dashboard executivo do BuildSync.",
    url: "https://buildsync.com.br",
    siteName: "BuildSync",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${playfair.variable} ${inter.className}`}>
        {children}
      </body>
    </html>
  );
}
