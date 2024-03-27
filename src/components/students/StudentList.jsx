import style from './Students.module.css';
import { Student } from "./Student";

export function StudentList() {
    return (
        <ul className={style.studentList}>
            <Student />
            <Student />
            <Student />
            <Student />
        </ul>
    );
}