import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { describe, it, expect } from "vitest";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
} from "@apollo/client";
import { Api } from "./Api";

function renderApi() {
  const client = new ApolloClient({
    link: new HttpLink(),
    cache: new InMemoryCache(),
  });

  return render(
    <ApolloProvider client={client}>
      <Api />
    </ApolloProvider>
  );
}

describe("Api", () => {
  it("renders loading", async () => {
    renderApi();

    expect(screen.getByText("Loading...")).toBeInTheDocument();

    await waitForElementToBeRemoved(() => screen.queryByText("Loading..."));
  });
});
