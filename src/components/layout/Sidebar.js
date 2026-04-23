import Link from "next/link";

const navItems = [
  { href: "/", label: "Overview" },
  { href: "/partidos", label: "Partidos" },
  { href: "/tabla", label: "Tabla" },
  { href: "/jugadores", label: "Jugadores" },
  { href: "/analytics", label: "Analytics" },
];

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar__brand">
        <div className="sidebar__logo">ZFC</div>
        <div>
          <p className="sidebar__eyebrow">Dashboard</p>
          <h2 className="sidebar__title">Zipaquirá FC</h2>
        </div>
      </div>

      <nav className="sidebar__nav">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} className="sidebar__link">
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}