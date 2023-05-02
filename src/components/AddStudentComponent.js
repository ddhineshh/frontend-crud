import React, { useState ,useEffect} from 'react'
import {Link, useNavigate , useParams } from 'react-router-dom';
import StudentService from '../services/StudentService'

const AddStudentComponent = () => {

    const [name, setName] = useState('')
    const [dept, setDept] = useState('')
    const [email, setEmail] = useState('')
    const history = useNavigate();
    const {id} = useParams();

    const saveOrUpdateStudent = (e) => {
        e.preventDefault();

        const student = {name, dept, email}


        if(id){
            StudentService.updateStudent(id, student).then((response) => {
                history.push('/students')
            }).catch(error => {
                console.log(error)
            })

        }else{
            StudentService.createStudent(student).then((response) =>{

                console.log(response.data)
    
                history.push('/students');
    
            }).catch(error => {
                console.log(error)
            })
        }
        
    }

    useEffect(() => {

        StudentService.getStudentById(id).then((response) =>{
            setName(response.data.name)
            setDept(response.data.dept)
            setEmail(response.data.email)
        }).catch(error => {
            console.log(error)
        })
    }, [])

    const title = () => {

        if(id){
            return <h2 className = "text-center">Update Student</h2>
        }else{
            return <h2 className = "text-center">Add Student</h2>
        }
    }



    return (
        <div>

            <br /><br />
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        {
                            title()
                        }
                        <div className="card-body">
                            <form>
                                <div className="form-group mb-2">
                                    <label className="form-label"> Name:</label>
                                    <input
                                        type="text"
                                        placeholder="Enter name"
                                        name="name"
                                        className="form-control"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className="form-group mb-2">
                                    <label className="form-label"> Department :</label>
                                    <input
                                        type="text"
                                        placeholder="Enter department"
                                        name="dept"
                                        className="form-control"
                                        value={dept}
                                        onChange={(e) => setDept(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className="form-group mb-2">
                                    <label className="form-label"> Email Id :</label>
                                    <input
                                        type="email"
                                        placeholder="Enter email Id"
                                        name="email"
                                        className="form-control"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <button className="btn btn-success" onClick={(e) => saveOrUpdateStudent(e)} >Submit </button>
                                <Link to="/students" className="btn btn-danger"> Cancel </Link>
                            </form>

                        </div>
                    </div>
                </div>

            </div>



        </div>


    
  )
}

export default AddStudentComponent