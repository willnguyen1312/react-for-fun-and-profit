import { Link, Outlet } from "react-router-dom";

const links: { to: string; label: string }[] = [
  { to: "/api", label: "Api component" },
  { to: "/compound-component", label: "Compound component" },
  { to: "/debounce", label: "Debounce" },
  { to: "/effect", label: "You might not need an effect" },
  { to: "/fast", label: "Fast code" },
  { to: "/playground", label: "Playground" },
  { to: "/render-prop", label: "Render prop" },
  { to: "/closure", label: "Closure" },
];

export function Home() {
  return (
    <main>
      <h1>React for fun and profit 🐻‍❄️</h1>
      <ul>
        {links.map((link) => (
          <li key={link.to}>
            <Link to={link.to}>{link.label}</Link>
          </li>
        ))}
      </ul>

      <Outlet />
    </main>
  );
}
