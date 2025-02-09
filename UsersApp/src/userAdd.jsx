import { useState, useEffect } from "react";

function UserAddComp({ users, setUsers, setShowAddUser }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function update() {
    const obj = {
      id: users.length + 1,
      name: name,
      email: email,
      address: {
        street: "",
        city: "",
        zipcode: "",
      },
    };
    setUsers([...users, obj]);
    cancel();
  }

  function cancel() {
    setShowAddUser(false);
  }

  return (
    <>
      <div style={{ width: "100%" }}>
        <u>Name</u>:{" "}
        <input type="text" onChange={(e) => setName(e.target.value)} /> <br />
        <u>Email</u>:{" "}
        <input type="text" onChange={(e) => setEmail(e.target.value)} /> <br />
        <br />
        <button onClick={cancel}>Cancel</button>
        <button onClick={update}>Add</button>
      </div>
    </>
  );
}

export default UserAddComp;
