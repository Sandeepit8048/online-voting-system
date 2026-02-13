// import React, { useEffect, useState } from 'react'

// function Home() {
//   const[data, setData] = useState([]);
  
//  async function apifetch () {
//     let store = await fetch ("https://jsonplaceholder.typicode.com/todos/")
//      let response = await store.json();
    
//      console.log(response)
    
//      setData(response);

//   }

  
//   useEffect(()=>{
    
//     apifetch();
//   }, [])

//   return (
//     <div> 
//       {
//         data.map((item , id)=>{
//           return(
//            <div key={id}>
//              <p>title:{item.title}</p>
//              <p>{item.id}</p>
//              <p>{item.userId}</p>

//            </div>
            
//           )
//         })
//       }
     
//     </div>
//   )
// }

// export default Home




//used to props


import React, { useState }  from 'react'
  
function Home(props) {
   const [data , setData] = useState({

     Name: props.name,
     age: props.age
   })
  function abc(){
    setData({
      Name: "Sandeep",
      age: "12"
    });
  }



  return (
    
    <div>
        <p>{data.Name}</p>
        <p>{data.age}</p>
        <button onClick={abc}>Btn</button>
    </div>
  )
}

export default Home