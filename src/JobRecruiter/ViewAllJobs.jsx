import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import { MdOutlineWork } from "react-icons/md";
import { PiIdentificationBadgeFill } from "react-icons/pi";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { MdOutlineNumbers } from "react-icons/md";
import { FiThumbsUp } from "react-icons/fi";
import { ImOffice } from "react-icons/im";
import { IoIosSettings } from "react-icons/io";
import { RxUpdate } from "react-icons/rx";
import { FaTrashRestore } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";


export default function ViewAllJobs() {

  const [recruiter, setRecruiter] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(
    () => {
      loadRecruiter()
    }, []);

  const loadRecruiter = async() => {
    const request = await axios.get("http://localhost:1234/getAllDetailsOwner");
    console.log(request.data)
    setRecruiter(request.data);

  }

  const deleteRecruiter = async(id) => {
    await axios.delete(`http://localhost:1234/deleteJobRecruiterById/${id}`);
    loadRecruiter();
  }

  return (
    <div>
      
      <input className="input-group form-control w-25 m-auto mb-3"
      
        role='searchbar'
        name='search'
        type="text"
        placeholder= "Search by job role"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
       
        
      />
      
      <table className="table border shadow" role='table'>
        <thead className="table-dark">
          <tr>

            <th scope="col"><div className='mr-1'><PiIdentificationBadgeFill /></div>HR Id</th>
            <th scope="col"><div className='mr-1'><MdDriveFileRenameOutline /></div>HR Name</th>
            <th scope="col"><div className='mr-1'><MdOutlineWork /></div>Jole Role</th>
            <th scope="col"><div className='mr-1'><MdOutlineNumbers /></div>Role Id</th>
            <th scope="col"><div className='mr-1'><FiThumbsUp /></div>Eligibility Criteria</th>
            <th scope="col"><div className='mr-1'><ImOffice /></div>Company Name</th>


            <th scope="col"><div className='mr-1'><IoIosSettings /></div>Action</th>
          </tr>
        </thead>
        <tbody>

          {
            recruiter
             .filter((rec) => rec.roleName.toLowerCase().includes(searchTerm.toLowerCase()))
             .map((rec) => (

                <tr>
                  <td>{rec.providerId}</td>
                  <td>{rec.providerName}</td>
                  <td>{rec.roleName}</td>
                  <td>{rec.roleId}</td>
                  <td>{rec.eligibilityCriteria}</td>
                  <td>{rec.companyName}</td>


                  <td>
                    {/* <Link className="btn btn-primary mx-2" to={`/view/${gro.id}`} >View</Link> */}

                    <Link className="btn btn-warning mx-2" to={`/editjobs/${rec.providerId}`}><RxUpdate />Edit</Link>

                    <button className="btn btn-danger mx-2" onClick={() => deleteRecruiter(rec.providerId)}><FaTrashRestore />Delete</button>
                  </td>
                </tr>
              ))
          }

        </tbody>
      </table>
    </div>

  )
}