import MatchesTable from "@/components/matches/MatchesTable";
import PageHeader from "@/components/ui/PageHeader";

export default function PartidosPage() {
  return (
    <>
      <PageHeader
        eyebrow="Partidos"
        title="Fixture y resultados"
        description="Consulta el calendario completo de la temporada, resultados disputados y próximos compromisos del club."
      />

      <MatchesTable />
    </>
  );
}