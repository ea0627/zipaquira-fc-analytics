import Badge from "@/components/ui/Badge";
import SectionCard from "@/components/ui/SectionCard";
import matches from "@/data/matches";

const resultConfig = {
  W: {
    label: "Victoria",
    tone: "success",
  },
  D: {
    label: "Empate",
    tone: "warning",
  },
  L: {
    label: "Derrota",
    tone: "danger",
  },
};

export default function RecentResults() {
  const finishedMatches = matches
    .filter((match) => match.status === "Finalizado")
    .sort((a, b) => b.round - a.round)
    .slice(0, 4);

  return (
    <SectionCard
      title="Últimos resultados"
      description="Rendimiento reciente del equipo en la competición."
    >
      <div className="recent-results">
        {finishedMatches.map((match) => {
          const result = resultConfig[match.result];

          return (
            <article key={match.id} className="recent-result">
              <div>
                <p className="recent-result__round">Jornada {match.round}</p>
                <h4 className="recent-result__opponent">{match.opponent}</h4>
                <p className="recent-result__meta">
                  {match.homeAway} · {match.competition}
                </p>
              </div>

              <div className="recent-result__score">
                <strong>
                  {match.goalsFor} - {match.goalsAgainst}
                </strong>
                <Badge tone={result.tone}>{result.label}</Badge>
              </div>
            </article>
          );
        })}
      </div>
    </SectionCard>
  );
}