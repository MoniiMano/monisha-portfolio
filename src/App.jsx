import React, { lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Lazy load pages for performance
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Skills = lazy(() => import('./pages/Skills'));
const Experience = lazy(() => import('./pages/Experience'));
const Projects = lazy(() => import('./pages/Projects'));
const Achievements = lazy(() => import('./pages/Achievements'));
const Contact = lazy(() => import('./pages/Contact'));

// Loading component
const Loading = () => (
  <div className="min-h-screen flex items-center justify-center bg-black">
    <div className="relative">
      <div className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin" />
      <div className="absolute inset-0 w-16 h-16 border-4 border-cyan-500 border-b-transparent rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1s' }} />
    </div>
  </div>
);

function App() {
  return (
    <div className="bg-black text-white overflow-x-hidden">
      <Navbar />
      
      <Suspense fallback={<Loading />}>
        <main>
          <Home />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Achievements />
          <Contact />
        </main>
      </Suspense>

      <Footer />
    </div>
  );
}

export default App;
