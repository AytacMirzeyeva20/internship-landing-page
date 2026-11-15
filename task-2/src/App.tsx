import Sidebar from "./components/Sidebar/Sidebar";
import Button from "./components/Button";
import "./App.css";
import { FaArrowPointer } from "react-icons/fa6";
import TextField from "./components/TextField";
import { useState } from "react";
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
      </main>
    </div>
  );
}

export default App;