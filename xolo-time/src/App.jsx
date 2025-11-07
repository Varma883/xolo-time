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
import Screenshot_monitoring from './pages/Screenshot_monitoring'
import Attendece_Tracking from "./pages/Attendece_Tracking";
import Productivity_Analysis from "./pages/Productivity_Analysis";
import Project_task_management from "./pages/Project_task_management";
import App_Url_Monitoring from "./pages/App_Url_Monitoring";
import Employee_Scheduling from "./pages/Employee_Scheduling";
import Reports from "./pages/Reports";

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
        <Route path="/screenshot-monitoring" element={<Screenshot_monitoring/>} />
        <Route path="/attendece-tracking" element={<Attendece_Tracking/>} />
        <Route path="/productivity-analysis" element={<Productivity_Analysis/>} />
        <Route path="/project-task-management" element={<Project_task_management/>} />
        <Route path="/app-url-monitoring" element={<App_Url_Monitoring/>} />
        <Route path="/employee-scheduling" element={<Employee_Scheduling/>} />
        <Route path="/reports" element={<Reports />} />
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
