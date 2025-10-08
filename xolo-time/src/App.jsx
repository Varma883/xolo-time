import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar_2 from "./components/Navbar_2";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
import Hero_2 from "./components/Hero_2";
import Features from "./components/Features";
import Xolo_intro from "./components/Xolo_intro";
import Highlights from "./components/Highlights";
import Pricing from "./components/Pricing";
import CTA_section from "./components/CTA_section";
import Navbar from "./components/Navbar";
import Features_full from "./pages/Features_full"; // your routed page
import Time_Tracking from "./pages/Time_Tracking";
import Home from "./pages/Home";
import Active_idle_tracking from "./pages/Active_idle_tracking";
import PricingPage from "./pages/Pricing_page";
import SolutionsPage from "./pages/SolutionsPage";
import ResourcesPage from './pages/ResourcesPage';


const App = () => {
  return (
    <>
      <Navbar/>
      {/* <Navbar_2 /> */}

      <Routes>
        <Route
          path="/"
          element={
            <Home/>
          }
        />

        <Route path="/features" element={<Features_full />} />
        <Route path="/time-tracking" element={<Time_Tracking />} />
        <Route path="/active-idle-tracking" element={<Active_idle_tracking />} />
        <Route path="/pricing" element={<PricingPage/>} />
         <Route path="/solutions" element={<SolutionsPage />} />
        {/* <Route path="/resources" element={<ResourcesPage  />} /> */}

      </Routes>
     <CTA_section /> 
      <Footer />
    </>
  );
};

export default App;
