import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importing necessary components for routing
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './pages/Home';  // Import Home.js
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AboutPage from './pages/aboutpage';
import ProjectsPage from './pages/projectspage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import ContactUsPage from './pages/ContactUsPage';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Navbar /> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage/>} />
          <Route path="/projects" element={<ProjectsPage/>} />
          <Route path='/contact' element={<ContactUsPage/>} />
          <Route path="/project/:id" element={<ProjectDetailPage />} />
      
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
