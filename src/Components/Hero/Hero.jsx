import "./Hero.scss";
import heroImage from "../../Public/Images/hero_PineForest.webp";
import { GrPlayFill } from "react-icons/gr";

function Hero() {
  return (
    <div className="hero">
      <div className="hero_background">
        <img src={heroImage} alt="" />
      </div>
      <div className="container hero_content">
        <h1>
          Save
          <br />
          <span>our</span>
          <br /> Planet
        </h1>

        <div className="hero_play">
          <button>
            <GrPlayFill />
            <span> PLAY</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
