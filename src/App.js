import './App.css';
import platform from 'platform';
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from './components/Navbar/Navbar'
import Home from './components/pages/Home/Home';
import { AppContext } from './components/context/Context';
import { useEffect, useState } from 'react';
import Login from './components/pages/Login/Login';
import Signup from './components/pages/Signup/Signup';
import TypesOfCare from './components/pages/TypesOfCare/TypesOfCare';
import { useRef } from 'react'
import './commonCSS.css'
import PrivacyPolicy from './components/pages/PrivacyPolicy/PrivacyPolicy';
import Terms from './components/pages/Terms/Terms';
import ForDoctors from './components/pages/ForDoctors/ForDoctors';
import Contact from './components/pages/Contact/Contact';
import About from './components/pages/About/About';
import Requests from './components/pages/Requests/Requests';
import ThankYou from './components/pages/ThankYou/ThankYou';

function App() {

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [typesDropdown, setTypesDropdown] = useState(false)
  const [loginDropdown, setLoginDropdown] = useState(false)
  const [signupDropdown, setSignupDropdown] = useState(false)

  const handleNavMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }


  return (
    <div>
      <AppContext.Provider value={[isMenuOpen, setIsMenuOpen, typesDropdown, setTypesDropdown, loginDropdown, setLoginDropdown, signupDropdown, setSignupDropdown, handleNavMenu]}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/typesOfCare" element={<TypesOfCare />} />
          <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
          <Route path='/termsConditions' element={<Terms />} />
          <Route path='/forDoctors' element={<ForDoctors />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact/' element={<Contact />} />
          <Route path='/contact/ticket/:contactID' element={<Requests />} />
          <Route path='/thankyou' element={<ThankYou />} />


        </Routes>
      </AppContext.Provider>
    </div>
  );
  // const scollToRef = useRef();

  // useEffect(() => {
  //   scollToRef.current.scrollIntoView()
  // })

  // return (
  //   <div className="container">
  //     <button onClick={() => scollToRef.current.scrollIntoView()}>
  //       Scroll
  //     </button>
  //     <div style={{ height: '150vh', background: '#cfc9f0' }}>
  //       asdf
  //     </div>
  //     <div ref={scollToRef}>You scrolled to me</div>
  //   </div>
  // );
}

export default App;