import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import { Closure } from "./Closure";

describe("Closure", () => {
  it("should work as expected", async () => {
    render(<Closure />);
    const user = userEvent.setup();

    const incrementButton = screen.getByRole("button", { name: /increment/i });
    const displayValue = screen.getByRole("presentation");

    expect(displayValue).toHaveTextContent("0");

    await user.click(incrementButton);
    expect(displayValue).toHaveTextContent("2");

    await user.click(incrementButton);
    await user.click(incrementButton);
    await user.click(incrementButton);

    expect(displayValue).toHaveTextContent("3");
  });
});
