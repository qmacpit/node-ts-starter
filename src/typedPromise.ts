interface Artifact {
  id: string,
  size: number
};

const artifacts: Artifact[] = [
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

const getArtifact = (artifactId: string): Promise<Artifact> => {
  // return Promise.resolve(artifacts.find(({id}) => id === artifactId));
  return new Promise(resolve => {
    resolve(artifacts.find(({id}) => id === artifactId));
  });
};

const getArtifacts = async (): Promise<Artifact[]> => artifacts.filter(Boolean);

const scanArtifact = ():Promise<Artifact[]> => {
  const scanArtifact = () => Promise.resolve({
    id: '0',
    size: 100
  })
  return Promise.all([
    scanArtifact()
  ]);
};

export {
  getArtifact, getArtifacts
};