export type ApplicationStatus = | "pending" | "approved" | "rejected";
export interface Application {
  id: string;
  status: ApplicationStatus;
  date: string;
}
