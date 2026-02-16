import React, { useContext } from 'react'
import {Data} from './Index'
//  import { UseContextdata} from './Api'
 function Home() {
    const user = useContext(Data );
  return (
    <div>
        <h1>{user.Name}</h1>
        <h2>{user.Age} </h2>
      


    </div>
  )
}

export default Home