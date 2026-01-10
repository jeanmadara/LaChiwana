import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './About.css';

const images = [
    "/assets/img/About/SALANGO PARA MEDIOS (4 of 40).webp",
    "/assets/img/About/SALANGO PARA MEDIOS (5 of 40).webp",
    "/assets/img/About/SALANGO PARA MEDIOS (8 of 40).webp",
    "/assets/img/About/SALANGO PARA MEDIOS (10 of 40).webp",
    "/assets/img/About/SALANGO PARA MEDIOS (11 of 40).webp",
    "/assets/img/About/SALANGO PARA MEDIOS (13 of 40).webp",
    "/assets/img/About/SALANGO PARA MEDIOS (18 of 40).webp",
    "/assets/img/About/SALANGO PARA MEDIOS (22 of 40).webp"
];

export default function About() {
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section id="about" className="about">
            <div className="about-container">
                <motion.div
                    className="about-image-wrapper"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 1.2 }}
                >
                    <img
                        src={images[currentImage]}
                        alt={`La Chiwana Community ${currentImage + 1}`}
                    />
                    <div className="gallery-dots">
                        {images.map((_, index) => (
                            <span
                                key={index}
                                className={`dot ${index === currentImage ? 'active' : ''}`}
                                onClick={() => setCurrentImage(index)}
                            />
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    className="about-content"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2>¿Quiénes somos?</h2>
                    <div className="about-text-content">
                        <p>
                            Lachiwana es un colectivo cultural y artístico dedicado a la promoción y difusión del arte y la cultura como motores de cambio social y comunitario.
                        </p>
                        <p>
                            A través de proyectos innovadores y colaborativos, buscamos fortalecer el turismo comunitario, la identidad local y ancestral, la conservación ambiental y transformar los espacios públicos en lugares de encuentro y expresión creativa.
                        </p>
                    </div>

                    <div className="about-pillars">
                        <div className="pillar">
                            <h3>Misión</h3>
                            <p>Promover el desarrollo cultural y artístico de las comunidades a través de proyectos colaborativos, generando espacios de diálogo intercultural.</p>
                        </div>
                        <div className="pillar">
                            <h3>Visión</h3>
                            <p>Ser un referente nacional e internacional en la gestión cultural comunitaria, reconocido por el impacto social y procesos de transformación duraderos.</p>
                        </div>
                    </div>

                    <div className="about-values">
                        <h3>Nuestros Valores</h3>
                        <ul>
                            <li>Creatividad</li>
                            <li>Colaboración</li>
                            <li>Compromiso social</li>
                            <li>Respeto a la diversidad</li>
                            <li>Sostenibilidad</li>
                        </ul>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
