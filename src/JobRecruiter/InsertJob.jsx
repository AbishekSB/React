import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';


export default function InsertJob() {

     const Navigate = useNavigate();
    const [jobs, setJobs] = useState({
        providerName: " ",
        roleName: " ",
        roleId: " ",
        eligibilityCriteria: " ",
        companyName: " "

    });

    const onInputChange = (e) => {
        setJobs({ ...jobs, [e.target.name]: e.target.value })
        console.log(jobs)
    }



    const onSubmit = async (e) => {
        e.preventDefault();
        const result = await axios.post("http://localhost:1234/CreateJobRecruiter", jobs);
        console.log(result.data)
         Navigate("/viewalljobs");


    }

    return (
        <div className="container" id="table">
            <div className=" text-center mt-5 ">
                <h1>Registeration</h1>
            </div>

            <div className="row ">
                <div className="col-lg-7 mx-auto"></div>
                <div className="card mt-2 mx-auto p-4 bg-light">
                    <div className="card-body bg-light">
                        <div className="container">
                            <form onSubmit={onSubmit}>
                                <div className="controls">

                                    {/* input for provider name */}
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input
                                                    role= "pname"
                                                    type="text"
                                                    name="providerName"
                                                    onChange={(e) => onInputChange(e)}
                                                    className="form-control"
                                                    placeholder="HR Name *"
                                                    required="required"
                                                    data-error="Department Name is required."
                                                />
                                            </div>
                                        </div>
                                    

                                    {/* input for the roleName*/}
                                  
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input

                                                    role='rname'
                                                    type="text"
                                                    name="roleName"
                                                    onChange={(e) => onInputChange(e)}
                                                    className="form-control"
                                                    placeholder="Job Role*"
                                                    required="required"
                                                    data-error="Department Name is required."
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <br></br>
                                    {/* roleId */}
                                    <div className="row">
                                        <div className="col-md-5">
                                            <div className="form-group">
                                                <input
                                                    role='rId'
                                                    type="text"
                                                    name="roleId"
                                                    onChange={(e) => onInputChange(e)}
                                                    className="form-control"
                                                    placeholder="Job Role Id *"
                                                    required="required"
                                                    maxLength={10}
                                                    data-error="Mobile Number Name is required."
                                                />
                                            </div>
                                        </div>

                                        {/*eligibilityCriteria companyName*/}
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input
                                                    role='eligibilityCriteria'
                                                    type="text"
                                                    name="eligibilityCriteria"
                                                    onChange={(e) => onInputChange(e)}
                                                    className="form-control"
                                                    placeholder="eligibilityCriteria *"
                                                    required="required"
                                                    data-error="Department Name is required."
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <br></br>
                                    {/* companyName */}
                                    <div className="row">
                                        <div className="col-md-5">
                                            <div className="form-group">
                                                <input
                                                    role='companyName'
                                                    type="text"
                                                    name="companyName"
                                                    onChange={(e) => onInputChange(e)}
                                                    className="form-control"
                                                    placeholder="Company Name *"
                                                    required="required"
                                                    maxLength={10}
                                                    data-error="Mobile Number Name is required."
                                                />
                                            </div>
                                        </div>
                                    </div>


                                    <div className="col-md-12">
                                        <input
                                            name='btnk'
                                            data-testId= "submit-button"
                                            type="submit"
                                            className="btn btn-success btn-send  pt-2 btn-block"
                                            value="Submit Details"
                                        /> 
                                        
                                    </div>
                                    <br></br>
                                    {/* <Link classNameName='btn btn-outline-danger mx-3' to="/viewalljobs"> cancel</Link> */}
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
