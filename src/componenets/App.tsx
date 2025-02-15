import  { useState } from 'react';
import './App.scss';

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