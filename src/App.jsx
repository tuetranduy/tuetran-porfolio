import { useState } from 'react';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import Preloader from './components/common/Preloader';
import CustomCursor from './components/common/CustomCursor';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Certifications from './components/sections/Certifications';
import Blog from './components/sections/Blog';
import Testimonials from './components/sections/Testimonials';
import Contact from './components/sections/Contact';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      {/* Preloader */}
      <Preloader onComplete={() => setIsLoaded(true)} />
      
      {/* Custom Cursor */}
      <CustomCursor />
      
      {/* Noise overlay for premium texture */}
      <div className="noise-overlay" aria-hidden="true" />
      
      <div className="min-h-screen bg-slate-950 text-white">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Certifications />
          <Testimonials />
          <Blog />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
