import StatCard from "@/components/ui/StatCard";
import matches from "@/data/matches";

const getAnalytics = () => {
  const finishedMatches = matches.filter(
    (match) => match.status === "Finalizado"
  );

  const totalMatches = finishedMatches.length;

  const wins = finishedMatches.filter((match) => match.result === "W").length;

  const goalsFor = finishedMatches.reduce(
    (total, match) => total + match.goalsFor,
    0
  );

  const goalsAgainst = finishedMatches.reduce(
    (total, match) => total + match.goalsAgainst,
    0
  );

  const avgGoalsFor = (goalsFor / totalMatches).toFixed(2);
  const avgGoalsAgainst = (goalsAgainst / totalMatches).toFixed(2);
  const winRate = Math.round((wins / totalMatches) * 100);
  const goalDifference = goalsFor - goalsAgainst;

  return {
    totalMatches,
    avgGoalsFor,
    avgGoalsAgainst,
    winRate,
    goalDifference,
  };
};

export default function AnalyticsSummary() {
  const analytics = getAnalytics();

  return (
    <div className="stats-grid">
      <StatCard
        label="PJ"
        value={analytics.totalMatches}
        helper="Partidos disputados"
      />

      <StatCard
        label="Prom. GF"
        value={analytics.avgGoalsFor}
        helper="Goles a favor por partido"
        tone="success"
      />

      <StatCard
        label="Prom. GC"
        value={analytics.avgGoalsAgainst}
        helper="Goles en contra por partido"
        tone="danger"
      />

      <StatCard
        label="% Victorias"
        value={`${analytics.winRate}%`}
        helper="Efectividad competitiva"
        tone="warning"
      />

      <StatCard
        label="Dif. gol"
        value={
          analytics.goalDifference > 0
            ? `+${analytics.goalDifference}`
            : analytics.goalDifference
        }
        helper="Balance total"
        tone="success"
      />
    </div>
  );
}