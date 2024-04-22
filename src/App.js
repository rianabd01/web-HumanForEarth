import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import Home from "./Pages/Home/Home.jsx";
import Checkout from "./Pages/Checkout";
import NotFound from "./Pages/NotFoundPages";
import { AppContext } from "./Components/Context/SidebarToggle.jsx";
import { useState } from "react";

<script
  src="https://kit.fontawesome.com/cc29e4fb2e.js"
  crossorigin="anonymous"
></script>;

function App() {
  const [sidebarToggle, setSidebarToggle] = useState(false);
  return (
    <AppContext.Provider value={{ sidebarToggle, setSidebarToggle }}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checkin" element={<Checkout />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </AppContext.Provider>
  );
}

export default App;
