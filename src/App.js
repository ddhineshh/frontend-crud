import './App.css';
import AddStudentComponent from './components/AddStudentComponent';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListDataComponent from './components/ListDataComponent';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'


function App() {
  return (
    
    <>
      <Router>
        <HeaderComponent />
        <div className= "container">
          <Routes>
              <Route exact path = "/" element = {<ListDataComponent />}></Route>
              <Route exact path = "/students" element = {<ListDataComponent />}></Route>
              <Route exact path = "/add-student" element = {<AddStudentComponent />} ></Route>
              <Route exact path = "/edit-student/:id" element = {<AddStudentComponent />}></Route>
            </Routes>
        </div>
        </Router>
      
    </>
  
  );
}

export default App;
