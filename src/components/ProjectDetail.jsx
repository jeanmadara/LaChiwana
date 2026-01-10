import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, MapPin, Target, Users } from 'lucide-react';
import './ProjectDetail.css';

export default function ProjectDetail({ project, onClose }) {
    if (!project) return null;

    return (
        <AnimatePresence>
            <motion.div
                className="project-modal-overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
            >
                <motion.div
                    className="project-modal-content"
                    initial={{ scale: 0.9, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.9, opacity: 0, y: 20 }}
                    onClick={e => e.stopPropagation()}
                >
                    <button className="modal-close" onClick={onClose}>
                        <X size={24} />
                    </button>

                    <div className="modal-grid">
                        <div className="modal-main-info">
                            <span className="project-category">{project.category}</span>
                            <h2>{project.title}</h2>
                            <p className="project-tagline">{project.tagline}</p>

                            <div className="project-meta">
                                <div className="meta-item">
                                    <Calendar size={18} />
                                    <span>{project.dates}</span>
                                </div>
                                <div className="meta-item">
                                    <MapPin size={18} />
                                    <span>{project.location}</span>
                                </div>
                            </div>

                            <div className="project-description-long">
                                <h3>Sobre el Proyecto</h3>
                                <p>{project.longDescription}</p>
                            </div>

                            <div className="project-goals">
                                <h3><Target size={20} /> Objetivos Clave</h3>
                                <ul>
                                    {project.goals.map((goal, i) => (
                                        <li key={i}>{goal}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="modal-gallery-side">
                            <h3><Users size={20} /> Impacto y Galería</h3>
                            <div className="gallery-grid">
                                {project.gallery.map((img, i) => (
                                    <motion.div
                                        key={i}
                                        className="gallery-item"
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        <img src={img} alt={`Galería ${project.title} ${i}`} />
                                    </motion.div>
                                ))}
                            </div>
                            <div className="project-impact-stats">
                                {project.stats.map((stat, i) => (
                                    <div key={i} className="stat-card">
                                        <span className="stat-number">{stat.value}</span>
                                        <span className="stat-label">{stat.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}
