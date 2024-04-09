import "../Style/TabSlider.scss";
import { FaSunPlantWilt, FaLightbulb } from "react-icons/fa6";
import tabImage1 from "../Public/Images/tabContent_Children.webp";
import { useState } from "react";

function TabSlider() {
  const [tabIndex, setTabIndex] = useState(1);

  const toggleIndex = (index) => {
    setTabIndex(index);
  };
  return (
    <section className="container">
      <div className="tab_navigation_bar">
        <div className="tab_navigation">
          <ul className="tab_menu">
            <li
              className={tabIndex === 1 ? "tab_button active" : "tab_button"}
              onClick={() => toggleIndex(1)}
            >
              <i>
                <FaSunPlantWilt />
              </i>
              <span>Purpose</span>
            </li>
            <li
              className={tabIndex === 2 ? "tab_button active" : "tab_button"}
              onClick={() => toggleIndex(2)}
            >
              <i>
                <FaSunPlantWilt />
              </i>
              <span>Problems</span>
            </li>
            <li
              className={tabIndex === 3 ? "tab_button active" : "tab_button"}
              onClick={() => toggleIndex(3)}
            >
              <i>
                <FaLightbulb />
              </i>
              <span>Solution</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="tab_contents">
        <div className={tabIndex === 1 ? "tab_item active" : "tab_item"}>
          <div className="tab_item_left">
            <img src={tabImage1} alt="" />
          </div>
          <div className="tab_item_right">
            <div className="item_quote">
              <p>
                <q>We Care About Universe</q>
              </p>
            </div>
            <div className="item_description">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Obcaecati, dolorum? Perferendis facere expedita velit delectus
                similique eveniet modi dolores architecto optio est, cupiditate
                explicabo natus. Deleniti quidem dolor porro! Quia illo cum
                dolorum! Sunt, cupiditate ipsam? Reprehenderit, vitae atque aut
                labore eligendi saepe odit, iste facere perferendis doloremque
                maxime veniam. Aperiam, ullam. Dicta sed recusandae in omnis
                quasi amet molestiae eaque praesentium deserunt iure repudiandae
                nemo aut expedita hic veniam totam, necessitatibus placeat
                dolore corrupti aliquam laborum natus! Doloremque velit
                obcaecati eveniet reiciendis laborum facere, tempora quos a,
                voluptate inventore impedit laudantium iure aperiam, vitae
                quisquam! Eligendi praesentium fuga in?
              </p>
            </div>
          </div>
        </div>
        <div className={tabIndex === 2 ? "tab_item active" : "tab_item"}>
          <div className="tab_item_left">
            <img src={tabImage1} alt="" />
          </div>
          <div className="tab_item_right">
            <div className="item_quote">
              <p>
                <q>Cuyyyy</q>
              </p>
            </div>
            <div className="item_description">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
                veniam eaque. Recusandae excepturi, cumque architecto
                perspiciatis molestiae aspernatur voluptatem consequuntur itaque
                consequatur aliquid dolorem eius numquam officia maiores facere
                dignissimos.
              </p>
            </div>
          </div>
        </div>
        <div className={tabIndex === 3 ? "tab_item active" : "tab_item"}>
          <div className="tab_item_left">
            <img src={tabImage1} alt="" />
          </div>
          <div className="tab_item_right">
            <div className="item_quote">
              <p>
                <q>Haloo world</q>
              </p>
            </div>
            <div className="item_description">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo
                laudantium inventore aspernatur est, esse reiciendis nobis
                explicabo eveniet perspiciatis adipisci?
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TabSlider;
