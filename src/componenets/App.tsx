import  { useState } from 'react';

const App = () => {
    const [counter, setCounter] = useState<number>(0);

    return (
        <div>
            <button onClick={() => setCounter(value => value + 1)}>+</button>
            <button onClick={() => setCounter(value => value - 1)}>-</button>
            <div>{counter}</div>
        </div>);
}

export default App;