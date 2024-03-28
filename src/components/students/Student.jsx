/* eslint-disable react/prop-types */
import style from './Students.module.css';

export function Student({ data }) {
    const valideMarks = data.marks
        .filter(n => typeof n === 'number' && n > 0 && n < 11 && Number.isInteger(n));
    const marksSum = valideMarks.reduce((t, n) => t + n, 0);
    const marksAverage = marksSum / valideMarks.length;
    const marriageStyle = style.status + ' ' + (data.isMarried ? style.married : style.notMarried);

    return (
        <li className={style.student}>
            <h2 className={style.name}>{data.name} ({data.age} years)</h2>
            <p className={marriageStyle}>Marriage status - is{data.isMarried ? '' : ' not'} married</p>
            <p className={style.info}>Marks: {valideMarks.join(', ')}</p>
            <p className={style.info}>Marks count: {valideMarks.length}</p>
            <p className={style.info}>Marks average: {marksAverage.toFixed(1)}</p>
        </li>
    );
}