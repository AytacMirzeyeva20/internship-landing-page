import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Button from "./Button";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
describe("Button component", () => {
  it("button düzgün render olunmalıdır", () => {
    render(<Button>Click me</Button>);

   expect(
  screen.getByRole("button", { name: "Click me" })
).toBeTruthy();
  });
});
it("button klik edildikdə onClick işləməlidir", async()=>{
const handleClick=vi.fn();
const user=userEvent.setup();
render(<Button onClick={handleClick}>Click me</Button>);

  await user.click(screen.getByRole("button", { name: "Click me" }));

  expect(handleClick).toHaveBeenCalledOnce();
});
it("disabled button klik qəbul etməməlidir",async()=>{
const handleClick=vi.fn();
const user=userEvent.setup();
render(<Button disabled onClick={handleClick}>Disabled</Button>);

  const button = screen.getByRole("button", { name: "Disabled" });
  expect((button as HTMLButtonElement).disabled).toBe(true);
  await user.click(button);
  expect(handleClick).not.toHaveBeenCalled();
})
it("loading zamanı button deaktiv olmalıdır",()=>{
 render(<Button loading>Submit</Button>);
  const button = screen.getByRole("button", { name: "Loading..." });
  expect((button as HTMLButtonElement).disabled).toBe(true);
});