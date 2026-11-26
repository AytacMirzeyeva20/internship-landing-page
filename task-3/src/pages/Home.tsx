import { useEffect, useRef, useState } from "react";
import { getApplications } from "../services/applicationApi";
import type { Application, } from "../types/Application";
import './Home.css';
import { HiOutlineClipboardList } from "react-icons/hi";
import { FiClock, FiCheckCircle, FiXCircle } from "react-icons/fi";
const Home = () =>{
const [applications, setApplications] = useState<Application[]>([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState<string | null>(null);
const isRequesting=useRef(false);
const requestId=useRef(0);
const loadApplications= async()=>{
  if(isRequesting.current) return;
  isRequesting.current=true;
const currentRequestId= ++requestId.current;
  setLoading(true);
  setError(null);
 
try{
        const data= await getApplications("success");
        if(currentRequestId !== requestId.current) return;
        setApplications(data);
    } catch(error){
      if (currentRequestId !== requestId.current) return;
       if(error instanceof Error && error.message === "401 Unauthorized"){
        setError("Giriş üçün icazəniz yoxdur. Zəhmət olmasa, yenidən daxil olun.");
       }else if(error instanceof Error && error.message === "500 Internal Server Error"){
        setError("Server xətası baş verdi. Yenidən cəhd edin.");
       }else{
        setError("Məlumat yüklənərkən xəta baş verdi");
       }
    }finally{
      if (currentRequestId === requestId.current) {
    setLoading(false);
    isRequesting.current = false;
  }
    }
}
useEffect(()=>{
loadApplications();
},[])


if(loading){
    return <p>Yuklenir...</p>;
}
if (error) {
  return(
<div className="error-state">
  <p>{error}</p>
      <button onClick={loadApplications} disabled={loading}>
        {loading ? "Yüklənir..." : "Yenidən cəhd et"}
      </button>
</div>
  );
}
if(applications.length === 0){
return (
  <div className="empty-state">
      <HiOutlineClipboardList />
      <h2>Müraciət yoxdur</h2>
      <p>Hazırda sistemdə heç bir müraciət qeydə alınmayıb.</p>
    </div>
);
}
const pendingCount=applications.filter((application)=>application.status === "pending").length;
const approvedCount = applications.filter((application) => application.status === "approved").length;
const rejectedCount = applications.filter((application) => application.status === "rejected").length;
return (
  <div className="dashboard">
    <h1>Admin Panel</h1>
    <button onClick={loadApplications} disabled={loading} className="load-button">
      {loading ? "Yüklənir..." : "Yenilə"}
    </button>
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
               <td>{application.id}</td>
               <td>
            <span className={`status-badge ${application.status}`}  >
            {application.status}
</span>
          </td>
          <td>
            {application.date}
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