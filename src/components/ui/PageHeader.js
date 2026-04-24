export default function PageHeader({ eyebrow, title, description }) {
  return (
    <section className="page-header">
      {eyebrow && <p className="page-header__eyebrow">{eyebrow}</p>}
      <h2 className="page-header__title">{title}</h2>
      {description && <p className="page-header__description">{description}</p>}
    </section>
  );
}