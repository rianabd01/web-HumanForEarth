import "../Style/NavigationBar.scss";
import Sidebar from "./Sidebar";
import { CgMenuLeft } from "react-icons/cg";

function NavigationBar() {
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
        <button>
          <span>menu</span>

          <CgMenuLeft />
        </button>
      </div>
      <Sidebar />
    </nav>
  );
}

export default NavigationBar;
