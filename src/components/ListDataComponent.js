import React, { useEffect, useState } from 'react'
import StudentService from '../services/StudentService'
import { Link } from 'react-router-dom'

const ListDataComponent = () => {

    const [students, setstudents] = useState([])

    useEffect(()=>{
        getAllStudents()
    },[])

    const getAllStudents = () =>{
        StudentService.getAllStudents().then((response) =>{
            setstudents(response.data)
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
        })
    }

    const deleteStudent = (studentId) =>{
        StudentService.deleteStudent(studentId).then((response)=>{
            getAllStudents()
        }).catch(error =>{
            console.log(error);
        })
    }
  return (
    <div className='container'>
        <h2 className='text-center'>List of Students</h2>
        <Link to = "/add-student" className='btn btn-primary mb-3'>Add Student</Link>
        <table className='table table-bordered table-stripped'>
            <thead>
            <th>Student Id</th>
            <th>Student Name</th>
            <th>Student Department</th>
            <th>Student Email</th>
            <th>Actions</th>
            </thead>
            <tbody>
                {
                    students.map(
                        student =>
                        <tr key={student.id}>
                            <td>{student.id}</td>
                            <td>{student.name}</td>
                            <td>{student.dept}</td>
                            <td>{student.email}</td>
                            <td>
                            <Link className="btn btn-info" to={`/edit-student/${student.id}`} >Update</Link>
                                    <button className = "btn btn-danger" onClick = {() => deleteStudent(student.id)}
                                    style = {{marginLeft:"30px"}}> Delete</button>
                            </td>
                        </tr>
                    )
                }
            </tbody>
        </table>


    </div>
  )
}

export default ListDataComponent