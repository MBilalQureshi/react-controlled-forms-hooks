import React, { useState } from "react";

export default function HooksCounter(props) {
    // count: a new state property
    // setCount: a method to update count
    // useState(0): initialize count to 0
    const [count, setCount] = useState(0);

    return (
        <div className="greeting">
        <h1>
            Hello {props.name}!
            I'm a functional component with hooks!
        </h1>
        <h2>You clicked {count} times</h2>
        <button onClick={
            //IMP: here prevState is not used but count that is actually prev value AND PASSING IT IN a functions is best
            () => setCount(count => count + 1)
        }>
            Increment Counter
        </button>
        </div>
    );
}