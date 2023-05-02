import axios from "axios"

const STU_API_URL = "http://localhost:8080/api/v1/students"

class StudentService{

    getAllStudents(){
        return axios.get(STU_API_URL)
    }

    createStudent(student){
        return axios.post(STU_API_URL, student)
    }

    

    getStudentById(studentId){
        return axios.get(STU_API_URL + '/' + studentId);
    }

    updateStudent(studentId, student){
        return axios.put(STU_API_URL + '/' +studentId, student);
    }

    deleteStudent(studentId){
        return axios.delete(STU_API_URL + '/' + studentId);
    }

}

export default new StudentService();