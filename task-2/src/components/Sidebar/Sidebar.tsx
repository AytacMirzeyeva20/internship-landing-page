
import { IoMdHome } from "react-icons/io";
import { IoInformationCircleOutline, IoGridOutline } from "react-icons/io5";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar_heading">
        <span className="head">T</span>
        <h1 className="head_text">Talora</h1>
      </div>

      <nav className="sidebar_components" aria-label="Main navigation">
        <button type="button" className="components">
          <IoMdHome aria-hidden="true" />
          <span>Components</span>
        </button>

        <button type="button" className="components">
          <IoGridOutline aria-hidden="true" />
          <span>Demo</span>
        </button>

        <button type="button" className="components">
          <IoInformationCircleOutline aria-hidden="true" />
          <span>About</span>
        </button>
      </nav>
    </div>
  );
}

export default Sidebar;
