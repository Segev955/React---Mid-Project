import axios from "axios";

const USERS = "https://jsonplaceholder.typicode.com/users";
const TODOS = "https://jsonplaceholder.typicode.com/todos";
const POSTS = "https://jsonplaceholder.typicode.com/posts";

async function getUserFullData(id) {
  const { data: user } = await axios.get(`${USERS}/${id}`);
  const { data: todos } = await axios.get(`${TODOS}?userId=${id}`);
  const titles = todos.slice(0, 3).map((to) => to.title);
  const obj = {
    name: user.name,
    email: user.email,
    todos: titles,
  };
  return obj;
}

async function getAllUsers() {
  const { data } = await axios.get(USERS);
  return data;
}

async function getAllTodos() {
  const { data: todos } = await axios.get(TODOS);
  return todos;
}

async function getAllPosts() {
  const { data: posts } = await axios.get(POSTS);
  return posts;
}

async function getTodos(id) {
  const { data: todos } = await axios.get(`${TODOS}?userId=${id}`);
  return todos;
}

async function getPosts(id) {
  const { data: posts } = await axios.get(`${POSTS}?userId=${id}`);
  return posts.map((to) => to.title);
}

async function updateUser(id, obj) {
  const data = await axios.put(`${USERS}/${id}`, obj);
  console.log(data);
}

async function getUser(id) {
  const { data: user } = await axios.get(`${USERS}/${id}`);
  return user;
}

export {
  getUserFullData,
  getAllUsers,
  getTodos,
  updateUser,
  getUser,
  getPosts,
  getAllTodos,
  getAllPosts,
};
