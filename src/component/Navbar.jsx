import React from 'react'
import Form from './Form'
function Navbar() {
  return (
    <>
    <div className='flex justify-between items-center py-2  bg-gray-200  '>
        <h2>Logo</h2>

            <ul className='flex space-x-6  py-1'> 
             <li>Home</li>
             <li>Save</li>
             <li>Form</li>
            </ul>

    </div>
               <Form/>
    </>
  )
}

export default Navbar