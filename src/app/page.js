import Badge from "@/components/ui/Badge";
import PageHeader from "@/components/ui/PageHeader";
import SectionCard from "@/components/ui/SectionCard";
import StatCard from "@/components/ui/StatCard";
import Card from "@/components/ui/Card";

export default function Home() {
  return (
    <>
      <PageHeader
        eyebrown="Overview"
        title="Zipaquira FC"
        description="Dashboard deportivo para visualizar el rendimiento del club, sus partidos, jugadores y métricas principales."
      />

      <div className="stats-grid">
        <StatCard label="Posición" value="#5" helper="Serie IV.18" />
        <StatCard label="Victorias" value="4" helper="Rendimiento positivo" tone="success" />
        <StatCard label="Derrotas" value="1" helper="Últimas jornadas" tone="danger" />
        <StatCard label="Diferencia gol" value="+7" helper="Balance competitivo" tone="warning" />
      </div>

      <SectionCard
        title="Estado del proyecto"
        description="Primeros componentes UI reutilizables implementados."
      >
        <div className="badges-row">
          <Badge tone="success">Next.js</Badge>
          <Badge>Dashboard</Badge>
          <Badge tone="warning">En desarrollo</Badge>
        </div>
      </SectionCard>
    </>
  );
}