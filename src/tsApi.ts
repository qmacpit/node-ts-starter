import { Request, Response, Application, IRoute, Router } from "express";
import { getArtifact, getArtifacts } from './typedPromise';
import { WSAEWOULDBLOCK } from "constants";

export = (apiRouter: Router) => {

  apiRouter.get('/tsApi', (req: Request, res: Response) => res.send({ tsApi: true }));
  apiRouter.get(
    '/artifact/:id', 
    (req: Request, res: Response) => {
      getArtifact(req.params.id)
      .then((artifact: any) => {
        res.send(artifact);
      });      
    }
  );
  apiRouter.get(
    '/artifacts', 
    async (req: Request, res: Response) => res.send(await getArtifacts())      
  );

};
