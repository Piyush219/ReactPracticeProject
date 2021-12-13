import React, { useState } from "react";
import Warning from "./Usercomponents/Warning";
//import UserList from "./Usercomponents/UserLists";
import './Userdetails.css'
function Userdetails(props) {

  const [isValid, setIsValid] = useState('')
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");

  const onNameChangeHandler = (event) => {
    //console.log(`UserTarget: ${event.target.value}`);
    setUserName(event.target.value);
  };

  const onAgeChangeHandler = (event) => {
    //console.log(`AgeTarget: ${event.target.value}`);
    setUserAge(event.target.value);
  };

  const onSubmitHandler = (event) => {
        event.preventDefault();
        if(userName.trim().length === 0 || userAge.trim().length===0){
            setIsValid({
              title:'Invalid Input',
              message:'Please Enter valid Name and Age'
            })
            return;
        }
        if(+userAge < 1){
            setIsValid({
              title:'Invalid Input',
              message:'Please Enter age>0'
            })
            return;
        }
        const UserData =
        {
            Username: userName,
            age: userAge,
        }
        console.log(`UserData: ${UserData}`);
        props.onSubmitData(UserData);
        setUserName("");
        setUserAge("");
  };

  return (
    <form on onSubmit={onSubmitHandler}>
        {isValid && <Warning title={isValid.title} message = {isValid.message} setIsValid={setIsValid}/>}
      <div>
        <label>Username: </label>
        <input type="text" value ={userName} onChange={onNameChangeHandler} /><br/>
        <label>Age (Years): </label>
        <input type="number" value ={userAge} onChange={onAgeChangeHandler} /><br/>
        <button className="button" type='submit'>Add User</button>
      </div>
      {/* <UserList onAddUser={UserData}/> */}
    </form>
  );
}

export default Userdetails;
