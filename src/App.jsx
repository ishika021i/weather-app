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
        setvalue(value -1);
       }
      
       }>SUB </button>
    </>
  )
}

export default App