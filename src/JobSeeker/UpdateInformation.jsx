import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate , Link, useParams} from 'react-router-dom';

export default function UpdateInformation() {
    
    const [applicant, setApplicant] = useState([])
    const Navigate = useNavigate();
    const{id} = useParams();
    const [seeker, setSeeker] = useState({
        applicantName: " ",
        applicantCity: " ",
        age: " ",
        gender: " ",
        degree: " ",
        yearOfGraduation: " ",
        jobRecruiter: { providerId: " ", providerName: " " , roleName: " ", roleId: " ", eligibilityCriteria: " ", companyName: " "}
    });
    const {applicantName,applicantCity,age, gender, degree, yearOfGraduation} = seeker;

    useEffect(() => {
        loadProviderId();
        loadSeeker();
    }, [])

    const loadSeeker = async () =>
    {
      const result = await axios.get(`http://localhost:1234/getSeekerById/${id}`)
      console.log(result.data)
      setSeeker(result.data)
    }

    const loadProviderId = async () => {
        const request = await axios.get("http://localhost:1234/getJobRecruiterIdList");
        console.log(request.data)
        setApplicant(request.data);
    }

    const onInputChange = (e) => {
        setSeeker({ ...seeker, [e.target.name]: e.target.value })
        console.log(seeker)
    }

    const handleChange = (e) => {
        setSeeker({ ...seeker, jobRecruiter: { providerId: e.target.value } })

    }

    
    
     const onSubmit = async (e) => {
        e.preventDefault()
        const result = await axios.put("http://localhost:1234/UpdateSeeker", { ...seeker, jobRecruiter: { ...seeker.jobRecruiter, providerId: seeker.jobRecruiter.providerId } })
        console.log(result.data)
        Navigate("/")
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

                                    {/* input for applicant name */}
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <input
                                                    type="text"
                                                    name="applicantName"
                                                    value={applicantName}
                                                    onChange={(e) => onInputChange(e)}
                                                    class="form-control"
                                                    placeholder="Please enter your First name *"
                                                    required="required"
                                                    data-error="First Name is required."
                                                />
                                            </div>
                                        </div>


                                        {/*input for city  */}

                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <input

                                                    type="text"
                                                    name="applicantCity"
                                                    value={applicantCity}
                                                    onChange={(e) => onInputChange(e)}
                                                    class="form-control"
                                                    placeholder="Please enter the City *"
                                                    required="required"
                                                    data-error="Mobile number is required."
                                                    maxLength="10"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* input for age */}
                                    <br></br>

                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">

                                                <input

                                                    name="age"
                                                    value={age}
                                                    onChange={(e) => onInputChange(e)}
                                                    class="form-control"
                                                    placeholder="Enter the age *"
                                                    required="required"
                                                    

                                                />
                                            </div>
                                        </div>


                                    </div>

                                    {/* input for gender */}
                                    <br></br>

                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">

                                                <input

                                                    name="gender"
                                                    value={gender}
                                                    onChange={(e) => onInputChange(e)}
                                                    class="form-control"
                                                    placeholder="Enter the Gender *"
                                                    required="required"
                                                    

                                                />
                                            </div>
                                        </div>


                                    </div>

                                    {/* input for degree */}
                                    <br></br>

                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">

                                                <input

                                                    name="degree"
                                                    value={degree}
                                                    onChange={(e) => onInputChange(e)}
                                                    class="form-control"
                                                    placeholder="Enter the degree *"
                                                    required="required"
                                                    

                                                />
                                            </div>
                                        </div>


                                    </div>

                                    {/* input for yearOfGraduation */}
                                    <br></br>

                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">

                                                <input

                                                    name="yearOfGraduation"
                                                    value={yearOfGraduation}
                                                    onChange={(e) => onInputChange(e)}
                                                    class="form-control"
                                                    placeholder="Enter the yearOfGraduation *"
                                                    required="required"
                                                    

                                                />
                                            </div>
                                        </div>


                                    </div>

                                    

                                    <br></br>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group"></div>


                                            <select

                                                onChange={(e) => handleChange(e)}

                                                name="providerId"
                                                class="form-control"
                                                placeholder="Enter Your Department"
                                                required="required"
                                                value={seeker.jobRecruiter.providerId}

                                            ><option value=''>Select </option>
                                                {applicant.map((x) => (
                                                    <option key={x} value={x}>
                                                        {x}
                                                    </option>
                                                ))}
                                            </select>


                                        </div>
                                    </div>
                                    <br></br>
                                    <div class="col-md-12">
                                        <input
                                            type="submit"
                                            class="btn btn-success btn-send  pt-2 btn-block"

                                            value="Submit Details"
                                        />
                                    </div>
                                    <br></br>
                                    <Link className='btn btn-outline-danger mx-3' to="/"> cancel</Link> 
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}
