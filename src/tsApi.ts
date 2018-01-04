import { Request, Response, Application } from "express";
import { getArtifact, getArtifacts } from './typedPromise';
import { WSAEWOULDBLOCK } from "constants";

export = (app: Application) => {
  app.get('/tsApi', (req: Request, res: Response) => res.send({ tsApi: true }));
  
  app.get(
    '/artifact/:id', 
    (req: Request, res: Response) => {
      getArtifact(req.params.id)
      .then((artifact: any) => {
        res.send(artifact);
      });      
    }
  );
  app.get(
    '/artifacts', 
    async (req: Request, res: Response) => res.send(await getArtifacts())      
  );

};
