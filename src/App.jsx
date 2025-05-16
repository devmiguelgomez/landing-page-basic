import { useState } from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Footer from './components/Footer'
import { FaGithub, FaLinkedin, FaGoogle } from 'react-icons/fa'

// Importa aquí tus imágenes directamente desde las carpetas
// Ejemplo:
// import profileImage from './assets/profile.jpg'
// import project1Image from './assets/project1.jpg'
// import project2Image from './assets/project2.jpg'
// import project3Image from './assets/project3.jpg'

function App() {
  const [userData] = useState({
    name: 'Miguel Gómez',
    title: 'Desarrollador MERN Stack & Diseñador UI/UX',
    tagline: 'Transformando ideas en experiencias digitales 🚀',
    // Reemplaza estas URLs con las rutas a tus imágenes locales:
    profileImage: '/assets/profile.jpeg', // Debe estar en la carpeta public/assets/
    about: `Desarrollador MERN Stack especializado en crear aplicaciones web modernas con React, Node.js, MongoDB y Express. Me apasiona crear soluciones tecnológicas elegantes y funcionales que resuelvan problemas reales.`,
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/devmiguelgomez/',
      github: 'https://github.com/devmiguelgomez',
      google: 'mailto:devmiguelgomez@gmail.com'
    },
    projects: [
      {
        id: 1,
        title: 'E-commerce Platform',
        description: 'Plataforma completa de comercio electrónico con carrito de compras, pagos y panel de administración.',
        technologies: ['React', 'Node.js', 'MongoDB', 'Stripe API'],
        imageUrl: '/assets/project1.jpg', // Debe estar en la carpeta public/assets/
        githubUrl: 'https://github.com/miguel-gomez/ecommerce-platform',
        liveUrl: 'https://ecommerce-example.app'
      },
      {
        id: 2,
        title: 'Chat en Tiempo Real',
        description: 'Aplicación de chat en tiempo real con salas privadas y públicas.',
        technologies: ['Socket.io', 'Express', 'React', 'MongoDB'],
        imageUrl: '/assets/project2.jpg', // Debe estar en la carpeta public/assets/
        githubUrl: 'https://github.com/devmiguelgomez',
        liveUrl: 'https://realtime-example.app'
      },
      {
        id: 3,
        title: 'Dashboard Analítico',
        description: 'Dashboard para visualización de datos con gráficos interactivos.',
        technologies: ['React', 'D3.js', 'Node.js', 'PostgreSQL'],
        imageUrl: '/assets/project3.jpg', // Debe estar en la carpeta public/assets/
        githubUrl: 'https://github.com/devmiguelgomez',
        liveUrl: 'https://analytics-example.app'
      },
            {
        id: 4,
        title: 'Dashboard Analítico',
        description: 'Dashboard para visualización de datos con gráficos interactivos.',
        technologies: ['React', 'D3.js', 'Node.js', 'PostgreSQL'],
        imageUrl: '/assets/project1.jpg', // Debe estar en la carpeta public/assets/
        githubUrl: 'https://github.com/devmiguelgomez',
        liveUrl: 'https://analytics-example.app'
      }
    ],
    skills: [
      'Desarrollo Frontend con React',
      'Desarrollo Backend con Node.js',
      'MongoDB y Bases de datos NoSQL',
      'UI/UX Design',
      'MERN Stack completo',
      'Hola compañeros :D'
    ]
  });

  // Componentes de iconos sociales
  const socialIcons = {
    linkedin: <FaLinkedin />,
    github: <FaGithub />,
    google: <FaGoogle />
  };

  return (
    <>
      <Navbar bg="light" expand="lg" fixed="top" className="shadow-sm">
        <Container>
          <Navbar.Brand href="#home">Mi Portafolio</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Inicio</Nav.Link>
              <Nav.Link href="#about">Sobre Mí</Nav.Link>
              <Nav.Link href="#projects">Proyectos</Nav.Link>
              <Nav.Link href="#contact">Contacto</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Header 
        userData={userData} 
        socialIcons={socialIcons}
      />
      <About userData={userData} />
      <Projects 
        userData={userData} 
      />
      <Footer userData={userData} socialIcons={socialIcons} />
    </>
  )
}

export default App
