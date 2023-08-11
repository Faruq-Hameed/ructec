import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from "./Pages/Contact";
import LandingPage from "./Pages/LandingPage";
import SignIn from "./Pages/SignIn";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {

  return (
    <div className="font-font bg-white02 w-full h-full">
      
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/signin" element={<SignIn/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
        <Footer/>
      </Router>
  
    
    </div>
  )
}

export default App
