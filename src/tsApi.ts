import { Request, Response, Application } from "express";

export = (app: Application) => {
  app.get('/tsApi', (req: Request, res: Response) => res.send({ tsApi: true }));
};
