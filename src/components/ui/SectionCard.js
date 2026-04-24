export default function SectionCard({ title, description, children }) {
  return (
    <section className="section-card">
      {(title || description) && (
        <div className="section-card__header">
          {title && <h3 className="section-card__title">{title}</h3>}
          {description && <p className="section-card__description">{description}</p>}
        </div>
      )}

      <div className="section-card__content">{children}</div>
    </section>
  );
}