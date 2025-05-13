import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Layout from "./Layout";
import Portfolio from "./components/Portfolio";
import Contacts from "./components/Contacts";
import Prices from "./components/Prices";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="prices" element={<Prices />} />
      </Route>
    </Routes>
  );
}

export default App;
