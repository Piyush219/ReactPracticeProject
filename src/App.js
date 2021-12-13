import React, {useState} from "react";
import UserList from "./Userdetails/Usercomponents/UserLists";
import UserData from "./Userdetails/UserData";

function App() {



  const DummyData =[
    {
      id: "e1",
      Username: "Max",
      age: '23',
    }]
  const [Data, setNewData] = useState(DummyData)
  const newUserDataHandler = (NewData) =>{
    setNewData((prevState) => {
      return [NewData,...prevState]
    })
  }
  return (
    <div>

      <UserList newUserData = {newUserDataHandler}/>
      {/* {console.log(`DataApp ${Data.username}`)} */}
      <UserData item ={Data}/>
    </div>
  );
}

export default App;
