import { useState } from 'react';
import style from './Basketball.module.css';
import { formatBasketballNumber } from '../../utils/formatBasketballNumber';

export function Basketball() {
    const [score1, setScore1] = useState(0);
    const [score2, setScore2] = useState(0);

    

    return (
            <div className={style.basketball}>
                <div className={style.screen}>{formatBasketballNumber(score1, 2)}:{formatBasketballNumber(score2, 2)}</div>
                <div className={style.controls}>
                    <div className={style.team}>
                        <button onClick={() => setScore1(score1 + 1)} className={style.btn}>+1</button>
                        <button onClick={() => setScore1(score1 + 2)} className={style.btn}>+2</button>
                        <button onClick={() => setScore1(score1 + 3)} className={style.btn}>+3</button>
                    </div>
                    <div className={style.team}>
                        <button onClick={() => setScore2(score2 + 1)} className={style.btn}>+1</button>
                        <button onClick={() => setScore2(score2 + 2)} className={style.btn}>+2</button>
                        <button onClick={() => setScore2(score2 + 3)} className={style.btn}>+3</button>
                    </div>
                </div>
            </div>
    );
}