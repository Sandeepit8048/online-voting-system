// import React, {createContext} from 'react'
 

// function  Api(){
//  const UseContextdata = createContext();

//  const Userproviderdata = ({children})=>{
//    const  Class= "12 th"
//    const Section = "A"
//  }

//    return (
//     <UseContextdata.Provider value={{Class , Section}}>
//        {children}
//     </UseContextdata.Provider>
//    )
// }
 

// export default Api


import React, { useContext } from 'react'
import {Data} from './Index'
//  import { UseContextdata} from './Api'
 function Api() {
    const user = useContext(Data );
    
  return (
    <div>
        <h1>{user.Name}</h1>
        <h2>{user.Age} </h2>
      


    </div>
  )
}

export default Api