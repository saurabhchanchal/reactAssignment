import React from "react";
import "./counter.css";
import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(10)

    function handleIncrease() {
        setCount(count+1);
    }
    function handleDecrease() {
        if(count > 0) {
            setCount(count-1);
        }
    }
    function handleDouble() {
        setCount(count*2);
    }

    
    
    return (
        <div>
            <h1>Counter</h1>
            <h3 className= {`${count %2 === 0 ? "green" : "red"}`}>{count}</h3>
            <button onClick={handleIncrease}>Increase</button>
            <button onClick={handleDecrease}>Decrease</button>
            <button onClick={handleDouble}>Double</button>
        </div>
    )
}

export {Counter};