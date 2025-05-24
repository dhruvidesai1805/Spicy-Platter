import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./components/common/footer.css";
import "./pages/contact/contact.css";
import "./pages/contact/contact.css";
import "./pages/about/about.css";
import "./pages/gallery/gallery.css";
import "./pages/menu/menu.css";
import "./pages/home/home.css";
import "./pages/reservation/reservation.css";

import Header from "./components/common/Header";
import Home from "./pages/home/home";
import Reservation from "./pages/reservation/Reservation";
import Menu from "./pages/menu/Menu";
import Photos from "./pages/gallery/Photos";
import Videos from "./pages/gallery/Videos";
import About from "./pages/about/about";
import Contact from "./pages/contact/Contact";
import Admin from "./pages/admin/Admin";
import Footer from "./components/common/Footer";
import GoToTop from "./components/common/GoToTop";
import LoginForm from "./components/LoginForm";
import NgoData from "./pages/NgoData";
function App() {

  
  return (
    <>
      <BrowserRouter>
    {<Header />}    
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="reservation" element={<Reservation />} />
          <Route path="menu" element={<Menu />} />
          <Route path="photos" element={<Photos />} />
          <Route path="videos" element={<Videos />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="admin" element={<LoginForm />} />
          <Route path="spicyplattersadminpage" element={<Admin />} />
          <Route path="ngoconnection" element={<NgoData />} />
         
        </Routes>
        <GoToTop />
        { <Footer />}
      </BrowserRouter>
    </>
  );
}

export default App;
