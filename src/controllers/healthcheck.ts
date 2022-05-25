import { RequestHandler } from "express";

export const healthcheckHandler: RequestHandler = (req, res) => {
  res.send(200);
};
