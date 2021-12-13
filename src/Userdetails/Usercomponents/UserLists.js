import Userdetails from "../Userdetails";
import './UserList.css'
function UserList(props) {


  const onSubmitDataHandler = (AddUserData) => {
    const AddingData = { ...AddUserData, 
        id: Math.random().toString()
     };
    console.log(`AddingData: ${AddingData.id}`)
        props.newUserData(AddingData)
  };


  //console.log(`AddingData: ${AddingData}`)

  return (
    <div className="userlist">
      <Userdetails onSubmitData={onSubmitDataHandler} />
    </div>
  );
}
export default UserList;
