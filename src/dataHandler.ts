const DATA = {
  'foo': 'foo',
  'bar': 'bar'
};

interface User {
  name: string;
  age?: number
}

const users: User[] = [];

const getData = (a: string):object => DATA;

const getUsers = ():User[] => users;
const findUser = (username: string):User => users.find(({name}) => name === username);
const addUser = (name: string, age?: number) => users.push({ name, age });

export {    
  getData, findUser, addUser, getUsers, User
};
