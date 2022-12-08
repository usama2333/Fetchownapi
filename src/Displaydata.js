import React from 'react'

function Displaydata(props) {
  return (
    <div>
        <table className='table table-bordered m-5 '>
            <thead>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Delete</th>
            </thead>

            <tbody>
                {
                    props.sendData.map((item)=>
                    <tr>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.phone}</td>
                        <td onClick={()=>props.del(item.id)} className='btn btn-outline-danger ml-3'>Delete</td>
                    </tr>
                    )
                }
            </tbody>

        </table>
      
    </div>
  )
}

export default Displaydata
