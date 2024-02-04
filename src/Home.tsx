import { Link, Outlet } from "react-router-dom";

export function Home() {
  return (
    <main>
      <h1>React for fun and profit 🐻‍❄️</h1>
      <ul>
        <li>
          <Link to="/effect">You might not need an effect</Link>
        </li>
        <li>
          <Link to="/fast">Fast code</Link>
        </li>
      </ul>

      <Outlet />
    </main>
  );
}
