import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import './App.css';
import Login from './components/Login/Login';
import Student from './components/Student/Student';
import Gradesheet from './components/Student/Gradesheet';
import Registercourse from './components/Student/Registercourse';
import Deregistercourse from './components/Student/Deregistercourse';
import Faculty from "./components/Faculty/Faculty";
import Studentlist from "./components/Faculty/Studentlist";
import Gradeentry from "./components/Faculty/Gradeentry";
import Offerings from "./components/Faculty/Offerings";
import Viewgrades from "./components/Faculty/Viewgrades";
import Myofferedcourses from "./components/Faculty/Myofferedcourses";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='app'>
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/student" element={<Student />} />
          <Route exact path="/gradesheet" element={<Gradesheet />} />
          <Route exact path="/registercourse" element={<Registercourse />} />
          <Route exact path="/deregistercourse" element={<Deregistercourse />} />
          <Route exact path="/faculty" element={<Faculty />} />
          <Route exact path="/studentlist" element={<Studentlist />} />
          <Route exact path="/gradeentry" element={<Gradeentry />} />
          <Route exact path="/viewgrades" element={<Viewgrades />} />
          <Route exact path="/offerings" element={<Offerings />} />
          <Route exact path="/myofferedcourses" element={<Myofferedcourses />} />
        </Routes>
      </Router>
    </div>

  );
}

export default App;
