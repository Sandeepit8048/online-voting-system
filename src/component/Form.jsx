import React from 'react'

function Form() {
  return (
    <>
    <form action="">
        <label htmlFor="">Name</label>
        <input type="text" placeholder='Name' /><br />
         <label htmlFor="">Number</label>
        <input type="number" placeholder='+91-957272**' /> <br />
        <label htmlFor="">E-mail</label>
        <input type="email" placeholder='abc@gmail.com' /> <br />
        <label htmlFor="file">File</label>
        <input type="submit" value="upload file" />
         
    </form>
    </>
  )
}

export default Form