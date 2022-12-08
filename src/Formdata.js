import React, {useState} from 'react'

function Formdata(props) {


  const empty = {
    id : null,
    name : '',
    email : '',
    phone : '',

  };

  const [handle,setHandle] = useState(empty);
  const handleInput = (event) =>{
    const {name , value} = event.target;
    setHandle({...handle,[name]:value});
    console.log(handle);
  }
  return (
    <div>
        <h1 className='text-center display-3 mt-3'>Enter form data </h1>
        <form onSubmit={(e)=>{
          e.preventDefault();
          props.myuser(handle);
          setHandle(empty);
        }}
        >
            <label>Name</label>
            <input onChange={handleInput} type="text" className = "form-control shadow" name = "name" value = {handle.name}/>

            <label>Email</label>
            <input onChange={handleInput} type="email" className = "form-control shadow" name = "email" value = {handle.email} />

            <label>Phone</label>
            <input onChange={handleInput} type="number" className = "form-control shadow" name = "phone" value = {handle.phone}/>

            <input  type= "submit" className='btn btn-outline-primary mt-5' name = "phone" />

        </form>
      
    </div>
  )
}

export default Formdata
