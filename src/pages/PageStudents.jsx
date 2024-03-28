import { useEffect, useState } from "react";
import { StudentList } from "../components/students/StudentList";
import { StudentsNoData } from "../components/students/StudentsNoData";




export  function PageStudents() {
    // const [count, setCount] = useState(0)
    const [studentData, setStudentData] = useState([]);
    const dataURL = 'https://raw.githubusercontent.com/front-end-by-rimantas/48-grupe-react-form/master/public/students.json';
    
    useEffect(() => {
      fetch(dataURL)
        .then(res => res.json())
        .then(data => setStudentData(data.students))
        .catch(e => console.error(e))
    }, []);
   

    
    return (
        <>
            <h1 className="page-title">Students</h1>
            <p className="page-description">Students attending this class:</p>
            {studentData.length === 0 ? <StudentsNoData/> : <StudentList data ={studentData}/>}
        </>
    )
}