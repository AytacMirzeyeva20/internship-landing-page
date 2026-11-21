import applicationsData from "../data/applications.json";
import type { Application } from "../types/Application";
export type ApiScenario = | "success" | "empty" | "unauthorized" | "server-error";

export const getApplications = async (scenario:ApiScenario):Promise<Application[]>=>{
  await new Promise((resolve) => setTimeout(resolve, 1000));

if(scenario === "success"){
return applicationsData.applications as Application[];
};
if(scenario === "empty"){
    return [];
};
if(scenario === "unauthorized"){
    throw new Error("401 Unauthorized");
};
if(scenario === "server-error"){
    throw new Error("500 Internal Server Error");
}
throw new Error("Unknown API scenario");
}
