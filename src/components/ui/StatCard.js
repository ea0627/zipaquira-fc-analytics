export default function StatCard({ label, value, helper, tone = "default" }) {
  return (
    <article className={`stat-card stat-card--${tone}`}>
      <p className="stat-card__label">{label}</p>
      <strong className="stat-card__value">{value}</strong>
      {helper && <span className="stat-card__helper">{helper}</span>}
    </article>
  );
}