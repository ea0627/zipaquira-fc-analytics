import PageHeader from "@/components/ui/PageHeader";
import SectionCard from "@/components/ui/SectionCard";
import PlayersGrid from "@/components/players/PlayersGrid";

export default function JugadoresPage() {
  return (
    <>
      <PageHeader
        eyebrow="Jugadores"
        title="Plantilla y rendimiento"
        description="Consulta los jugadores del club, su posición, estado de forma y métricas principales."
      />

      <SectionCard
        title="Plantilla"
        description="Vista general de jugadores con estadísticas individuales."
      >
        <PlayersGrid />
      </SectionCard>
    </>
  );
}