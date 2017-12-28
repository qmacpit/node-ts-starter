import { User, getData, addUser, findUser, getUsers } from './dataHandler';

addUser('john', 21);
addUser('marry');

export const getContent = ():object => getData('1');
export const getAllUsers = ():User[] => getUsers();
export const getUser = (username: string):User => findUser(username);
