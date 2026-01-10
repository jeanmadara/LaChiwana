import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Convocatoria from './components/Convocatoria';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <div className="pattern-divider"></div>
        <Projects />
        <Convocatoria />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
