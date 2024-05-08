import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (

        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-primary">
                <Link className="navbar-brand" href="#" to="/" >Online Job Recruitment</Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <Link class="nav-link" href="#" to="/inserapplicant" name="insertuser">Insert Application</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" href="#" to="/viewalljobs" name="alljobs">View All Jobs</Link>
                        </li>
                         <li class="nav-item">
                            <Link class="nav-link" href="#" to="/insertjobs" name="insertjobs">New Jobs</Link>
                        </li> 
                        


                    </ul>
                </div>

            </nav>
        </div>
    )
}
