import logo from './logo.svg';
import {Router, Routes, Route, BrowserRouter} from  'react-router-dom';
import './App.css';
import Navbar from './JobSeeker/Navbar';
import ViewAllSeeker from './JobSeeker/ViewAllSeeker';
import InsertApplicant from './JobSeeker/InsertApplicant';
import UpdateInformation from './JobSeeker/UpdateInformation';
import ViewAllJobs from './JobRecruiter/ViewAllJobs';
import InsertJob from './JobRecruiter/InsertJob';
import UpdateJobs from './JobRecruiter/UpdateJobs';

function App() {
  return (
    <div className="App">
      
     <BrowserRouter>
     <Navbar />
     <Routes>
     <Route path="/" element={<ViewAllSeeker />}/>
     <Route path="/inserapplicant" element={<InsertApplicant />} />
     <Route path="/edituser/:id" element={<UpdateInformation />} />
     <Route path="/viewalljobs" element={<ViewAllJobs />} />
     <Route path="/insertjobs" element={<InsertJob />} />
     <Route path="/editjobs/:id" element={<UpdateJobs />} />
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
