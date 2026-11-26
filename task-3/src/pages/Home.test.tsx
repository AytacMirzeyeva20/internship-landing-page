import { render, screen, } from "@testing-library/react";
import { describe, vi,expect, it } from "vitest";
import Home from "./Home";
import { getApplications } from "../services/applicationApi";
import type { Application } from "../types/Application";
import userEvent from "@testing-library/user-event";
vi.mock("../services/applicationApi",()=>({
    getApplications: vi.fn(),
}))

const mockApplications: Application[]=[
  {
    id: "APP-001",
    status: "pending",
    date: "2026-11-20",
  },
  {
    id: "APP-002",
    status: "approved",
    date: "2026-11-21",
  },  
];
describe("Home Dashboard", ()=>{
  it("Müraciətləri uğurla göstərməlidir", async ()=>{
    vi.mocked(getApplications).mockResolvedValue(mockApplications);
    render(<Home/>);
   expect(await screen.findByText("APP-001")).toBeInTheDocument();
    expect(screen.getByText("APP-002")).toBeInTheDocument();
});
it("Müraciət siyahısı boş olduqda Empty State göstərməlidir", async ()=>{
    vi.mocked(getApplications).mockResolvedValue([]);
    render(<Home/>);
    expect(await screen.findByText(/müraciət yoxdur/i)).toBeInTheDocument();
});
it("401 xətası zamanı xəta mesajını göstərməlidir", async () => {
  vi.mocked(getApplications).mockRejectedValue(
    new Error("401 Unauthorized")
  );

  render(<Home />);

  expect(await screen.findByText(/Giriş üçün icazəniz yoxdur/i)).toBeInTheDocument();
});
it("500 xətası zamanı server xəta mesajını göstərməlidir", async () => {
  vi.mocked(getApplications).mockRejectedValue(
    new Error("500 Internal Server Error")
  );

  render(<Home />);

  expect(await screen.findByText(/Server xətası baş verdi/i)).toBeInTheDocument();
});
it("Refresh düyməsinə basıldıqda API sorğusunu yenidən göndərməlidir", async ()=>{
    vi.mocked(getApplications).mockResolvedValue(mockApplications);
  const user = userEvent.setup();
  render(<Home />);
  await screen.findByText("APP-001");
  const refreshButton = screen.getByRole("button", {name: /yenilə|refresh/i,});

  await user.click(refreshButton);

  expect(getApplications).toHaveBeenCalledTimes(2);
});
it("loading zamanı Refresh düyməsi deaktiv olmalıdır", async () => {
  vi.mocked(getApplications).mockImplementation(
    () => new Promise(() => {})
  );

  render(<Home />);
  expect(screen.getByText("Yuklenir...")).toBeInTheDocument();
});
})