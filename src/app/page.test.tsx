import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import Home from "./page";

afterEach(() => {
  cleanup();
});

describe("Home page", () => {
  it("renders the template heading", () => {
    render(<Home />);
    expect(screen.getByText("Fish Bowl Template")).toBeTruthy();
  });
});
