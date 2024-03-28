/* eslint-disable react/prop-types */
import { useState } from 'react';
import style from './List.module.css';
import { Link } from 'react-router-dom';


export function VegyItem ({ vegetablesObj }) {
    const {name, price, unit} = vegetablesObj;
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

    function hrefConstructor(data) {

        const dataToLowerCase = data.toLowerCase();

        const alphabetObj = {
                            ą: 'a',
                            č: 'c',
                            ę: 'e',
                            ė: 'e',
                            į: 'i',
                            š: 's',
                            ų: 'u',
                            ū: 'u',
                            ž: 'z',
        }

        let str = '';

        for (let i = 0; i < dataToLowerCase.length; i++) {
            const alphabetBeginning = 97;
            const alphabetEnd = 122;
            const letterLt = alphabetObj[dataToLowerCase[i]];
            if (letterLt) {
                str += letterLt;
            }else {
                if (dataToLowerCase.charCodeAt(i) >= alphabetBeginning && dataToLowerCase.charCodeAt(i) <= alphabetEnd) {
                    str += dataToLowerCase[i];
                }
            } 
        }

        return '/vegetables/' + str;

    }

    return (
        <li className={style.vegy}>
            <span className={style.vegyTitle}>{name} </span>
            <div className={style.controls}>
                <button onClick={handleCountMinus} className={style.btn}>-</button>
                <span className={style.count}>{count}{unit}</span>
                <button onClick={handleCountPlus} className={style.btn}>+</button>
            </div>
            <span className={style.totalPrice}>Total: {(price * count).toFixed(2)}$</span>
            <Link to={hrefConstructor(name)}>Read more</Link>
        </li>
    )
}