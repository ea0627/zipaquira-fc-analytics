import StatCard from "@/components/ui/StatCard";
import standings from "@/data/standings";
import { getTeamContext } from "@/utils/selectors";

export default function StandingsSummary() {
  const context = getTeamContext(standings, "Zipaquirá Futbol Club");

  if (!context) return null;

  return (
    <div className="stats-grid">
      <StatCard
        label="Posición"
        value={`#${context.team.position}`}
        helper="Calculada automáticamente"
      />

      <StatCard
        label="Puntos"
        value={context.team.points}
        helper={`${context.pointsBehindLeader} pts detrás del líder`}
        tone="success"
      />

      <StatCard
        label="Dif. gol"
        value={context.team.goalDifference > 0 ? `+${context.team.goalDifference}` : context.team.goalDifference}
        helper={`${context.team.goalsFor} GF / ${context.team.goalsAgainst} GC`}
        tone="warning"
      />

      <StatCard
        label="Siguiente puesto"
        value={`${context.pointsBehindPrevious} pts`}
        helper="Distancia al equipo superior"
        tone="info"
      />
    </div>
  );
}