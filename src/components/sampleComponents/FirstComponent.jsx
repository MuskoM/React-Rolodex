import {useState} from 'react'

let FirstComponent = () => {
    
    let [number,setNumber] = useState(1)

  return (
    <div className="FirstComponent">
      <p>I'm a {number >= 0 ? "positive" : " negative"} number {number} in function?</p>
      <div className="ControlButtons">
      <button onClick={()=>{setNumber(number+1)}}>Increment</button>
      <button onClick={()=>{setNumber(number-1)}}>Decrement</button>
      </div>
    </div>
  );
};

export default FirstComponent;
