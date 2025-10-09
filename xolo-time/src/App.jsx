import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import CTA_section from "./components/CTA_section";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Features_full from "./pages/Features_full"; 
import Time_Tracking from "./pages/Time_Tracking";
import Active_idle_tracking from "./pages/Active_idle_tracking";
import PricingPage from "./pages/Pricing_page";
import SolutionsPage from "./pages/SolutionsPage";
import ContactUsPage from "./pages/ContactUsPage";
import SignUp from "./pages/SignUp";
import ScrollToTop from "./ScrollToTop";
import Login from "./pages/Login";

const App = () => {
  const location = useLocation();
 const hideLayout = location.pathname === "/signup" || location.pathname === "/login"; // Hide Navbar, CTA, Footer only for signup

  return (
    <>
      {!hideLayout && <Navbar />}
       <ScrollToTop/>
      <Routes>
       
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features_full />} />
        <Route path="/time-tracking" element={<Time_Tracking />} />
        <Route path="/active-idle-tracking" element={<Active_idle_tracking />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/solutions" element={<SolutionsPage />} />
        <Route path="/contact" element={<ContactUsPage />} />
        <Route path="/signup" element={<SignUp />} />
         <Route path="/login" element={<Login />} />
      </Routes>

      {!hideLayout && <CTA_section />}
      {!hideLayout && <Footer />}
    </>
  );
};

export default App;
