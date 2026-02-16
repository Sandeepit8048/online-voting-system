import { useEffect, useState } from "react";


function Todo() {
    const[store , setStore] = useState([]);
    const [col] = useState(["red","orange","green","blue", "gray",'yellow'])
      
    function todo(){
        setStore((e)=>{
             
            // return [...e, <button >Add </button>];
        const prevdata = col [e.length % col.length];
         return[...e , prevdata]

         })
    }
     
  





    console.log(store)
  return (
    <div>
        <button onClick={todo}>Add-Task</button>
        <p>Hi</p>
        {
            store.map((item , id) =>{
                return(
                    // <p key={id} className="text-red-800">{item}</p>
                    <button key={id} style={{background:item}} >
                       Add
                    </button>
                )
            })
        }
    </div>
  )
}

export default Todo