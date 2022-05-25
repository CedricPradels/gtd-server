import { Express } from "express";
import { healthcheckHandler } from "./controllers/healthcheck";

export const addRoutes = (app: Express): void => {
  app.get("/healthcheck", healthcheckHandler);

  app.all("*", (req, res) => {
    res.send("Not Found");
  });
};
