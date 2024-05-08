import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';


export default function ViewAllSeeker() {

  const [seeker, setSeeker] = useState([]);

  useEffect(() =>
  {
    loadSeeker()
  }, []);
  

  const loadSeeker = async()=>
  {
    const request = await axios.get("http://localhost:1234/getAllDetailsSeeker");
    console.log(request.data)
    setSeeker(request.data);
    
  }

  const deleteSeeker = async(id) =>
  {
    await axios.delete(`http://localhost:1234/deleteSeekerById/${id}`);
    loadSeeker();
  }

  
  return (
    <div>
       <table className="table border shadow" role='table'>
            <thead class="table-dark">
                    <tr>
                        
                        <th scope="col">Applicant Id</th>
                        <th scope="col">Applicant Name</th>
                        <th scope="col">Applicant City</th>
                        <th scope="col">Age</th>
                        <th scope="col">Gender</th>
                        <th scope="col">Degree</th>
                        <th scope="col">Year of Graduation</th>
                        <th scope="col">Job Role</th>
                        <th scope="col">HR</th>
                        <th scope="col">Company Name</th>
                        
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        seeker.map((seek) => (

                            <tr>
                                <td>{seek.applicantId}</td>
                                <td>{seek.applicantName}</td>
                                <td>{seek.applicantCity}</td>
                                <td>{seek.age}</td>
                                <td>{seek.gender}</td>
                                <td>{seek.degree}</td>
                                <td>{seek.yearOfGraduation}</td>
                                <td>{seek.jobRecruiter.roleName}</td>
                                <td>{seek.jobRecruiter.providerName}</td>
                                <td>{seek.jobRecruiter.companyName}</td>
                                <td>
                                    {/* <Link className="btn btn-primary mx-2" to={`/view/${gro.id}`} >View</Link> */}
                                       
                                     <Link className="btn btn-warning mx-2"  to={`/edituser/${seek.applicantId}`}  >Edit</Link> 
                                    
                                   <button  className="btn btn-danger mx-2" onClick={()=>deleteSeeker(seek.applicantId)}>Delete</button>    
                                </td>
                            </tr>
                            ))
                          }
      
                      </tbody>
                  </table>
              </div>
    
  )
}
