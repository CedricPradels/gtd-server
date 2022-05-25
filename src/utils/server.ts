import express, { Express } from "express";
import cors from "cors";
import { addRoutes } from "../routes";

export const createServer = (): Express => {
  const app = express();

  app.use(express.json());
  app.use(cors());

  addRoutes(app);

  return app;
};
