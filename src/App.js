
import Formdata from './Formdata';
import Displaydata from './Displaydata';
import { useState } from 'react';

function App() {

  const myApi = [
    {
      id : 1,
      name : 'Usama',
      email : 'Usama@gmail.com',
      phone : '0300000000',

    },
    {
      id : 2,
      name : 'Ahmed',
      email : 'Ahmeda@gmail.com',
      phone : '0300000000',

    },
    {
      id : 3,
      name : 'John',
      email : 'john@gmail.com',
      phone : '030011111',

    },
    {
      id : 4,
      name : 'David',
      email : 'David@gmail.com',
      phone : '030022222',

    },
    {
      id : 5,
      name : 'Ali',
      email : 'Ali@gmail.com',
      phone : '03555656',

    },
  

  ]

  const [data , setData] = useState(myApi);
  console.log(data);


  return (
    <div className="App">
      <div className='container'>
        <div className='row'>
          <div className='col-md-6'>

            <Formdata/>

          </div>
          <div className='col-md-6'>

            <Displaydata sendData = {data}/>

          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
