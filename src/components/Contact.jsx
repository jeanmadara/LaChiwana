import './Contact.css';

export default function Contact() {
    return (
        <section id="footer" className="contact-section">
            <div className="contact-container">
                <div className="contact-col">
                    <h4>La Chiwana</h4>
                    <p>Colectivo cultural y artístico. Transformando comunidades a través del arte.</p>
                </div>

                <div className="contact-col">
                    <h4>Enlaces</h4>
                    <nav className="contact-nav">
                        <a href="#features">Proyectos</a>
                        <a href="https://www.instagram.com/COLECTIVOLACHIWANA" target="_blank" rel="noopener noreferrer">Instagram</a>
                    </nav>
                </div>

                <div className="contact-col">
                    <h4>Contacto</h4>
                    <div className="contact-info">
                        <p>colectivolachiwana@gmail.com</p>
                        <p>Olón, Santa Elena, Ecuador</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
