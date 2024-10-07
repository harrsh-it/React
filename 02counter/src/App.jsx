 import { useState,} from 'react';
 import './App.css'

function App() {

  const addValue =()=>{
    setCounter(counter + 1)
  }

  const removeValue =()=>{
    if(counter >0){
    setCounter(counter - 1);
    }
  }

  let [counter, setCounter] = useState(0)

  return (
    <>
     <h1>Hi, This is Hook</h1>
     <h2>counter value : {counter}</h2>

     <button
     onClick={addValue}
     >Add Value</button>

     <br />

     <button
     onClick={removeValue}
     >Remove Value</button>

    </>
  )
}

export default App
