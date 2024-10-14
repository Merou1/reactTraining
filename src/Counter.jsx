import { useState } from "react";

function Counter () {
    const [counter,setCounter] = useState(0);

    const increment = () => {
       /* setCounter(counter +1);
        setCounter(counter +1);
        setCounter(counter +1);
        won't work when i'll click increment
        it'll increment buy 1 not by 3 
        that's why we should at any time we can
        use updater function (pass a callback fct
        inside the setter not what to do directly
        but a callback fct that wrapps what to do inside it
        )
        */
       setCounter(c => c+1) 
       setCounter(c => c+1) 
       setCounter(c => c+3) //now it'll increment by 11 after each click

    }
    const reset = () => {
        setCounter(0);
    }
    const decrement = () => {
        setCounter(c => c-1);
        setCounter(c => c-1);
        setCounter(c => c-3);
//everytime you need the previous state to have the current state hit bash dir c++ kula mera khas tb9a endeq lvalue d c l9dima mashy f kula mera kayweli 0 khas tkhdem updater fcts


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