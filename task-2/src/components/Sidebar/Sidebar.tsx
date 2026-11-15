import { IoMdHome } from "react-icons/io";
import { IoInformationCircleOutline } from "react-icons/io5";
import { IoGridOutline } from "react-icons/io5";
function Sidebar(){
    return(
        <>
        <div className="sidebar">
        <div className="sidebar_heading">
            <span className="head">T</span>
            <h1 className="head_text">Talora</h1>
        </div>
        <div className="sidebar_components">
            <div className="components">
                <IoMdHome />
                <h2>Components</h2>
            </div>
            <div className="components">
              <IoGridOutline />
            <h2>Demo</h2>
            </div>
            <div className="components">
                <IoInformationCircleOutline />
                <h2>About</h2>
            </div>
        </div>
        </div>
        </>
    )
}
export default Sidebar;