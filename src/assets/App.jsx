import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Certs from "./Certificates";
import Error from "./Error";
import Toggle from "./toggle";
import Footer from "./Footer";
import "./theme.css";
import "./App.css";

const NavigationBar = ({ darkMode, setDarkMode }) => {
  return (
    <>
    <nav aria-label="Main navigation">
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/certificates">Certificates</Link>
      </div>
      <Toggle darkMode={darkMode} setDarkMode={setDarkMode} />
    </nav>
    </>
  );
};

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`app-shell ${darkMode ? "dark" : "light"}`}>
      <BrowserRouter>
        <NavigationBar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main className="page-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/certificates" element={<Certs />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </main>
      <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
