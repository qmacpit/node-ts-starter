import * as React from 'react';
import { IArtifact } from '../typedPromise';

interface IProps {
  artifact: IArtifact
}

class ArtifactDetails extends React.Component<IProps, {}> {
  render() {
    const { artifact } = this.props;
    return (
      <div>
        <span>id: {artifact.id}</span>
        <span>size: {artifact.size}</span>
      </div>
    )
  }
}

export { ArtifactDetails };
