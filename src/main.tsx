import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CompoundComponent } from "./CompoundComponent";
import { Effect } from "./Effect";
import { Fast } from "./Fast";
import { Home } from "./Home";
import { RenderProp } from "./RenderProp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      { path: "effect", element: <Effect /> },
      { path: "render-prop", element: <RenderProp /> },
      { path: "compound-component", element: <CompoundComponent /> },
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
  </React.StrictMode>,
);
