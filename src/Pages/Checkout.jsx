import Footer from "../Components/Footer";
import { useNavigate } from "react-router-dom";
import Header from "../Components/Header";
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
