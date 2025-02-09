import { useState, useEffect } from "react";

function TodosComp({todo, setTodos, todos }) {
  const [completed, setCompleted] = useState(false)
    
  useEffect(() => {
    setCompleted(todo.completed)
  }, [todos]);

  function updateTodo() {
    setTodos((todos) => todos.map(to => to.id == todo.id ? {...to, completed: true} : to))
  }
    
  return (
    <>
      <div style={{ border: `1px solid purple`, width: "100%" }}>
        <u>Title</u>: {todo.title} <br /> 
        <span style={{ paddingRight: "5px" }}>
        <u>Completed</u>: {todo.completed.toString()} </span>
        {!completed && <button onClick={updateTodo}>Mark Completed</button>}
        
      </div>
    </>
  );
}

export default TodosComp;
