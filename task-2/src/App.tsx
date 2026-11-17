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
        <TextField label="Full Name" placeholder="Enter your name..." value={name} onChange={setName}  helperText={`Your name:${name}`} />
            <div className="button_card">
                  <div className="button_heading">
                    <IoTicket className="icon" />
                    <h2>StatusBadge</h2>
                    <p>Show status with style</p>
                  </div>
<div className="badge_examples">
    <span className="badge_active">Active</span>
    <span className="badge_pending">Pending</span>
    <span className="badge_error">Error</span>
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
         <EmptyState title="No Data Found" description="There is no data to display right now."/>
              </div>
                  </div>
                  
      </main>
    </div>
  );
}

export default App;