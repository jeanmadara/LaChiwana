import { motion } from 'framer-motion';
import './Convocatoria.css';

export default function Convocatoria() {
    return (
        <section id="convocatoria" className="convocatoria">
            <div className="pattern-waves-divider" style={{ opacity: 0.4, marginBottom: '2rem' }}></div>
            <div className="convocatoria-container">
                <motion.div
                    className="convocatoria-header"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 1.2 }}
                >
                    <div className="logo-section">
                        <img src="/assets/img/DSC04679.webp" alt="La Colmena Logo" className="colmena-mini-logo" />
                        <span>LA COLMENA</span>
                    </div>
                    <h1>CONVOCATORIA</h1>
                    <h2>"LA COLMENA: RESIDENCIA ARTÍSTICA EN OLÓN"</h2>
                </motion.div>

                <div className="convocatoria-grid">
                    <motion.div
                        className="convocatoria-main-text"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 1.2 }}
                    >
                        <p className="intro">
                            El Colectivo y Espacio Cultural Lachiwana, con el apoyo del Instituto de Fomento de las Artes, Innovación y Creatividades (IFAIC), invita a muralistas emergentes de todo el Ecuador a participar en <strong>"La Colmena: Residencia Artística de Muralismo en Olón"</strong>.
                        </p>

                        <p>
                            Esta edición 2026 reunirá a <strong>10 artistas emergentes ecuatorianos</strong> quienes recibirán herramientas técnicas bajo la mentoría del reconocido artista urbano <strong>Apitatán</strong>.
                        </p>

                        <div className="itinerary-box">
                            <h3>Exploración en Territorio</h3>
                            <p>Conoceremos proyectos y sitios arqueológicos, naturales y turísticos como:</p>
                            <ul>
                                <li>Comuna Olón</li>
                                <li>Museo de Valdivia</li>
                                <li>Museo de las Calaveras</li>
                                <li>Museo Amantes de Sumpa</li>
                                <li>Museo de Salango</li>
                                <li>Museo Agua Blanca</li>
                                <li>Snorkel en Ayangue</li>
                            </ul>
                        </div>
                    </motion.div>

                    <motion.div
                        className="convocatoria-details"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 1.2 }}
                    >
                        <div className="detail-card">
                            <h3>Resultados Esperados</h3>
                            <ul>
                                <li><strong>11 murales:</strong> 10 individuales y 1 colectivo guiado por Apitatán.</li>
                                <li>Memorias y Libro Digital del proyecto.</li>
                                <li>Materiales audiovisuales de la herencia cultural.</li>
                            </ul>
                        </div>

                        <div className="calendar-card">
                            <h3>Cronograma de Selección</h3>
                            <div className="date-item highlight">
                                <span className="label">Cierre de Aplicaciones:</span>
                                <span className="value">Domingo 25 de Enero, 2026 (24h00)</span>
                            </div>
                            <div className="date-item">
                                <span className="label">Anuncio de Seleccionados:</span>
                                <span className="value">Febrero, 2026</span>
                            </div>
                            <div className="date-item">
                                <span className="label">Inicio de Residencia:</span>
                                <span className="value">2 de Marzo, 2026</span>
                            </div>
                        </div>

                        <div className="apply-section">
                            <p>Buscamos artistas visuales que investiguen desde el territorio, la memoria y la identidad colectiva.</p>
                            <div className="cta-group">
                                <a href="https://docs.google.com/forms/d/e/1FAIpQLSebN80NP4ueOoekgVpjKdecN9vE31kAZKXWwJ8PaqhPTW97Aw/viewform" target="_blank" rel="noreferrer" className="cta-button">
                                    Aplicar Ahora
                                </a>
                                <a href="https://drive.google.com/file/d/1FY3JvlItkls5rMx9RRbD5cx_3RuqeaLM/view" target="_blank" rel="noreferrer" className="cta-button secondary">
                                    Bases Técnicas
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
            <div className="pattern-divider" style={{ opacity: 0.3, marginTop: '4rem', marginBottom: 0 }}></div>
        </section>
    );
}
