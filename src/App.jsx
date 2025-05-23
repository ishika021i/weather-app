import { useState } from 'react'
import './App.css'

function App() {
  const [value,setvalue] = useState(0);

  return (
    <>
      <h1>Count {value}</h1>
      <button onClick ={
       () => {
        setvalue(value +1);
       }
      
       }>ADD </button>
      <button onClick ={
       () => {
        setvalue(value +3);
       }
      
       }>ADD 3 </button>
      <button onClick ={
       () => {
        setvalue(0);
       }
      
       }>RESET </button>
     <button onClick ={
       () => {
        setvalue(value -3);
       }
      
       }>SUB 3 </button>
     <button onClick ={
       () => {
        setvalue(value -1);
       }
      
       }>SUB </button>
       <button onClick ={
       () => {
        setvalue(value +2);
       }
      
       }>ADD 2 </button>
    </>

  )
}

export default App