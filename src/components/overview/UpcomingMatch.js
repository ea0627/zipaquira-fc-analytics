import SectionCard from "@/components/ui/SectionCard";
import Badge from "@/components/ui/Badge";
import matches from "@/data/matches";

export default function UpcomingMatch() {
  const nextMatch = matches
    .filter((match) => match.status === "Programado")
    .sort((a, b) => a.round - b.round)[0];

  if (!nextMatch) {
    return null;
  }

  return (
    <SectionCard
      title="Próximo partido"
      description="Siguiente encuentro programado en la competición."
    >
      <div className="upcoming-match">
        <div>
          <p className="upcoming-match__round">
            Jornada {nextMatch.round}
          </p>

          <h3 className="upcoming-match__opponent">
            vs {nextMatch.opponent}
          </h3>

          <p className="upcoming-match__meta">
            {nextMatch.homeAway} · {nextMatch.competition}
          </p>
        </div>

        <div className="upcoming-match__details">
          <Badge tone="info">Programado</Badge>

          <span className="upcoming-match__date">
            {nextMatch.date}
          </span>
        </div>
      </div>
    </SectionCard>
  );
}