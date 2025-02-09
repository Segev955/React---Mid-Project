import { useState, useEffect } from "react";

function OtherDataComp({ user, setUserr }) {
    
    
  return (
    <>
      <div style={{ border: `1px solid gray`, width: "100%" }}>
        
        Street: <input type="text" defaultValue={user.address.street} onChange={e => setUserr({...user,  address:
         {...user.address, street: e.target.value}})} /> <br />
        City: <input type="text" defaultValue={user.address.city} onChange={e => setUserr({...user, address:
         {...user.address, city: e.target.value}})} /> <br />
        Zip Code: <input type="text" defaultValue={user.address.zipcode} onChange={e => setUserr({...user, address:
         {...user.address, zipcode: e.target.value}})} /> <br />
      </div>
    </>
  );
}

export default OtherDataComp;
