import { RouteProps } from 'react-router-dom';
import { ArtifactList } from './components/artifactList';
import { ArtifactDetails } from './components/artifactDetails';
import { getArtifacts, IArtifact, getArtifact } from "./typedPromise";

export interface IRouteProps extends RouteProps {
  _component: any,
  loadData: (params: any) => any  
};

export const ROUTES: IRouteProps[] = [
  { 
    path: '/artifacts',
    _component: ArtifactList,
    exact: true,
    loadData: (params: any) => (
      getArtifacts()
        .then(artifacts => ({artifacts}))
    )
  },
  { 
    path: '/artifacts/:id',
    _component: ArtifactDetails,
    exact: true,
    loadData: (params: any): any => (
      getArtifact(params.id)
        .then(artifact => ({artifact}))
    )
  }
];
