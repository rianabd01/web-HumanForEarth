import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import Home from "./Pages/Home";
import Checkout from "./Pages/Checkout";
import NotFound from "./Pages/NotFoundPages";

<script
  src="https://kit.fontawesome.com/cc29e4fb2e.js"
  crossorigin="anonymous"
></script>;

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkin" element={<Checkout />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
