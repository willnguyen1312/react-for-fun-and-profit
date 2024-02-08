import { beforeAll, afterEach, afterAll } from "vitest";
import { cleanup } from "@testing-library/react";
import { server } from "./src/mocks/node";

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());
afterEach(() => cleanup());

afterAll(() => server.close());
