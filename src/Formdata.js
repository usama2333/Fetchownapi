import React from 'react'

function Formdata() {
  return (
    <div>
        <h1 className='text-center display-3 mt-3'>Enter form data </h1>
        <form>
            <label>Name</label>
            <input type="text" className = "form-control shadow" />

            <label>Email</label>
            <input type="email" className = "form-control shadow" />

            <label>Phone</label>
            <input type="text" className = "form-control shadow" />

            <input  type= "submit" className='btn btn-outline-primary mt-5' />

        </form>
      
    </div>
  )
}

export default Formdata
