import PageHeader from "@/components/ui/PageHeader";
import SectionCard from "@/components/ui/SectionCard";
import PerformanceChart from "@/components/analytics/PerformanceChart";
import FormChart from "@/components/analytics/FormChart";
import AnalyticsSummary from "@/components/analytics/AnalyticsSummary";

export default function AnalyticsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Analytics"
        title="Métricas e insights"
        description="Visualización del rendimiento del equipo a lo largo de la temporada, con métricas calculadas desde los partidos disputados."
      />

      <AnalyticsSummary />

      <div className="analytics-grid">
        <SectionCard
          title="Rendimiento por jornada"
          description="Comparación entre goles a favor y goles en contra."
        >
          <PerformanceChart />
        </SectionCard>

        <SectionCard
          title="Forma reciente"
          description="Puntos obtenidos por jornada: victoria = 3, empate = 1, derrota = 0."
        >
          <FormChart />
        </SectionCard>
      </div>
    </>
  );
}