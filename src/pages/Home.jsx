import { useCallback, useState } from 'react';
import Navbar from '../components/layout/Navbar';
import LoaderScreen from '../components/layout/LoaderScreen';
import Hero from '../components/hero/Hero';
import About from '../components/about/About';
import Skills from '../components/skills/Skills';
import Projects from '../components/projects/Projects';
import Experience from '../components/experience/Experience';
import Certificates from '../components/certificates/Certificates';
import Achievements from '../components/achievements/Achievements';
import Contact from '../components/contact/Contact';
import Footer from '../components/footer/Footer';
import { useLenisSmoothScroll } from '../hooks/useLenisSmoothScroll';

function Home() {
  const [loading, setLoading] = useState(true);

  useLenisSmoothScroll();

  const handleLoaderComplete = useCallback(() => {
    setLoading(false);
  }, []);

  return (
    <div className="relative overflow-x-hidden bg-[#FFFDF7] text-[#1E293B]">
      {loading && <LoaderScreen onComplete={handleLoaderComplete} />}

      <div className="relative">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certificates />
        <Achievements />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
