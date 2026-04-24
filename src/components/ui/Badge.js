export default function Badge({
  children,
  tone = "neutral",
  variant = "solid",
}) {
  return (
    <span className={`badge badge--${tone} badge--${variant}`}>
      {children}
    </span>
  );
}