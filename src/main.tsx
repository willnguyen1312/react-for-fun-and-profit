import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./Home";
import { Effect } from "./Effect";
import { Fast } from "./Fast";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      { path: "effect", element: <Effect /> },
      { path: "fast", element: <Fast /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />;
}

if (import.meta.hot) {
  import.meta.hot.dispose(() => router.dispose());
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
