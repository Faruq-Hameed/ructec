import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from "./Pages/Contact";
import LandingPage from "./Pages/LandingPage";
import SignIn from "./Pages/SignIn";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from './Pages/About';
import Faqs from './Pages/Faqs';
import Courses from './Pages/Courses';


import Backend from './components/Backend'
import Frontend from './components/Frontend'

function App() {

  return (
    <div className="font-font bg-white02 w-full h-full">
      
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/signing" element={<SignIn/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/faqs" element={<Faqs/>}/>
          <Route path="/courses" element={<Courses/>}/>


          <Route path= '/backend-dev' element={<Backend />} />
          <Route path= '/frontend-dev' element={<Frontend />} />
        </Routes>
        <Footer/>
      </Router>
  
    
    </div>
  )
}

export default App
