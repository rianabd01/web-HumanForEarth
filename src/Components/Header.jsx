import "../Style/Header.scss";
import NavigationBar from "./NavigationBar";

function Header() {
  return (
    <>
      <header>
        <div className="header_contents">
          <div className="brandLogo">
            <h1 className="brandLogo_content">
              Human <br />
              <span className="brandLogo_content_span1">For </span>
              <span className="brandLogo_content_span2">Earth</span>
            </h1>
          </div>
          <NavigationBar />
        </div>
      </header>
    </>
  );
}

export default Header;
