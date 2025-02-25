import { useState } from 'react';


import '@/styles/reset.scss';
import '@/styles/global.scss';
import styles from './App.module.scss';
import img from '@/assets/Rectangle 1899 (1).png';
import img2 from '@/assets/image 2 (1).jpeg'

const App = () => {
    const [counter, setCounter] = useState<number>(0);
    const useFetch = () => {
        fetch('https://free-to-play-games-database.p.rapidapi.com/api/games', {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'x-rapidapi-key': 'e907fafc73msh35611efb5c61a96p17bf72jsn1ae85e6a91a6',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        })
            .then(result => result.json(),
                reject => console.log(reject))
            .then(result => console.log(result))
    }




    return (
        <div>
            <button className={styles.button} onClick={() => setCounter(value => value + 1)}>+</button>
            <button onClick={() => setCounter(value => value - 1)}>-</button>
            <button className={styles.button} onClick={useFetch}>Fetch</button>
            <div>{counter}</div>
           
            <img src={img} alt="" />
          
            <img src={img2} alt="" />
        </div>);
}

export default App;