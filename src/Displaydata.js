import React from 'react'

function Displaydata(props) {
  return (
    <div>
        <table className='table table-bordered mt-5'>
            <thead>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
            </thead>

            <tbody>
                {
                    props.sendData.map((item)=>
                    <tr>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.phone}</td>
                    </tr>
                    )
                }
            </tbody>

        </table>
      
    </div>
  )
}

export default Displaydata
