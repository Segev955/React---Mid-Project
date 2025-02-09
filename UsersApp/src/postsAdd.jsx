import { useState, useEffect } from "react";

function PostsAddComp({ user, setPosts, posts, setShowPosts, setShowAddPosts }) {
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")

  function update() {
    const obj = {
      userId: user.id,
      id: posts.length+1,
      title: title,
      body: body
    }
    setPosts([...posts, obj ])
    cancel()
  }

  function cancel() {
    setShowAddPosts(false)
    setShowPosts(true)
  }
    
    
  return (
    <>
      <div style={{ width: "100%" }}>
        <u>Title</u>: <input type="text" onChange={e => setTitle(e.target.value)} /> <br /> 
        <u>Body</u>: <input type="text" onChange={e => setBody(e.target.value)} /> <br /> <br />
        <button onClick={cancel}>Cancel</button>
        <button onClick={update}>Add</button>
        
      </div>
    </>
  );
}

export default PostsAddComp;
