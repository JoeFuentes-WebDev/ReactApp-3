
import { Intro } from '../pages/Intro';
import { FirstPage } from '../pages/FirstPage';
import { SecondPage } from '../pages/SecondPage';
import { Todos } from '../pages/Todos';
import { Users } from '../pages/Users'

export const PAGES = [
  {dest: '/', name: "Home", comp: <Intro />},
  {dest: '/first', name: "Page 1", comp: <FirstPage />},
  {dest: '/second', name: "Page 2", comp: <SecondPage />},
  {dest: '/users', name: "User List", comp: <Users />},
  {dest: '/todos', name: "Todo List", comp: <Todos />},
];

const BASE = 'https://jsonplaceholder.typicode.com'
export const URL = {
  todos: `${BASE}/todos`,
  users: `${BASE}/users`,
  posts: `${BASE}/posts`,
}