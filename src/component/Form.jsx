import React, { useEffect, useState } from 'react'

function Form() {
    const [data , setDate] = useState({
        name: "",
        age: "",
        number:"",
         email:"",
});
       const [response , setResponse] = useState([])
        
       
    useEffect(()=>{
    const savedata=JSON.parse (localStorage.getItem("response")) || []
    setResponse(savedata);

    
  },[]);

  console.log(response);

     function changehandle(el){
       const {name, value} = el.target;
              setDate((e)=>({
              ...e ,
              [name]:value,

              }));
     }
     
     function handleSubmit(e){
       e.preventDefault();
       
       const newdata = [...response, data];
       setResponse(newdata);
       localStorage.setItem("response" , JSON.stringify(newdata));

       setDate({
        name:'',
        age:'',
        number: '',
        email:'',
       });

     }



  return (
    <>
     <form action="submit" onSubmit={handleSubmit} >
        <label htmlFor="">Name</label>
        <input type="text" placeholder='name' name='name' value={data.name} onChange={changehandle} />
        <label htmlFor="">Age</label>
        <input type="number" placeholder='age'name='age' value={data.age} onChange={changehandle} />
        <label htmlFor="">Email</label>
        <input type="email" placeholder='abc @gmail.com' name='email' value={data.email} onChange={changehandle}  />
        <label htmlFor="">Phone/Number</label>
        <input type="number" placeholder='+91---' name='number' value={data.number}  onChange={changehandle}  />
        <button type='submit'>Submit</button>
     </form>
     {
        response.map((item, id)=>{
            return(
                <div key={id}>
                    {item.name}----{item.age}---{item.email}---{item.number}
                </div>
            )
        })
     }
    </>
  )
}

export default Form