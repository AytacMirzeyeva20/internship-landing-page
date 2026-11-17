import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import StatusBadge from "./StatusBadge";

describe("StatusBadge component", () => {
  it("active status düzgün göstərilməlidir", () => {
    render(<StatusBadge status="active" />);

    expect(screen.getByText("Active")).toBeTruthy();
  });
});