import React from 'react'
import "./Student.css"
import { Link, useNavigate } from "react-router-dom";

const Student = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("key");
    navigate("/")
  }

  return (
    <div className='student'>
      <div className='nav'>
        <li className='navlinks'>
          <Link to="/gradesheet">Grade Sheet</Link>
        </li>
        <li className='navlinks'>
          <Link to="/registercourse">Register Course</Link>
        </li>
        <li className='navlinks'>
          <Link to="/deregistercourse">Deregister Course</Link>
        </li>
        <button className='butt' onClick={logout}>Logout</button>
    </div>
    </div>
  )
}

export default Student