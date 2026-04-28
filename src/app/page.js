import Badge from "@/components/ui/Badge";
import PageHeader from "@/components/ui/PageHeader";
import SectionCard from "@/components/ui/SectionCard";
import StatCard from "@/components/ui/StatCard";
import Card from "@/components/ui/Card";
import club from "@/data/club";

export default function Home() {
  return (
    <>
      <PageHeader
        eyebrown="Overview"
        title={club.productName}
        description={`Dashboard deportivo para visualizar el rendimiento de ${club.name}, sus partidos, jugadores y métricas principales.`}
      />

      <div className="stats-grid">
        <StatCard 
          label="Posición" 
          value={`#${club.stats.position}`} 
          helper={club.league} 
        />
        <StatCard 
          label="Victorias"
          value={club.stats.wins}
          helper="Rendimiento positivo" 
          tone="success" 
        />
        <StatCard 
          label="Derrotas"
          value={club.stats.losses}
          helper="Últimas jornadas"
          tone="danger" 
        />
        <StatCard 
          label="Diferencia gol"
          value={`+${club.stats.goalDifference}`}
          helper={`${club.stats.goalsFor} GF / ${club.stats.goalsAgainst} GC`}
          tone="warning"
        />
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