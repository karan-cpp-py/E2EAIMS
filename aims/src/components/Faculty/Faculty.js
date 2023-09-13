import React from 'react'
import "./Faculty.css"
import { Link, useNavigate } from "react-router-dom";

const Faculty = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("key");
    navigate("/")
  }

  return (
    <div className='faculty'>
      <div className='nav'>
        <li className='navlinks'>
          <Link to="/studentlist">Student List</Link>
        </li>
        <li className='navlinks'>
          <Link to="/gradeentry">Grade Entry</Link>
        </li>
        <li className='navlinks'>
          <Link to="/viewgrades">View Grades</Link>
        </li>
        <li className='navlinks'>
          <Link to="/offerings">Offerings</Link>
        </li>
        <li className='navlinks'>
          <Link to="/myofferedcourses">My Offered Courses</Link>
        </li>
        <button className='butt' onClick={logout}>Logout</button>
      </div>
    </div>
  )
}

export default Faculty