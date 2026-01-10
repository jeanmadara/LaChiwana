import { motion } from 'framer-motion';
import './Hero.css';

export default function Hero() {
    return (
        <section id="hero" className="hero">
            <div className="hero-background">
                <img src="/assets/img/DSC04645.webp" alt="La Chiwana Landscape" />
            </div>

            <motion.div
                className="hero-content"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
            >
                <motion.h1
                    className="hero-title"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 1.2 }}
                >
                    LA CHIWANA
                </motion.h1>
                <motion.p
                    className="hero-subtitle"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 1.2 }}
                >
                    Promoción y difusión del arte y la cultura como motores de cambio social y comunitario.
                </motion.p>

                <motion.div
                    className="hero-buttons"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ delay: 0.6, duration: 1.2 }}
                >
                    <a href="#convocatoria" className="btn btn-convocatoria">Aplica a la Colmena 2026</a>
                    <a href="#features" className="btn-outline">Proyectos</a>
                </motion.div>
            </motion.div>
            <div className="pattern-waves-divider" style={{ position: 'absolute', bottom: 0, left: 0 }}></div>
        </section>
    );
}
