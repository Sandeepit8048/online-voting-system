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


import React from 'react'

function Home(props) {
   console.log(props);
  return (
    <div >
       <p>{props.Name}</p>
        <p>{props.Age}</p>
    </div>
  )
}

export default Home