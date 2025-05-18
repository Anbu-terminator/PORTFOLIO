interface Project {
  title: string;
  date: string;
  description: string;
  image: string;
  technologies: string[];
  links: {
    demo?: string;
    github?: string;
  }
}

const projects: Project[] = [
  {
    title: "Personal Portfolio",
    date: "April 2024",
    description: "A responsive website showcasing skills, projects, and achievements. Built with modern web technologies.",
    image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=300&q=80",
    technologies: ["HTML", "CSS", "JavaScript", "GSAP"],
    links: {
      demo: "#",
      github: "#"
    }
  },
  {
    title: "Educational Website with ERP",
    date: "Nov - Dec 2024",
    description: "Created for VLGE Pvt. Ltd., with student/trainer management and secure credential verification.",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=300&q=80",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    links: {
      demo: "https://valuelearn.in",
      github: "#"
    }
  },
  {
    title: "Electrooculography",
    date: "Dec 2024",
    description: "Eye movement simulation using PSpice and Tinkercad for assistive tech control.",
    image: "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=300&q=80",
    technologies: ["PSpice", "Tinkercad", "Arduino", "PCB Design"],
    links: {
      demo: "#",
      github: "#"
    }
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-heading">
          <span className="number">04.</span> Projects
          <span className="line"></span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg" 
              data-animation="project-card"
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <span className="text-xs font-medium bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300 py-1 px-2 rounded">{project.date}</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 py-1 px-2 rounded">{tech}</span>
                  ))}
                </div>
                <div className="flex gap-3">
                  {project.links.demo && (
                    <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-blue-700 transition-colors duration-300">
                      <i className="fa-solid fa-link"></i>
                    </a>
                  )}
                  {project.links.github && (
                    <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-blue-700 transition-colors duration-300">
                      <i className="fa-brands fa-github"></i>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
