import { useNavigate } from "react-router-dom";
import Header from "../Components/Header/Header.jsx";
import Footer from "../Components/Footer/Footer.jsx";
function Checkout() {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <Footer />
      <button onClick={() => navigate("/")}>Home</button>
    </>
  );
}

export default Checkout;
