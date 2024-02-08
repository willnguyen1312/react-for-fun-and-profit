import React from "react";
import ReactDOM from "react-dom/client";
import "virtual:uno.css";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
} from "@apollo/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CompoundComponent } from "./CompoundComponent";
import { Effect } from "./Effect";
import { Fast } from "./Fast";
import { Home } from "./Home";
import { Playground } from "./Playground";
import { RenderProp } from "./RenderProp";
import { Api } from "./Api";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      { path: "effect", element: <Effect /> },
      { path: "render-prop", element: <RenderProp /> },
      { path: "compound-component", element: <CompoundComponent /> },
      { path: "fast", element: <Fast /> },
      { path: "playground", element: <Playground /> },
      { path: "api", element: <Api /> },
    ],
  },
]);

const client = new ApolloClient({
  link: new HttpLink(),
  cache: new InMemoryCache(),
});

if (import.meta.hot) {
  import.meta.hot.dispose(() => router.dispose());
}

async function enableMocking() {
  if (process.env.NODE_ENV !== "development") {
    return;
  }

  const { worker } = await import("./mocks/browser");

  // `worker.start()` returns a Promise that resolves
  // once the Service Worker is up and ready to intercept requests.
  return worker.start();
}

enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      <ApolloProvider client={client}>
        <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />
      </ApolloProvider>
    </React.StrictMode>
  );
});
