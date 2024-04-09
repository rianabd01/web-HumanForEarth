import "./Sidebar.scss";

function Sidebar() {
  return (
    <div className="menu">
      <div className="sidebar">
        <button className="openSidebar">X</button>

        <div className="sidebar_left">
          <ul>
            <li>
              <a href="">sad</a>
            </li>
            <li>
              <a href="">csas</a>
            </li>
            <li>
              <a href="">asdad</a>
            </li>
          </ul>
        </div>
        <div className="sidebar_right">
          <ul>
            <li>
              <a href="">ku</a>
            </li>
            <li>
              <a href="">mu</a>
            </li>
            <li>
              <a href="">sd</a>
            </li>
          </ul>
        </div>
        <div className="sidebar_bottom">
          <h6>Social Media</h6>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
