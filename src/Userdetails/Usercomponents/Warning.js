import'./Warning.css'
function Warning(props){
    const ButtonHandler = () =>{
      props.setIsValid(false)
    }
    return(
    <div className='backdrop'>
      <div className='body'>
        {/* {alert('Invalid Input')} */}
        <h2 className='inpt1'>{props.title}</h2>
        <h4 className='inpt2'>{props.message}</h4>
        <button className="btn" type="button" onClick={ButtonHandler}>Okay</button>
    </div>
    </div>
    )
}

export default Warning;