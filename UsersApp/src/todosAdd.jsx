import { useState, useEffect } from "react";

function TodosAddComp({ user, setTodos, todos, setShowTodos, setShowAddTodos }) {
  const [title, setTitle] = useState("")

  function update() {
    const obj = {
      userId: user.id,
      id: todos.length+1,
      title: title,
      completed: false
    }
    setTodos([...todos, obj ])
    cancel()
  }

  function cancel() {
    setShowAddTodos(false)
    setShowTodos(true)
  }
    
    
  return (
    <>
      <div style={{ width: "100%" }}>
        <u>Title</u>: <input type="text" onChange={e => setTitle(e.target.value)} /> <br /> <br />
        <button onClick={cancel}>Cancel</button>
        <button onClick={update}>Add</button>
        
      </div>
    </>
  );
}

export default TodosAddComp;
