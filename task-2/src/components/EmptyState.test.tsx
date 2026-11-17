import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import EmptyState from "./EmptyState";

describe("EmptyState component", () => {
  it("title və description göstərilməlidir", () => {
    render(<EmptyState  title="No Data Found"  description="There is no data to display right now."/>);

    expect(screen.getByText("No Data Found")).toBeTruthy();
    expect(
      screen.getByText("There is no data to display right now.")
    ).toBeTruthy();
  });
});