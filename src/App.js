import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Bookings from "./pages/Bookings";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import Gallery from "./pages/Gallery";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import WhatsApp from "./components/WhatsApp";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <WhatsApp />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/booking/:slug" element={<Bookings />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/room/:slug" element={<SingleRoom />} />
        <Route path="/terms&conditions" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
