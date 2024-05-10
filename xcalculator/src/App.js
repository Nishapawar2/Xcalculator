import { useState } from "react";
import "./App.css";

function App() {
  const [inputVal,setInputVal]=useState("");
  const onClickHandler=(event)=>{
    setInputVal(inputVal.concat(event.target.value));
  }

  const onClickClear=()=>{
    setInputVal("");
  }

  const onClickCalculate=()=>{
    setInputVal(eval(inputVal).toString())
  }
  return (
    <div className="App">
      <h1>React Calculator</h1>
      <input type="text" value={inputVal} className="inputText"/>
      <div className="buttons">
        <button value="7" onClick={onClickHandler}>7</button>
        <button value="8" onClick={onClickHandler}>8</button>
        <button value="9" onClick={onClickHandler}>9</button>
        <button value="+" onClick={onClickHandler}>+</button>
      </div>

      <div className="buttons">
        <button value="4" onClick={onClickHandler}>4</button>
        <button value="5" onClick={onClickHandler}>5</button>
        <button value="6" onClick={onClickHandler}>6</button>
        <button value="-" onClick={onClickHandler}>-</button>
      </div>

      <div className="buttons">
        <button value="1" onClick={onClickHandler}>1</button>
        <button value="2" onClick={onClickHandler}>2</button>
        <button value="3" onClick={onClickHandler}>3</button>
        <button value="*" onClick={onClickHandler}>*</button>
      </div>

      
      <div className="buttons">
        <button value="C" onClick={onClickClear}>C</button>
        <button value="0" onClick={onClickHandler}>0</button>
        <button value="=" onClick={onClickCalculate}>=</button>
        <button value="/" onClick={onClickHandler}>/</button>
      </div>

    </div>
  );
}

export default App;
