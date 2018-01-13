interface IArtifact {
  id: string,
  size: number
};

const artifacts: IArtifact[] = [
  {
    id: '1',
    size: 100
  },
  {
    id: '2',
    size: 200
  },
  null
];

const getArtifact = (artifactId: string): Promise<IArtifact> => {
  // return Promise.resolve(artifacts.find(({id}) => id === artifactId));
  return new Promise<IArtifact>(resolve => {
    resolve(artifacts.find(({id}) => id === artifactId));
  });
};

const getArtifacts = async (): Promise<IArtifact[]> => artifacts.filter(Boolean);

const scanArtifact = ():Promise<IArtifact[]> => {
  const scanArtifact = () => Promise.resolve({
    id: '0',
    size: 100
  })
  return Promise.all([
    scanArtifact()
  ]);
};

export {
  getArtifact, getArtifacts, IArtifact
};
