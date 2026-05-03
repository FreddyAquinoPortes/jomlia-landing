import type { Metadata } from "next";
import { Inter } from "next/font/google";
import SplashGate from "@/components/SplashGate";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], weight: ["400","500","600","700","900"] });

export const metadata: Metadata = {
  title: "Jomlia Solution Services | Aires Acondicionados Santo Domingo",
  description: "Líderes en venta, instalación y mantenimiento de aires acondicionados en Santo Domingo, RD. Electricidad, refrigeración, cuartos fríos y más.",
  keywords: "aires acondicionados, mantenimiento, instalación, Santo Domingo, República Dominicana, Jomlia",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <SplashGate>{children}</SplashGate>
      </body>
    </html>
  );
}
