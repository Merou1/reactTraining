import { useState } from "react";

function Counter () {
    const [counter,setCounter] = useState(0);

    const increment = () => {
        setCounter(counter +1);
    }
    const reset = () => {
        setCounter(0);
    }
    const decrement = () => {
        setCounter(counter -1);
    }

    return(
        <div className="counter"> 
            <p> {counter}</p>
            <button className="counterButtons" onClick={increment}>Increment</button>
            <button className="counterButtons" onClick={reset}>Reset</button>
            <button className="counterButtons" onClick={counter > 0 ? decrement : reset}>Decrement</button>
        </div>
    )

}
export default Counter;