import "./NavigationBar.scss";
import Sidebar from "../Sidebar/Sidebar.jsx";
import { CgMenuLeft } from "react-icons/cg";
import { useContext } from "react";
import { AppContext } from "../Context/SidebarToggle.jsx";

function NavigationBar() {
  const { setSidebarToggle } = useContext(AppContext);
  const sidebarHandler = (click) => {
    setSidebarToggle(click);
  };
  return (
    <nav>
      <div className="navigation">
        <ul>
          <li>
            <a href="/#main">Home</a>
          </li>
          <li>
            <a href="https://maps.google.com">Find Us</a>
          </li>
          <li>
            <a href="/checkin">Deforestation Location</a>
          </li>
        </ul>
      </div>
      <div className="open_sidebar">
        <button onClick={() => sidebarHandler(true)}>
          <span>menu</span>

          <CgMenuLeft />
        </button>
      </div>
      <Sidebar />
    </nav>
  );
}

export default NavigationBar;
