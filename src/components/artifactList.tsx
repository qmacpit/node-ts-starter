import * as React from 'react';

import { IArtifact, getArtifacts } from '../typedPromise';

interface IProps {
  artifacts: IArtifact[]
}

class ArtifactList extends React.Component<IProps, {}> {
  
  render() {
    const { artifacts } = this.props;
    return (
      <div>
        artifacts:
        <ul>
          { 
            artifacts.map(artifact => (
              <li key={artifact.id}>{artifact.id}</li>
            ))
          }
        </ul>
      </div>
    )
  }

}

export { ArtifactList };
