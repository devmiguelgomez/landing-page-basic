import { Container, Row, Col } from 'react-bootstrap';

function Header({ userData, socialIcons }) {
  return (
    <section className="hero-section section" id="home">
      <Container>
        <Row className="align-items-center justify-content-center text-center">
          <Col md={8}>
            <div className="profile-image-container">
              <img src={userData.profileImage} alt={userData.name} className="profile-image" />
            </div>
            <h1 className="display-4 fw-bold mb-3">{userData.name}</h1>
            <h2 className="mb-4">{userData.title}</h2>
            <p className="lead mb-4">{userData.tagline}</p>
          </Col>
        </Row>
        <Row className="justify-content-center text-center">
          <Col md={8}>
            <div className="social-icons">
              {Object.entries(userData.socialLinks).map(([platform, url]) => (
                <a key={platform} href={url} target="_blank" rel="noreferrer" aria-label={platform}>
                  {socialIcons[platform]}
                </a>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Header;
