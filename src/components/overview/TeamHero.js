import Badge from "@/components/ui/Badge";
import club from "@/data/club";

export default function TeamHero() {
  return (
    <section className="team-hero">
      <div className="team-hero__logo">ZFC</div>

      <div className="team-hero__content">
        <div className="team-hero__badges">
          <Badge tone="success">{club.status.competition}</Badge>
          <Badge tone="info">{club.region}</Badge>
          <Badge tone="warning">Posición #{club.status.currentPosition}</Badge>
        </div>

        <p className="team-hero__eyebrow">{club.productName}</p>

        <h2 className="team-hero__title">{club.name}</h2>

        <p className="team-hero__description">
          Dashboard deportivo para seguir el rendimiento competitivo del club,
          visualizar datos clave y analizar la evolución del equipo jornada a
          jornada.
        </p>

        <div className="team-hero__meta">
          <span>🏟️ {club.stadium}</span>
          <span>👤 Manager: {club.manager}</span>
          <span>🌎 {club.country}</span>
        </div>
      </div>
    </section>
  );
}