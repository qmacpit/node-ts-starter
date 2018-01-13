import * as React from 'react';
import { StaticRouter, Route, Switch } from 'react-router-dom';
import { ROUTES } from '../routes';

export default (props: any) => (
  <StaticRouter
    location={props.url}
    context={props.context}
  >
    <Switch>
      {
        ROUTES.map(route => {
          const Component: any = route._component;
          return (
            <Route 
              {...route} 
              key={route.path}
              render={() => <Component {...props.data}/>} 
            />
          )
        })
      }
    </Switch>
  </StaticRouter>    
);
