import Sidebar from "./components/Sidebar/Sidebar";
import Button from "./components/Button";
import "./App.css";
import { FaArrowPointer } from "react-icons/fa6";
import TextField from "./components/TextField";
import { FaBoxArchive } from "react-icons/fa6";
import { useState } from "react";
import { IoTicket } from "react-icons/io5";
import { FaBoxOpen } from "react-icons/fa6";
import EmptyState from "./components/EmptyState";
import StatusBadge from "./components/StatusBadge";
function App() {
  const[message,setMessage]=useState("");
 const[name,setName]=useState("");
  return (
    <div className="app">
      <Sidebar />
  
      <main className="main_content">
        <div className="button_card">
          <div className="button_heading">
            <FaArrowPointer className="icon" />
            <h2>Button</h2>
            <p>Multiple variants and states</p>
          </div>

          <div className="button_examples">
            <Button onClick={()=>setMessage("Primary button clicked!")}>
              Primary
            </Button>

            <Button variant="secondary" onClick={()=>setMessage("Secondary button clicked!")}>Secondary</Button>

            <Button loading>Loading</Button>

            <Button disabled>Disabled</Button>
          </div>
{message && <p className="success_message">{message}</p>}
        </div>
       <div className="textfield_examples">
<TextField label="Full Name"  placeholder="Enter your name..."  value={name} onChange={setName} helperText="Enter your full name"/>
<TextField label="Email" placeholder="Enter your email..."  value="" onChange={() => {}} error="Email is required" />
<TextField label="Username" value="Aytac" onChange={() => {}} disabled />
       </div>
            <div className="button_card">
                  <div className="button_heading">
                    <IoTicket className="icon" />
                    <h2>StatusBadge</h2>
                    <p>Show status with style</p>
                  </div>
<div className="badge_examples">
  <StatusBadge status="active" />
  <StatusBadge status="pending" />
  <StatusBadge status="error" />
</div>
                  </div>
                   <div className="button_card">
                  <div className="button_heading">
                    <FaBoxArchive className="icon" />
                    <h2>EmptyState</h2>
                    <p>Handle empty data states</p>
                  </div>
                  <div className="empty_content">
           <FaBoxOpen className="empty_icon" />
      <div className="empty_examples">
        <EmptyState title="No Data Found" description="There is no data to display right now." icon={<FaBoxOpen />} />
        <EmptyState title="No Products"  description="Add a product to see it here."  icon={<FaBoxArchive />}/>
      </div>
              </div>
                  </div>
                  
      </main>
    </div>
  );
}

export default App;