import { useState } from "react";
import "./App.css";

function App() {
  const [current, setCurrent] = useState("");
  const [previous, setPrevious] = useState("");
  const [operand, setOperand] = useState("");

  const handleNumber = (event) => {
    setCurrent((prev) => prev + event.target.value);
  };

  const handleOperand = (event) => {
    setOperand(event.target.value);
    if (current === "") return;
    if (previous !== "") calculate();
    else {
      setPrevious(current);
      setCurrent("");
    }
  };

  const calculate = () => {
    let res;
    switch (operand) {
      case "+":
        res = String(parseFloat(previous) + parseFloat(current));
        break;
      case "-":
        res = String(parseFloat(previous) - parseFloat(current));
        break;
      case "*":
        res = String(parseFloat(previous) * parseFloat(current));
        break;
      case "/":
        if(current===0)
          return;
        else
        res = String(parseFloat(previous) / parseFloat(current));
        break;
      default:
        return;
    }
    setPrevious(res);
    setCurrent("");
    setOperand("");
  };

  const onClickClear = () => {
    setPrevious("");
    setCurrent("");
    setOperand("");
  };


  return (
    <div className="App">
      <h1>React Calculator</h1>
      <input type="text" value={`${previous}${operand}${current}`} className="inputText" />
      <div className="buttons">
        <button value="7" onClick={handleNumber}>
          7
        </button>
        <button value="8" onClick={handleNumber}>
          8
        </button>
        <button value="9" onClick={handleNumber}>
          9
        </button>
        <button value="+" onClick={handleOperand}>
          +
        </button>
      </div>

      <div className="buttons">
        <button value="4" onClick={handleNumber}>
          4
        </button>
        <button value="5" onClick={handleNumber}>
          5
        </button>
        <button value="6" onClick={handleNumber}>
          6
        </button>
        <button value="-" onClick={handleOperand}>
          -
        </button>
      </div>

      <div className="buttons">
        <button value="1" onClick={handleNumber}>
          1
        </button>
        <button value="2" onClick={handleNumber}>
          2
        </button>
        <button value="3" onClick={handleNumber}>
          3
        </button>
        <button value="*" onClick={handleOperand}>
          *
        </button>
      </div>

      <div className="buttons">
        <button value="C" onClick={onClickClear}>
          C
        </button>
        <button value="0" onClick={handleNumber}>
          0
        </button>
        <button value="=" onClick={calculate}>
          =
        </button>
        <button value="/" onClick={handleOperand}>
          /
        </button>
      </div>
    </div>
  );
}

export default App;
