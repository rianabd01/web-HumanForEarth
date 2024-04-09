import "./Footer.scss";

function Footer() {
  return (
    <>
      <footer>
        <div className="container footer_contents">
          <div className="footer_left">
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Find Us</a>
              </li>
              <li>
                <a href="#">Halo</a>
              </li>
            </ul>
          </div>
          <div className="footer_right">
            <div className="footer_title">
              <h1>
                Human <br /> For <br /> Earth
              </h1>
            </div>
            <div className="footer_form">
              <form action="post">
                <label htmlFor="name">Your Name</label>
                <input type="text" htmlFor="name" />
                <label htmlFor="email">Your email</label>
                <input type="email" htmlFor="email" />
                <label htmlFor="message">Message</label>
                <textarea
                  name="message"
                  id="body_message"
                  cols="30"
                  rows="10"
                ></textarea>
                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
          <div className="footer_bottom_right">
            <h1>END OF WEB</h1>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
