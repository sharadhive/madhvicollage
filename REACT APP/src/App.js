import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import TrustInfo from './components/TrustInfo';
import Home from './components/Home';
import Chairman from './components/Chairman';
import Contact from './components/Contact';
import CoursesOffered from './components/CoursesOffered';
import Principal from './components/Principal';
import Faculties from './components/Faculties';
import Event from './components/Event';
import BCom from './components/BCom';  // Import the B.Com page
import BA from './components/Ba';
import BSC from './components/BSC';
import SecondarySection from './components/SecondarySection'; // Import Secondary Section
import JuniorCollege from './components/JuniorCollege'; // Import Junior College
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us/trust-info" element={<TrustInfo />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about-us/chairman" element={<Chairman />} />
          <Route path="/courses-offered" element={<CoursesOffered />} />
          <Route path="/about-us/principal" element={<Principal />} />
          <Route path="/faculties" element={<Faculties />} />
          <Route path="/event" element={<Event />} />
          <Route path="/bcom" element={<BCom />} />  {/* Add B.Com page route */}
          <Route path="/ba" element={<BA />} />
          <Route path="/bsc" element={<BSC />} />
          
            <Route path="/secondary" element={<SecondarySection />} />
            <Route path="/junior-college" element={<JuniorCollege />} />

        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
