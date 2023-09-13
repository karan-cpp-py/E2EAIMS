import './Deregistercourse.css'
import Student from './Student'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import axios from "axios"

const Deregistercourse = () => {
  const [inp, setInp] = useState([]);
  const userId = localStorage.getItem("key");
  const viewdata = async (e) => {
    const result = await axios.get(`http://localhost:8000/deregistercourses/${userId}`);
    setInp(result.data.course);
  }

  useEffect(() => {
    viewdata();
  }, [])


  return (
    <div className='deregistercourse'>
      <Student />
      <table class="table">
        <thead>
          <tr className='table-dark'>
            <th scope="col">S.N.</th>
            <th scope="col">Course id</th>
            <th scope="col">Course name</th>
            <th scope="col">L</th>
            <th scope="col">T</th>
            <th scope="col">P</th>
            <th scope="col">Department</th>
            <th scope="col">Credits</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {inp &&
            inp.map((element, id) => {
              return (
                <>
                  <tr>
                    <th scope="row">{id + 1}</th>
                    <td>{element.cid}</td>
                    <td>{element.cname}</td>
                    <td>{element.l}</td>
                    <td>{element.t}</td>
                    <td>{element.p}</td>
                    <td>{element.department}</td>
                    <td>{element.credits}</td>
                    <td>
                      <NavLink to={`getcourses/${element._id}`}><button className='buttstudent'>Deregister</button></NavLink>
                    </td>
                  </tr>
                </>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default Deregistercourse