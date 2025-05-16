# Portfolio Landing Page

Una elegante landing page para mostrar tu portfolio profesional, desarrollada con React, Vite y Bootstrap.


## 🚀 Características

- **Diseño Responsive**: Se adapta perfectamente a dispositivos móviles, tablets y desktops
- **Sección Hero**: Muestra tu nombre, título profesional y una imagen de perfil
- **Sobre Mí**: Sección para describir quién eres y tus habilidades profesionales
- **Proyectos**: Galería de proyectos con imágenes, descripción, tecnologías y enlaces
- **Contacto**: Sección con enlaces a tus redes sociales profesionales

## 🛠️ Tecnologías Utilizadas

- **React**: Biblioteca para construir interfaces de usuario
- **Vite**: Herramienta de compilación moderna y rápida
- **Bootstrap**: Framework CSS para un diseño responsive
- **React Bootstrap**: Componentes Bootstrap para React
- **React Icons**: Iconos vectoriales populares para React

## 📁 Estructura del Proyecto

portfolio-landing/  
│  
├── public/  
│   └── assets/ # Imágenes del proyecto (profile.jpg, project1.jpg, etc.)
│  
├── src/  
│   ├── components/ # Componentes React  
│   │   ├── Header.jsx # Componente de encabezado con info personal  
│   │   ├── About.jsx # Componente de sección "Sobre Mí"  
│   │   ├── Projects.jsx # Componente para mostrar proyectos  
│   │   └── Footer.jsx # Pie de página con información de contacto  
│   │  
│   ├── App.jsx # Componente principal que integra todo  
│   ├── main.jsx # Punto de entrada de React  
│   └── index.css # Estilos globales  
│  
├── index.html # HTML principal  
├── package.json # Dependencias y scripts  
└── vite.config.js # Configuración de Vite


## 💼 Personalización

El proyecto está diseñado para ser fácilmente personalizable:

### Datos Personales

Puedes modificar toda la información personal editando el objeto `userData` en `src/App.jsx`:

- **Nombre y título**: Modifica `name`, `title` y `tagline`
- **Imagen de perfil**: Actualiza la ruta en `profileImage`
- **Bio**: Cambia el texto en `about`
- **Redes Sociales**: Edita los enlaces en `socialLinks`
- **Habilidades**: Agrega o elimina elementos en el array `skills`

### Proyectos

Cada proyecto en el array `projects` contiene:

- **Título**: Nombre del proyecto
- **Descripción**: Breve explicación del proyecto
- **Tecnologías**: Array de tecnologías utilizadas
- **Imagen**: Ruta a la imagen representativa del proyecto
- **Enlaces**: URLs al repositorio (GitHub) y al proyecto desplegado (Demo)

### Estilos

Los estilos son personalizables mediante:

- **Variables CSS**: Colores principales, fondos, etc. en `:root` dentro de `index.css`
- **Bootstrap**: Utiliza las clases de Bootstrap para personalizar el diseño

