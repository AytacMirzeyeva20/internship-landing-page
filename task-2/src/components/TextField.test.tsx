import { render, screen } from "@testing-library/react";
import {  it, expect } from "vitest";
import TextField from "./TextField";

it("error mesajını input ilə əlaqələndirməlidir", () => {
  render( <TextField  label="Full Name" value="" onChange={() => {}} error="Name is required"/>);

  const input = screen.getByLabelText("Full Name");

  expect(input.getAttribute("aria-invalid")).toBe("true");
  expect(input.getAttribute("aria-describedby")).toBeTruthy();
});

it("helperText input ilə əlaqələndirilməlidir", () => {
  render(
    <TextField label="Full Name" value="" onChange={() => {}}  helperText="Enter your full name"/>);

  const input = screen.getByLabelText("Full Name");

  expect(input.getAttribute("aria-describedby")).toBeTruthy();
});