import { useState, useEffect } from "react";
import "./App.css";
import { getAllUsers, getAllTodos, getAllPosts } from "./utils";
import UserComp from "./user";
import UserAddComp from "./userAdd";

function App() {
  const [users, setUsers] = useState([]);
  const [todos, setTodos] = useState([]);
  const [posts, setPosts] = useState([]);
  const [filteredUsers, setfilteredUsers] = useState([]);
  const [search, setSearch] = useState("");

  const [showAddUser, setShowAddUser] = useState(false);

  //Users
  useEffect(() => {
    async function getUsers() {
      const data = await getAllUsers();
      setUsers(data);
      setfilteredUsers(data);
    }
    getUsers();
  }, []);

  //Todos
  useEffect(() => {
    async function getTasks() {
      const data = await getAllTodos();
      setTodos(data);
    }
    getTasks();
  }, []);

  //Posts
  useEffect(() => {
    async function getPosts() {
      const data = await getAllPosts();
      setPosts(data);
    }
    getPosts();
  }, []);

  //Filter Users (search)
  useEffect(() => {
    setfilteredUsers(
      users.filter(
        (user) =>
          user.name.toLowerCase().includes(search.toLowerCase()) ||
          user.email.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, users]);

  return (
    <>
      <div style={{ display: "flex", alignItems: "flex-start" }}>
      <div style={{ flex: 1 }}>
        Search <input type="text" onChange={(e) => setSearch(e.target.value)} />
        <button onClick={() => setShowAddUser(!showAddUser)}>Add</button> <br />
        {filteredUsers.map((user) => {
          return (
            <div key={user.id}>
              <UserComp
                key={user.id}
                user={user}
                users={users}
                setUsers={setUsers}
                todos={todos}
                setTodos={setTodos}
                posts={posts}
                setPosts={setPosts}
              />{" "}
              <br />
            </div>
          );
        })}
        </div>
        {/* {showAddUser && } */}
        {showAddUser && (
          <div
            style={{
              maxHeight: "200px",
              border: "1px solid black",
              padding: "5px",
              width: "330px",
              marginLeft: "20px",
              marginTop: "50px"
            }}
          >
            Add New User <br /> <br />
            <UserAddComp
              users={users}
              setUsers={setUsers}
              setShowAddUser={setShowAddUser}
            />
          </div>
        )}
      </div>
    </>
  );
}

export default App;
