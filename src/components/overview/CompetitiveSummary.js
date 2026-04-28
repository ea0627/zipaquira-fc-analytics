import SectionCard from "@/components/ui/SectionCard";
import Badge from "@/components/ui/Badge";
import club from "@/data/club";
import matches from "@/data/matches";

export default function CompetitiveSummary() {
  const totalMatches = matches.length;
  const finishedMatches = matches.filter(
    (match) => match.status === "Finalizado"
  ).length;
  const pendingMatches = totalMatches - finishedMatches;

  const progress = Math.round((finishedMatches / totalMatches) * 100);

  return (
    <SectionCard
      title="Resumen competitivo"
      description="Estado general del equipo dentro del calendario de temporada."
    >
      <div className="competitive-summary">
        <div>
          <p className="competitive-summary__label">Progreso de temporada</p>
          <strong className="competitive-summary__value">{progress}%</strong>
          <p className="competitive-summary__helper">
            {finishedMatches} de {totalMatches} jornadas disputadas
          </p>
        </div>

        <div className="competitive-summary__progress">
          <span style={{ width: `${progress}%` }} />
        </div>

        <div className="competitive-summary__grid">
          <Badge tone="success">{club.stats.wins} victorias</Badge>
          <Badge tone="warning">{club.stats.draws} empates</Badge>
          <Badge tone="danger">{club.stats.losses} derrotas</Badge>
          <Badge tone="info">{pendingMatches} pendientes</Badge>
        </div>
      </div>
    </SectionCard>
  );
}