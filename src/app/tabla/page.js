import PageHeader from "@/components/ui/PageHeader";
import StandingsTable from "@/components/standings/StandingsTable";
import StandingsSummary from "@/components/standings/StandingsSummary";

export default function TablaPage() {
  return (
    <>
      <PageHeader
        eyebrow="Tabla"
        title="Tabla de posiciones"
        description="Consulta el contexto competitivo del equipo dentro de su serie actual."
      />

      <StandingsSummary />
      <StandingsTable />
    </>
  );
}