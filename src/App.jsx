import { useState } from 'react'
// import Home from './component/Home'
import './App.css'
import Todo from './component/Todo'
import Navbar from './component/Navbar'
import Home from '../src/component/contextApi/Home'
import {Bioprovider} from './component/contextApi/Index'
import Api from './component/contextApi/Api'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './component/features/counter/CounterSlice'

function App() {

  const count=useSelector((state)=>state.counter.value);
  const dispatch = useDispatch();
  function handleIncreamentClick(){
   
dispatch(increment());

  }

  function handleDecreamentClick(){
   
  dispatch(decrement());
  }

  return (
    <>


     {/* <Home Name="sandeep" Age="26" />  */}
     {/* <Todo/> */}
     {/* <Navbar/> */}

     {/* <Bioprovider>

     <Home/>
     <Api/>
     </Bioprovider> */}



     <button onClick={handleIncreamentClick} > +</button>
     <p>Count:{count}</p>
     <button onClick={ handleDecreamentClick }>-</button>
   
    </>
  )
}

export default App
