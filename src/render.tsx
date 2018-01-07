import { Request, Response } from "express";
import { Link, StaticRouter, Route, Switch } from 'react-router-dom';
import * as React from 'react';
import * as ReactDOMServer from 'react-dom/server';


// function renderHTML(markup: string, store: any) {
//   const html = ReactDOMServer.renderToString(
//     <Html markup={markup} manifest={manifest} store={store} />,
//   );

//   return `<!doctype html> ${html}`;
// }

const about = () => <h3>about</h3>
const help = () => <h3>help</h3>

const home = () => {
  return (
    <div>
      <Link to="/about">About</Link>
      <Link to="/help">Help</Link>
    </div>
  );
};
const app = (props: any) => {
  const date: Date =  props.date;
  console.log('redering....')
  console.log(props.url)
  
  return (
    <StaticRouter
      location={props.url}
      context={props.context}
    >
      <Switch>
        <Route exact path="/" component={home}/>      
        <Route path="/about" component={about}/>
        <Route path="/help" component={help}/>        
      </Switch>
  </StaticRouter>    
  );
};

module.exports = (req: Request, res: Response) => {
  // res.send('<h1>Hello world</h1>');
  res.send(ReactDOMServer.renderToString(app({ 
    date: new Date(),
    url: req.url,
    context: {}
  })));
};
