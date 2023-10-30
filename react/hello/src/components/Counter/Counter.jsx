import { useState } from 'react';


const Counter = () => {
    const [counter, setCounter] = useState(0);

    const addOne = () => setCounter(counter + 1);
    const subOne = () => counter > 0 && setCounter(counter - 1);

    return (
        <div>
            <h1>Contador</h1>
            <span>{counter}</span>
            <button onClick={addOne}>Incrementar</button>
            <button onClick={subOne}>Decrementar</button>
        </div>
    );
};

export default Counter;