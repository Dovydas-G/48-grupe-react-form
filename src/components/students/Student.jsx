import style from './Students.module.css';

export function Student() {
    return (
        <li className={style.student}>
            <h2 className={style.name}>Name (age years)</h2>
            <p className={style.status}>Marriage status - is (not) married</p>
            {/* <p className={style.status + ' ' + style.married}>Marriage status - is (not) married</p> */}
            {/* <p className={style.status + ' ' + style.notMarried}>Marriage status - is (not) married</p> */}
            <p className={style.info}>Marks: 1, 2, 3...</p>
            <p className={style.info}>Marks count: 5</p>
            <p className={style.info}>Marks average: 5</p>
        </li>
    );
}