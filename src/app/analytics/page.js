import PageHeader from "@/components/ui/PageHeader";
import SectionCard from "@/components/ui/SectionCard";
import PerformanceChart from "@/components/analytics/PerformanceChart";

export default function AnalyticsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Analytics"
        title="Métricas e insights"
        description="Visualización del rendimiento del equipo a lo largo de la temporada."
      />

      <SectionCard
        title="Rendimiento por jornada"
        description="Comparación entre goles a favor y en contra."
      >
        <PerformanceChart />
      </SectionCard>
    </>
  );
}