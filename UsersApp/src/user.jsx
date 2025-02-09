import { useState, useEffect } from "react";
import OtherDataComp from "./otherData";
import TodosComp from "./todos";
import PostsComp from "./posts";
import TodosAddComp from "./todosAdd";
import PostsAddComp from "./postsAdd";

function UserComp({ user, users, setUsers, todos, setTodos, posts, setPosts }) {
  const [userTodos, setUserTodos] = useState([]);
  const [userPosts, setUserPosts] = useState([]);

  const [borderColor, setBorderColor] = useState("red");
  const [backgroundColor, setBackgroundColor] = useState("white");

  const [userr, setUserr] = useState(user);

  const [showOtherData, setShowOtherData] = useState(false);
  const [showTodos, setShowTodos] = useState(false);
  const [showPosts, setShowPosts] = useState(false);
  const [showAddTodos, setShowAddTodos] = useState(false);
  const [showAddPosts, setShowAddPosts] = useState(false);

  //Todos
  useEffect(() => {    
    setUserTodos(todos.filter((to) => to.userId == user.id));
  }, [todos]);

  //Posts
  useEffect(() => {
    setUserPosts(posts.filter((po) => po.userId == user.id));
  }, [posts]);

  //Border Color
  useEffect(() => {
    const hasIncompleteTodo = userTodos.some(
      (todo) => todo.completed === false
    );
    setBorderColor(hasIncompleteTodo ? "red" : "green");
  }, [todos, userTodos]);

  //Background Color
  useEffect(() => {
    setBackgroundColor(showTodos || showPosts || showAddTodos || showAddPosts ? "orange" : "gray");
  }, [showTodos, showPosts, showAddTodos, showAddPosts]);

  function updateUser() {
    setUsers((users) => users.map((u) => (u.id == user.id ? userr : u)));
  }
  function deleteUser() {
    setUsers((users) => users.filter((u) => u.id != user.id));
  }

  //Show Todos and Posts
  function showData(e) {
    if (e.target.tagName !== "INPUT" && e.target.tagName !== "BUTTON") {
    const bol = showTodos || showPosts || showAddTodos;
    setShowTodos(!bol);
    setShowPosts(!bol);
    setShowAddTodos(showAddTodos ? false : null);
    setShowAddPosts(showAddPosts ? false : null);
    }
  }

  function addTodos() {
    setShowTodos(false);
    setShowAddTodos(true);
  }

  function addPosts() {
    setShowPosts(false);
    setShowAddPosts(true);
  }

  return (
    <>
      <div style={{ display: "flex", alignItems: "flex-start", gap: "20px" }}>
        <div
          style={{
            border: `2px solid ${borderColor}`,
            width: "330px",
            padding: "10px",
            cursor: "pointer",
            backgroundColor: backgroundColor,
          }}
          onClick={showData}
        >
          ID: {user.id} <br />
          Name:{" "}
          <input
            type="text"
            defaultValue={user.name}
            onChange={(e) => setUserr({ ...userr, name: e.target.value })}
          />{" "}
          <br />
          Email:{" "}
          <input
            type="text"
            defaultValue={user.email}
            onChange={(e) => setUserr({ ...userr, email: e.target.value })}
          />{" "}
          <br /> <br />
          <button
            onMouseOver={() => setShowOtherData(true)}
            onClick={() => setShowOtherData(false)}
          >
            Other Data
          </button>
          <button
            onClick={updateUser}
            style={{ backgroundColor: "#f1e468", color: "black" }}
          >
            Update
          </button>
          <button
            onClick={deleteUser}
            style={{ backgroundColor: "#f1e468", color: "black" }}
          >
            Delete
          </button>{" "}
          <br /> <br />
          {showOtherData && <OtherDataComp user={userr} setUserr={setUserr} />}
          <br />
        </div>
        {/* {showTodos && } */}
        {showTodos && (
          <div
            style={{
              maxHeight: "200px",
              overflowY: "auto", // Enable vertical scrolling
              border: "1px solid black",
              padding: "5px",
              width: "330px",
            }}
          >
            Todos - {user.name} <button onClick={addTodos}>Add</button> <br /> <br />
            {userTodos.map((to) => (
              <TodosComp
                key={to.id}
                todo={to}
                todos={userTodos}
                setTodos={setUserTodos}
              />
            ))}
          </div>
        )}
        {/* {showAddTodos && } */}
        {showAddTodos && (
          <div
            style={{
              maxHeight: "200px",
              border: "1px solid black",
              padding: "5px",
              width: "330px",
            }}
          >
            New Todo - {user.name} <br /> <br />
            <TodosAddComp
              user={user}
              todos={userTodos}
              setTodos={setUserTodos}
              setShowTodos={setShowTodos}
              setShowAddTodos={setShowAddTodos}
            />
          </div>
        )}

        {/* {showPosts && } */}
        {showPosts && (
          <div
            style={{
              maxHeight: "200px",
              overflowY: "auto", // Enable vertical scrolling
              border: "1px solid black",
              padding: "5px",
              width: "330px",
            }}
          >
            Posts - {user.name} <button onClick={addPosts}>Add</button> <br /> <br />
            {userPosts.map((po) => (
              <PostsComp
                key={po.id}
                post={po}
              />
            ))}
          </div>
        )}

        {/* {showAddPosts && } */}
        {showAddPosts && (
          <div
            style={{
              maxHeight: "200px",
              border: "1px solid black",
              padding: "5px",
              width: "330px",
            }}
          >
            New Todo - {user.name} <br /> <br />
            <PostsAddComp
              user={user}
              posts={userPosts}
              setPosts={setUserPosts}
              setShowPosts={setShowPosts}
              setShowAddPosts={setShowAddPosts}
            />
          </div>
        )}
      </div>
    </>
  );
}

export default UserComp;
