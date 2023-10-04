import {useState} from "react"
import './App.css';

function App() {
  let [count,setCount]=useState(0)
  const add=()=>{
    if(count<20){
      setCount(count+1)
    }
    console.log(count)
  }
  const remove=()=>{
    if(count >0){
      setCount(count-1)
    }
    console.log(count)
  }
  return (
    <div className="App">
      <h1>Count :{count}</h1>
      <button
      onClick={add}
      >Add</button>
      <button
      onClick={remove}
      >Remove</button>
    </div>
  );
}

export default App;
