import React, {useState} from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);
    const plus = () => setCount(count + 1);
    const minus = () => setCount(count - 1);
    // const arr = useState(0);
    // const count = arr[0];
    // const setCount = arr[1];
    return (
        <div>
            <div>{ count }</div>
            <button onClick={plus}>+</button>
            <button onClick={minus}>-</button>
        </div>
    );
};

export default Counter;