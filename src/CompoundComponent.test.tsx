import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import { CompoundComponent } from "./CompoundComponent";

describe("CompoundComponent", () => {
  it("should work as expected", async () => {
    render(<CompoundComponent />);
    const user = userEvent.setup();
    const alertButton = screen.getByRole("button", { name: /show alert/i });

    await user.click(alertButton);

    expect(screen.getByRole("alert")).toHaveTextContent("Alert❗");
  });
});
