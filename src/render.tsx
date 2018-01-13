import { Request, Response } from "express";
import * as ReactDOMServer from 'react-dom/server';
import { Link, StaticRouter, Route, Switch, matchPath, RouteProps } from 'react-router-dom';
import { ROUTES, IRouteProps } from './routes';
import main from './components/main';

const EXCEPTIONS = [
  '/favicon.ico'
];
const createExceptionsHandler = 
  (next: (req: Request, res: Response) => void) => (req: Request, res: Response) => (
    EXCEPTIONS.indexOf(req.url) !== -1
      ? res.status(404).end()
      : next(req, res)
  )

const hanleRequest = (req: Request, res: Response) => {
  const { url } = req;
  let match: any;
  const matchedRoute: IRouteProps = ROUTES.find(route => {
    match = matchPath(url, route);
    return !!match;
  });

  if (matchedRoute) {
    return matchedRoute.loadData(match.params)
      .then((data: any) => {
        res.send(
          ReactDOMServer.renderToString(
            main({ 
              context: {},
              url, data
            })
          )
        );
      })
  } 
  res.status(404).end();
};

module.exports = createExceptionsHandler(hanleRequest);
