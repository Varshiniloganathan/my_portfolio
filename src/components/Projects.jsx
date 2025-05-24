import "./Projects.css"

const Projects = () => {
  const projectsData = [
    {
      title: "Personalized Career Development (LLM)",
      description:
        "Developed a career platform with modules for roadmapping, skill enhancement, and resume building. Integrated learning resources for career advancement.",
      github: "https://github.com/Malavikaa02/Personalized_Career_Development",
      image: "../Personalized.jpg",
    },
    {
      title: "Task Management System",
      description:
        "Developed a Task Management System with features for task creation, prioritization, and tracking.",
      github: "https://github.com/Varshiniloganathan/Task-Management-System.git",
      image: "../task.jpg",
    },
    {
      title: "Customer Segmentation (Machine Learning)",
      description:
        "Used K-Means clustering for customer segmentation based on behavior. Provided insights for marketing strategies.",
      github: "https://github.com/Varshiniloganathan/Customer_Segmentation",
      liveDemo: "https://customer-segmentation-user.onrender.com/",
      image: "/Customer-segment.jpg",
    },
    {
      title: "E-Commerce Sales Analysis (Power BI)",
      description: "Identified sales trends and customer behavior to improve revenue growth.",
      github: "https://github.com/Varshiniloganathan/E-Commerce-Sales-Analysis-using-PowerBI",
      image: "../Ecommerce.jpg",
    },
    {
      title: "Supermarket Sales Analysis (Power BI)",
      description: "Revealed $72 AOV and trends to optimize business operations and decision-making.",
      github: "https://github.com/Varshiniloganathan/Global-Supermarket-Sales-Analysis",
      image: "/supermarket.avif",
    },
  ]

  return (
    <div className="projects-section">
      <div className="section-container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-image">
                <img src={project.image || "/placeholder.svg"} alt={project.title} />
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="github-link">
                    GitHub Repository
                  </a>
                  {project.liveDemo && (
                    <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="demo-link">
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects
