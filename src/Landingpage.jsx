import React, { useState,useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PageLoader from "./components/pageLoader";
import DemoForm from "./components/DemoForm";
import ContactForm from "./components/ContactForm";
import { Home } from "./Pages/Home";
import TermsAndConditions from "./Pages/TermsandCondition";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



export default function Landingpages() {
  const [openDemoForm, setOpenDemoForm] = useState(false);
  const [openContactForm, setOpenContactForm] = useState(false);
const [loading, setLoading] = useState(true);

useEffect(() => {
  const timer = setTimeout(() => setLoading(false), 1500);
  return () => clearTimeout(timer);
}, []);

if (loading) return <PageLoader />;

  return (
     <Router>
    <div className="min-h-screen bg-white-50 text-gray-900 antialiased">
      
      <Navbar 
        onOpenForm={() => setOpenDemoForm(true)} 
        onOpenContactForm={() => setOpenContactForm(true)} 
      />
      {openDemoForm && <DemoForm onClose={() => setOpenDemoForm(false)} />}
      {openContactForm && <ContactForm onClose={() => setOpenContactForm(false)} />}
        <main>
          <Routes>
            <Route path="/" element={<Home onOpenContactForm={() => setOpenContactForm(true)}/>} />
            <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />


          </Routes>
        </main>
        
    
      <Footer onOpenForm={() => setOpenDemoForm(true)} onOpenContactForm={() => setOpenContactForm(true)}/>
    </div>
    </Router>
  );
}
