import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('hero');

    const toggleMenu = () => setIsOpen(!isOpen);

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['hero', 'about', 'features', 'convocatoria', 'footer'];
            const scrollPosition = window.scrollY + 150; // Umbral de detección

            const current = sections.find((section, index) => {
                const element = document.getElementById(section);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetBottom = offsetTop + element.offsetHeight;

                    // Si es la última sección o el scroll está dentro del elemento
                    return scrollPosition >= offsetTop && scrollPosition < offsetBottom;
                }
                return false;
            });

            if (current) {
                setActiveSection(current);
            }

            // Forzar 'footer' si llegamos al final de la página (útil para secciones cortas al final)
            const isAtBottom = (window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 100;
            if (isAtBottom) {
                setActiveSection('footer');
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Ejecutar al inicio
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className="navbar">
            <div className="navbar-container">
                {/* Logo */}
                <a href="#hero" className="navbar-logo">
                    LACHIWANA
                </a>

                {/* Desktop Menu */}
                <div className="navbar-links desktop">
                    <a href="#hero" className={`nav-link ${activeSection === 'hero' ? 'active' : ''}`}>Inicio</a>
                    <a href="#about" className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}>Nosotros</a>
                    <a href="#features" className={`nav-link ${activeSection === 'features' ? 'active' : ''}`}>Proyectos</a>
                    <a href="#convocatoria" className={`nav-link ${activeSection === 'convocatoria' ? 'active' : ''}`}>Convocatoria</a>
                    <a href="#footer" className={`nav-link ${activeSection === 'footer' ? 'active' : ''}`}>
                        Contacto
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button onClick={toggleMenu} className="mobile-toggle">
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mobile-menu"
                    >
                        <div className="mobile-menu-links">
                            <a href="#hero" onClick={toggleMenu} className={`mobile-link ${activeSection === 'hero' ? 'active' : ''}`}>Inicio</a>
                            <a href="#about" onClick={toggleMenu} className={`mobile-link ${activeSection === 'about' ? 'active' : ''}`}>Nosotros</a>
                            <a href="#features" onClick={toggleMenu} className={`mobile-link ${activeSection === 'features' ? 'active' : ''}`}>Proyectos</a>
                            <a href="#convocatoria" onClick={toggleMenu} className={`mobile-link ${activeSection === 'convocatoria' ? 'active' : ''}`}>Convocatoria</a>
                            <a href="#footer" onClick={toggleMenu} className={`mobile-link ${activeSection === 'footer' ? 'active' : ''}`}>Contacto</a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
