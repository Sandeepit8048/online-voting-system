import { useState } from "react";


function Todo() {
    const[store , setStore] = useState([]);
      
    function todo(){
        setStore((e)=>{
            return [...e, `task $(e.length+1)`];
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
                    <p key={id}>{item}</p>
                )
            })
        }
    </div>
  )
}

export default Todo