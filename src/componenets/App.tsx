import  { useState } from 'react';
import styles from  './App.module.scss';
import img from '@/assets/Rectangle 1899 (1).png';
import img2 from '@/assets/image 2 (1).jpeg'

const App = () => {
    const [counter, setCounter] = useState<number>(0);

    return (
        <div>
            <button className={styles.button} onClick={() => setCounter(value => value + 1)}>+</button>
            <button  onClick={() => setCounter(value => value - 1)}>-</button>
            <div>{counter}</div>
            <div>{img}</div>
            <img src={img} alt="" />
            <div>{img2}</div>
            <img src={img2} alt="" />
        </div>);
}

export default App;