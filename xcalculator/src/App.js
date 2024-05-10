import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [current, setCurrent] = useState("");
  const [previous, setPrevious] = useState("");
  const [operator, setOperator] = useState("");
  const [equation,setEquation]=useState("");
  const [buttonDis,setButtonDis]=useState(false);

  useEffect(()=>{
    if(previous!=="" && current!=="" && operator !==""){
      setButtonDis(true);
    }
  },[current])
  const handleNumber = (event) => {
    setCurrent((prev) => prev + event.target.value);
    setEquation(equation.concat(event.target.value));
   
  };

  const handleoperator = (event) => {
    setOperator(event.target.value);
    setEquation(equation.concat(event.target.value));
    if (current === "") return;
    // if (previous !== "") calculate();
  
    else {
      setPrevious(current);
      setCurrent("");
    }
  };

  const calculate = () => {
    if(buttonDis){
    let res;
    switch (operator) {
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
        if(previous==="0" && current==="0")
          res="NaN";
        else if(current==="0")
          res="NaN";
        res = String(parseFloat(previous) / parseFloat(current));
        break;
      default:
        return;
    }
  
    setPrevious(res);
    setCurrent("");
    setOperator("");
  }
  };

  const onClickClear = () => {
    setPrevious("");
    setCurrent("");
    setOperator("");
    setEquation("");
    setButtonDis(false)
  };


  return (
    <div className="App">
      <h1>React Calculator</h1>
      <input type="text" value={equation} className="inputText" />
      <div>{previous}</div>
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
        <button value="+" onClick={handleoperator}>
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
        <button value="-" onClick={handleoperator}>
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
        <button value="*" onClick={handleoperator}>
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
        <button value="/" onClick={handleoperator}>
          /
        </button>
      </div>
    </div>
  );
}

export default App;
