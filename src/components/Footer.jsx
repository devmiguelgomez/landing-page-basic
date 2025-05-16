import { Container, Row, Col } from 'react-bootstrap';

function Footer({ userData, socialIcons }) {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-dark text-light py-5" id="contact">
      <Container className="text-center">
        <p className="mb-4">¿Interesado en trabajar juntos? Contáctame a través de mis redes sociales.</p>
        
        <div className="social-icons mb-5">
          {Object.entries(userData.socialLinks).map(([platform, url]) => (
            <a key={platform} href={url} target="_blank" rel="noreferrer" aria-label={platform} className="text-light mx-3">
              {socialIcons[platform]}
            </a>
          ))}
        </div>
        
        <hr className="my-4" />
        
        <p className="text-muted">
          © {year} Desarrollado con pasión por {userData.name} | Desarrollador MERN Stack & Diseñador UI/UX
        </p>
      </Container>
    </footer>
  );
}

export default Footer;
