import "./Sidebar.scss";
import { useContext } from "react";
import { AppContext } from "../Context/SidebarToggle";

function Sidebar() {
  const { sidebarToggle, setSidebarToggle } = useContext(AppContext);
  const sidebarHandler = (click) => {
    setSidebarToggle(click);
  };
  return (
    <div className={sidebarToggle ? "menu open" : "menu"}>
      <div className="sidebar">
        <button className="openSidebar" onClick={() => sidebarHandler(false)}>
          X
        </button>
        <div className="sidebar_items">
          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Find Us</a>
            </li>
            <li>
              <a href="">Deforestation Location</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
