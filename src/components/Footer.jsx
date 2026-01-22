import './Footer.css';

export default function Footer() {
    return (
        <footer className="footer-simple">
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Lachiwana. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
}
