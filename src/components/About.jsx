import { Container, Row, Col, Card } from 'react-bootstrap';

function About({ userData }) {
  return (
    <section className="about-section section" id="about">
      <Container>
        <Row className="justify-content-center">
          <Col md={10} lg={8} className="text-center mb-5">
            <h2 className="gradient-text display-5 mb-4">Sobre Mí</h2>
            <div className="divider mb-4"></div>
            <p className="lead">{userData.about}</p>
          </Col>
        </Row>

        <Row>
          <Col md={12}>
            <Card className="border-0 shadow-sm">
              <Card.Body className="p-4">
                <h3 className="mb-4">Habilidades y Tecnologías</h3>
                <Row>
                  {userData.skills.map((skill, index) => (
                    <Col key={index} md={6} className="mb-3">
                      <div className="d-flex align-items-center">
                        <div className="me-3">
                          <span className="badge bg-primary rounded-circle p-2">✓</span>
                        </div>
                        <div>{skill}</div>
                      </div>
                    </Col>
                  ))}
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
