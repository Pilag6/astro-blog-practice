import { useState } from 'react'
import './ReactComponent.css'
 
export default function App() {
  const [counter, setCounter] = useState(0);
 
  //increase counter
  const increase = () => {
    setCounter(counter + 1);
  };
 
  //decrease counter
  const decrease = () => {
    setCounter(counter - 1);
  };
 
  //reset counter 
  const reset = () =>{
    setCounter(0)
  }
 
  return (
    <div className="counter">
      <h1>React Counter</h1>
      <span className="counter__output">{counter}</span>
      <div className="btn__container">
        <button className="control__btn" onClick={increase}>+</button>
        <button className="reset" onClick={reset}>Reset</button>
        <button className="control__btn" onClick={decrease}>-</button>
      </div>
    </div>
  );
}