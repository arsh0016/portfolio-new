import React, { Suspense, useMemo } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';

const Home = React.lazy(() => import('./pages/Home'));
const AboutPage = React.lazy(() => import('./pages/aboutpage'));
const ProjectsPage = React.lazy(() => import('./pages/projectspage'));
const ProjectDetailPage = React.lazy(() => import('./pages/ProjectDetailPage'));
const ContactUsPage = React.lazy(() => import('./pages/ContactUsPage'));

const App = () => {
  const routes = useMemo(
    () => [
      { path: '/', component: Home },
      { path: '/about', component: AboutPage },
      { path: '/projects', component: ProjectsPage },
      { path: '/contact', component: ContactUsPage },
      { path: '/projects/:id', component: ProjectDetailPage },
    ],
    []
  );

  return (
    <Router>
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {routes.map(({ path, component: Component }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  );
};

export default App;
