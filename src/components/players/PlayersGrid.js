import Badge from "@/components/ui/Badge";
import players from "@/data/players";

const getFormTone = (form) => {
  if (form === "Excelente") return "success";
  if (form === "Buena") return "info";
  if (form === "Normal") return "neutral";
  return "warning";
};

export default function PlayersGrid() {
  return (
    <div className="players-grid">
      {players.map((player) => (
        <article key={player.id} className="player-card">
          <div className="player-card__avatar">
            {player.name
              .split(" ")
              .map((word) => word[0])
              .join("")
              .slice(0, 2)}
          </div>

          <div className="player-card__header">
            <div>
              <h3>{player.name}</h3>
              <p>{player.position} · {player.age} años</p>
            </div>

            <Badge tone={getFormTone(player.form)}>{player.form}</Badge>
          </div>

          <div className="player-card__stats">
            <span>
              <strong>{player.goals}</strong>
              Goles
            </span>
            <span>
              <strong>{player.assists}</strong>
              Asist.
            </span>
            <span>
              <strong>{player.rating}</strong>
              Rating
            </span>
          </div>
        </article>
      ))}
    </div>
  );
}