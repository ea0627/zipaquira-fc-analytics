import MainLayout from "@/components/layout/MainLayout";
import "./globals.css";

export const metadata = {
  title: "Zipaquirá FC Analytics",
  description: "Dashboard deportivo premium para análisis de rendimiento de Zipaquirá Futbol Club.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}