import { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectDetail from './ProjectDetail';
import './Projects.css';

const projectsData = [
    {
        id: 'la-colmena',
        title: "La Colmena",
        category: "Muralismo Comunitario",
        tagline: "Residencia Artística de Muralismo Contemporáneo",
        image: "assets/img/DSC04679.webp",
        description: "Proyecto artístico que reúne a artistas internacionales y locales para transformar el espacio público de Olón.",
        longDescription: "La Colmena es una residencia intensiva de 23 días diseñada para proporcionar a artistas emergentes herramientas técnicas de muralismo y metodologías de vinculación comunitaria. Durante el proceso, se rescata la identidad ancestral costeña y se promueve la conciencia ambiental.",
        dates: "1 al 23 de Marzo, 2026",
        location: "Olón, Santa Elena, Ecuador",
        goals: [
            "Participación de 10 artistas residentes seleccionados.",
            "Producción de 11 murales de gran formato en espacios públicos.",
            "Talleres comunitarios de vinculación artística.",
            "Revalorización de la identidad cultural ancestral."
        ],
        stats: [
            { label: "Murals", value: "11" },
            { label: "Artistas", value: "15" }
        ],
        gallery: [
            "assets/img/Murales/CDP_8076.webp",
            "assets/img/Murales/CDP_8146.webp",
            "assets/img/Murales/CDP_8262.webp",
            "assets/img/Murales/CDP_8273.webp",
            "assets/img/Murales/CDP_0655.webp",
            "assets/img/Murales/WhatsApp Image 2024-02-29 at 9.36.58 PM(2).webp"
        ]
    },
    {
        id: 'espacio-cultural',
        title: "Espacio Cultural Lachiwana",
        category: "Centro Comunitario",
        tagline: "Un oasis de creatividad y encuentro comunitario",
        image: "assets/img/LaChiwana/DSC04666.webp",
        description: "Centro dedicado a la promoción del arte y la cultura en Olón, ofreciendo talleres y formación para todas las edades.",
        longDescription: "El Espacio Cultural Lachiwana es un punto de encuentro multidisciplinario que desde 2020 impulsa el tejido social de Olón. Es una plataforma para artistas locales e internacionales, ofreciendo desde exposiciones de arte contemporáneo hasta talleres educativos y festivales comunitarios.",
        dates: "Abierto todo el año",
        location: "Barrio Los Palmares, Olón, Santa Elena",
        goals: [
            "Plataforma de exposición para artistas locales y nacionales.",
            "Programación educativa continua en artes plásticas y escénicas.",
            "Fomentar el acceso democrático a la cultura.",
            "Espacio de intercambio para la identidad ancestral y contemporánea."
        ],
        stats: [
            { label: "Talleres/año", value: "24+" },
            { label: "Artistas", value: "50+" }
        ],
        gallery: [
            "assets/img/LaChiwana/DSC04666.webp",
            "assets/img/LaChiwana/DSC04679.webp",
            "assets/img/LaChiwana/GOPR4333.webp",
            "assets/img/LaChiwana/WhatsApp Image 2023-10-20 at 2.09.27 PM.webp",
            "assets/img/LaChiwana/WhatsApp Image 2024-02-29 at 11.05.59 PM.webp",
            "assets/img/LaChiwana/WhatsApp Image 2024-02-29 at 11.06.07 PM(1).webp"
        ]
    }
];

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <section id="features" className="projects">
            <div className="projects-header">
                <h2>Proyectos Insignia</h2>
                <p>Iniciativas que transforman comunidades a través del arte y la gestión cultural.</p>
            </div>

            <div className="projects-grid">
                {projectsData.map((project, index) => (
                    <motion.div
                        key={project.id}
                        className="project-card"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ delay: index * 0.1, duration: 1.0 }}
                    >
                        <div className="project-image-container">
                            <img src={project.image} alt={project.title} className="project-image" />
                            <div className="project-overlay">
                                <button
                                    onClick={() => setSelectedProject(project)}
                                    className="view-project-btn"
                                >
                                    Ver Proyecto
                                </button>
                            </div>
                        </div>
                        <div className="project-info">
                            <span className="project-label">{project.category}</span>
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <button
                                onClick={() => setSelectedProject(project)}
                                className="project-link-btn"
                            >
                                Leer más →
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>

            {selectedProject && (
                <ProjectDetail
                    project={selectedProject}
                    onClose={() => setSelectedProject(null)}
                />
            )}
        </section>
    );
}
