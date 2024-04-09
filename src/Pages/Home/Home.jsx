import TabSlider from "../../Components/TabSlider/TabSlider.jsx";
import "./Main.scss";
import CardList from "../../Components/CardList/CardList.jsx";
import Header from "../../Components/Header/Header.jsx";
import Hero from "../../Components/Hero/Hero.jsx";
import Footer from "../../Components/Footer/Footer.jsx";
// import LatihanState from "../Components/LatihanState";
// import UserList from "../Components/LatihanStateEffect";
// import NavigationBar from "../Components/NavigationBar";
// import { useNavigate } from "react-router-dom";

const Home = () => {
  // const navigate = useNavigate();
  return (
    <>
      {/* <NavigationBar /> */}
      <Header />

      <Hero />

      <main id="main">
        <TabSlider />
        <CardList />
      </main>

      <Footer />
    </>
  );
};

export default Home;
