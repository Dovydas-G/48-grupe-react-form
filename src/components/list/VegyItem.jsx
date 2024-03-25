/* eslint-disable react/prop-types */
import { useState } from 'react';
import style from './List.module.css';

export function VegyItem ({ title, total, price }) {
    const minVegetablesAmount = 0;
    const maxVegetablesAmount = 10;
    const [count, setCount] = useState(1);

    function handleCountMinus() {
        if (count > minVegetablesAmount) {
            setCount(count - 1);
        }
    }

    function handleCountPlus() {
        if (count < maxVegetablesAmount) {
            setCount(count + 1);
        }
    }

    

    return (
        <li className={style.vegy}>
            <span className={style.vegyTitle}>{title} {price.toFixed(2)}$</span>
            <div className={style.controls}>
                <button onClick={handleCountMinus} className={style.btn}>-</button>
                <span className={style.count}>{count}Kg</span>
                <button onClick={handleCountPlus} className={style.btn}>+</button>
            </div>
            <span className={style.totalPrice}>Total: {(total * count).toFixed(2)}$</span>
        </li>
    )
}