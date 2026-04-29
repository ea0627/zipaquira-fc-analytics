import Badge from "@/components/ui/Badge";
import SectionCard from "@/components/ui/SectionCard";
import matches from "@/data/matches";

const resultConfig = {
  W: { label: "Victoria", tone: "success" },
  D: { label: "Empate", tone: "warning" },
  L: { label: "Derrota", tone: "danger" },
};

export default function MatchesTable() {
  const orderedMatches = [...matches].sort((a, b) => a.round - b.round);

  return (
    <SectionCard
      title="Fixture completo"
      description="Calendario de 14 jornadas con resultados y próximos partidos."
    >
      <div className="matches-table">
        <div className="matches-table__head">
          <span>Jornada</span>
          <span>Fecha</span>
          <span>Rival</span>
          <span>Condición</span>
          <span>Marcador</span>
          <span>Estado</span>
        </div>

        {orderedMatches.map((match) => {
          const result = resultConfig[match.result];

          return (
            <article key={match.id} className="matches-table__row">
              <span>J{match.round}</span>
              <span>{match.date}</span>
              <strong>{match.opponent}</strong>
              <span>{match.homeAway}</span>
              <span>
                {match.status === "Finalizado"
                  ? `${match.goalsFor} - ${match.goalsAgainst}`
                  : "—"}
              </span>
              <span>
                {match.status === "Finalizado" && result ? (
                  <Badge tone={result.tone}>{result.label}</Badge>
                ) : (
                  <Badge tone="info">Programado</Badge>
                )}
              </span>
            </article>
          );
        })}
      </div>
    </SectionCard>
  );
}