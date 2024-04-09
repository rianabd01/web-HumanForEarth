import Header from "../Components/Header";
import Hero from "../Components/Hero";
import HomeContents from "../Components/HomeContents";
import Footer from "../Components/Footer";
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
      <HomeContents />
      {/* <button onClick={() => navigate("/checkin")}>Gass Checkout</button>

      <LatihanState />
      <UserList /> */}
      <Footer />
    </>
  );
};

export default Home;
