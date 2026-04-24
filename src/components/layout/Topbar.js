"use client";

import { usePathname } from "next/navigation";

const pageInfo = {
  "/": {
    eyebrow: "Overview",
    title: "Dashboard deportivo",
  },
  "/partidos": {
    eyebrow: "Partidos",
    title: "Historial competitivo",
  },
  "/tabla": {
    eyebrow: "Tabla",
    title: "Posición en la liga",
  },
  "/jugadores": {
    eyebrow: "Jugadores",
    title: "Plantilla y rendimiento",
  },
  "/analytics": {
    eyebrow: "Analytics",
    title: "Métricas e insights",
  },
};

export default function Topbar() {
  const pathname = usePathname();
  const currentPage = pageInfo[pathname] || pageInfo["/"];

  return (
    <header className="topbar">
      <div>
        <p className="topbar__eyebrow">{currentPage.eyebrow}</p>
        <h1 className="topbar__title">{currentPage.title}</h1>
      </div>

      <div className="topbar__badges">
        <span>IV.18</span>
        <span>Cundinamarca</span>
      </div>
    </header>
  );
}