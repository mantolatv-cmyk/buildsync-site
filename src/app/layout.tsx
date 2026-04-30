import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "BuildSync | O Controle Executivo da Sua Obra",
  description: "Transforme a gestão do seu projeto de construção com o dashboard definitivo. Do capital total investido ao ROI projetado, o BuildSync traz previsibilidade de alto padrão.",
  keywords: ["gestão de obras", "dashboard construção", "KPIs construção", "investimento imobiliário", "ROI construção"],
  authors: [{ name: "BuildSync Team" }],
  openGraph: {
    title: "BuildSync | O Controle Executivo da Sua Obra",
    description: "Transforme a gestão do seu projeto de construção com o dashboard definitivo.",
    type: "website",
    locale: "pt_BR",
    url: "https://buildsync.com.br",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
