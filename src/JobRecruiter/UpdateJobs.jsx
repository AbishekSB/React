import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, Link, useParams } from 'react-router-dom';

export default function UpdateJobs() {
    
    const{id} = useParams();
    const Navigate = useNavigate();
   
    const [jobs, setJobs] = useState({
        providerName: " ",
        roleName: " ",
        roleId: " ",
        eligibilityCriteria: " ",
        companyName: " "

    });
    const{providerName, roleName, roleId, eligibilityCriteria, companyName} = jobs;

    useEffect(() => {
        loadJobs();
    }, [])

    const onInputChange = (e) => {
        setJobs({ ...jobs, [e.target.name]: e.target.value })
        console.log(jobs)
    }

    const loadJobs = async () =>
    {
      const result = await axios.get(`http://localhost:1234/GetJobRecruiterById/${id}`)
      console.log(result.data)
      setJobs(result.data)
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        const result = await axios.put("http://localhost:1234/UpdateJobRecruiter", jobs);
        console.log(result.data)
        Navigate("/viewalljobs");
    }

    return (
        <div class="container" id="table">
            <div class=" text-center mt-5 ">
                <h1>Registeration</h1>
            </div>

            <div class="row ">
                <div class="col-lg-7 mx-auto"></div>
                <div class="card mt-2 mx-auto p-4 bg-light">
                    <div class="card-body bg-light">
                        <div class="container">
                            <form onSubmit={onSubmit}>
                                <div class="controls">

                                    {/* input for provider name */}
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <input

                                                    type="text"
                                                    name="providerName"
                                                    value={providerName}
                                                    onChange={(e) => onInputChange(e)}
                                                    class="form-control"
                                                    placeholder="HR Name *"
                                                    required="required"
                                                    data-error="Department Name is required."
                                                />
                                            </div>
                                        </div>
                                    

                                    {/* input for the roleName*/}
                                  
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <input

                                                    type="text"
                                                    name="roleName"
                                                    value={roleName}
                                                    onChange={(e) => onInputChange(e)}
                                                    class="form-control"
                                                    placeholder="Job Role*"
                                                    required="required"
                                                    data-error="Department Name is required."
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <br></br>
                                    {/* roleId */}
                                    <div class="row">
                                        <div class="col-md-5">
                                            <div class="form-group">
                                                <input

                                                    type="text"
                                                    name="roleId"
                                                    value={roleId}
                                                    onChange={(e) => onInputChange(e)}
                                                    class="form-control"
                                                    placeholder="Job Role Id *"
                                                    required="required"
                                                    maxLength={10}
                                                    data-error="Mobile Number Name is required."
                                                />
                                            </div>
                                        </div>

                                        {/*eligibilityCriteria companyName*/}
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <input

                                                    type="text"
                                                    name="eligibilityCriteria"
                                                    value={eligibilityCriteria}
                                                    onChange={(e) => onInputChange(e)}
                                                    class="form-control"
                                                    placeholder="eligibilityCriteria *"
                                                    required="required"
                                                    data-error="Department Name is required."
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <br></br>
                                    {/* companyName */}
                                    <div class="row">
                                        <div class="col-md-5">
                                            <div class="form-group">
                                                <input

                                                    type="text"
                                                    name="companyName"
                                                    value={companyName}
                                                    onChange={(e) => onInputChange(e)}
                                                    class="form-control"
                                                    placeholder="Company Name *"
                                                    required="required"
                                                    maxLength={10}
                                                    data-error="Mobile Number Name is required."
                                                />
                                            </div>
                                        </div>
                                    </div>


                                    <div class="col-md-12">
                                        <input
                                            type="submit"
                                            class="btn btn-success btn-send  pt-2 btn-block"
                                            value="Submit Details"
                                        />
                                    </div>
                                    <br></br>
                                    <Link className='btn btn-outline-danger mx-3' to="/viewalljobs"> cancel</Link>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
