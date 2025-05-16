import { Container, Row, Col, Card, Badge, Button } from 'react-bootstrap';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

function Projects({ userData }) {
  return (
    <section className="projects-section section" id="projects">
      <Container>
        <Row className="justify-content-center">
          <Col md={10} lg={8} className="text-center mb-5">
            <h2 className="gradient-text display-5 mb-4">Mis Proyectos</h2>
            <div className="divider mb-4"></div>
            <p className="lead">Estos son algunos de los proyectos en los que he trabajado recientemente.</p>
          </Col>
        </Row>

        <Row className="g-4">
          {userData.projects.map(project => (
            <Col key={project.id} md={6} lg={4}>
              <Card className="project-card h-100">
                <div className="ratio ratio-16x9">
                  <img 
                    src={project.imageUrl} 
                    className="card-img-top" 
                    alt={project.title} 
                  />
                </div>
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                  <div className="mt-3 mb-3">
                    {project.technologies.map((tech, index) => (
                      <Badge key={index} bg="primary" className="me-2 mb-2">{tech}</Badge>
                    ))}
                  </div>
                  <div className="d-flex justify-content-between mt-auto pt-3">
                    <Button 
                      variant="dark" 
                      size="sm" 
                      href={project.githubUrl} 
                      target="_blank"
                      className="d-flex align-items-center"
                    >
                      <FaGithub className="me-2" /> Código
                    </Button>
                    <Button 
                      variant="primary" 
                      size="sm" 
                      href={project.liveUrl} 
                      target="_blank"
                      className="d-flex align-items-center"
                    >
                      <FaExternalLinkAlt className="me-2" /> Ver Demo
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Projects;
