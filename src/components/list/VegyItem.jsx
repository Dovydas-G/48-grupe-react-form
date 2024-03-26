/* eslint-disable react/prop-types */
import { useState } from 'react';
import style from './List.module.css';
import { Link } from 'react-router-dom';


export function VegyItem ({ dataObj }) {
    const {name, price} = dataObj;
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

        const dataToStr = (typeof data === 'string') ? data : '' + data;

        const dataToLowerCase = dataToStr.toLowerCase();

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
            const letterLt = alphabetObj[dataToLowerCase[i]];
            if (letterLt) {
                str += letterLt;
            }else {
                if (dataToLowerCase.charCodeAt(i) >= 97 && dataToLowerCase.charCodeAt(i) <= 122) {
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
                <span className={style.count}>{count}Kg</span>
                <button onClick={handleCountPlus} className={style.btn}>+</button>
            </div>
            <span className={style.totalPrice}>Total: {(price * count).toFixed(2)}</span>
            <Link to={hrefConstructor(name)}>Read more</Link>
        </li>
    )
}