import React from "react";
import './UserData.css'
function UserData(props) {
  return (
    <div className="userdata">
      {props.item.map((user) => (
        <li  key={user.id}>
        
          {user.Username}
          {console.log(user.Username)}({user.age} years old)
        </li>
      ))}
    </div>
  );
}

export default UserData;
