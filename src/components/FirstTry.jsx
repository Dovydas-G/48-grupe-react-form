import { useState } from "react";

export function FirstTry() {
    const [count, setCount] = useState(0);

    function increment() {
        setCount(count + 1);
    }

    function decrement() {
        setCount(count - 1);
    }

    return (
        <>
            <h1>Hooks FTW</h1>
            <div className="counter">
                <button onClick={decrement}>-</button>
                <span>{count}</span>
                <button onClick={increment}>+</button>
            </div>
        </>
    );
}