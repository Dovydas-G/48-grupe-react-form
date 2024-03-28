/* eslint-disable react/prop-types */
import style from './Students.module.css';
import { Student } from "./Student";

export function StudentList({data}) {
    return (
        <ul className={style.studentList}>
            {data.map((student, index) => <Student key={index} data={student}/>)}
        </ul>
        
    );
}