import Badge from "@/components/ui/Badge";
import SectionCard from "@/components/ui/SectionCard";
import standings from "@/data/standings";
import { getSortedStandings } from "@/utils/selectors";

const getZoneBadge = (position, totalTeams) => {
    if (position <= 1) {
        return { label: "Ascenso / Promoción", tone: "success" };
    }

    if (position >= 2 && position <= 4) {
        return { label: "Permanencia segura", tone: "neutral" };
    }

    if (position >= 5 && position <= 6) {
        return { label: "Promoción descenso", tone: "warning" };
    }

    return { label: "Descenso directo", tone: "danger" };
};

export default function StandingsTable() {
  const sortedStandings = getSortedStandings(standings);
  const totalTeams = sortedStandings.length;

  return (
    <SectionCard
      title="Tabla de posiciones"
      description="Clasificación calculada automáticamente por puntos, diferencia de gol y goles a favor."
    >
      <div className="standings-table">
        <div className="standings-table__head">
          <span>Pos</span>
          <span>Equipo</span>
          <span>PJ</span>
          <span>PG</span>
          <span>PE</span>
          <span>PP</span>
          <span>GF</span>
          <span>GC</span>
          <span>DG</span>
          <span>Pts</span>
          <span>Zona</span>
        </div>

        {sortedStandings.map((team) => {
          const isZipaquira = team.team === "Zipaquirá Futbol Club";
          const zone = getZoneBadge(team.position);

          return (
            <article
              key={team.team}
              className={`standings-table__row ${
                isZipaquira ? "standings-table__row--highlight" : ""
              }`}
            >
              <strong>#{team.position}</strong>
              <span>{team.team}</span>
              <span>{team.played}</span>
              <span>{team.wins}</span>
              <span>{team.draws}</span>
              <span>{team.losses}</span>
              <span>{team.goalsFor}</span>
              <span>{team.goalsAgainst}</span>
              <span>
                {team.goalDifference > 0
                  ? `+${team.goalDifference}`
                  : team.goalDifference}
              </span>
              <strong>{team.points}</strong>
              <Badge tone={zone.tone}>{zone.label}</Badge>
            </article>
          );
        })}
      </div>
    </SectionCard>
  );
}