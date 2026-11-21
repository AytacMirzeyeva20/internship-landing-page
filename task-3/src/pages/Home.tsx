import { useEffect, useState } from "react";
import { getApplications } from "../services/applicationApi";
import type { Application, } from "../types/Application";
import './Home.css';
import { HiOutlineClipboardList } from "react-icons/hi";
import { FiClock, FiCheckCircle, FiXCircle } from "react-icons/fi";
const Home = () =>{
const [applications, setApplications] = useState<Application[]>([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState<string | null>(null);
useEffect(()=>{
const loadApplications= async()=>{
    try{
        const data= await getApplications("success");
        setApplications(data);
    } catch(error){
        setError("Məlumat yüklənərkən xəta baş verdi")
    }finally{
        setLoading(false);
    }
}
loadApplications();
},[]);

if(loading){
    return <p>Yuklenir...</p>;
}
if (error) {
  return <p>{error}</p>;
}
const pendingCount=applications.filter((application)=>application.status === "pending").length;
const approvedCount = applications.filter((application) => application.status === "approved").length;
const rejectedCount = applications.filter((application) => application.status === "rejected").length;
return (
  <div className="dashboard">
    <h1>Admin Panel</h1>
    <div className="stats-container">
  <div className="stat-card">
    <HiOutlineClipboardList />
    <p>Ümumi müraciətlər</p>
    <h2>{applications.length}</h2>
  </div>

  <div className="stat-card">
    <FiClock />
    <p>Gözləyənlər</p>
    <h2>{pendingCount}</h2>
  </div>

  <div className="stat-card">
    <FiCheckCircle />
    <p>Təsdiqlənənlər</p>
    <h2>{approvedCount}</h2>
  </div>

  <div className="stat-card">
    <FiXCircle />
    <p>Rədd edilənlər</p>
    <h2>{rejectedCount}</h2>
  </div>
</div>
<section  className="applications-section" >
<h2>Son müraciətlər</h2>
<table>
    <thead>
      <tr>
        <th>Müraciət ID</th>
        <th>Status</th>
        <th>Tarix</th>
      </tr>
    </thead>
    <tbody>
        {applications.map((application)=>(
            <tr key={application.id}>
            <td>
                <span className={`status-badge ${application.status}`}>
                    {application.status}
                </span>
            </td>
          <td>
            <span className={`status-badge ${application.status}`}  >
            {application.status}
</span>
          </td>
          <td>
            <span className={`status-badge ${application.status}`} >
            {application.date}
            </span>
            </td>
            </tr>
))}
    </tbody>
</table>
</section>
  </div>
);
}
export default Home;