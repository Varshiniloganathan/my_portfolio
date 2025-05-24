"use client"
import "./Hero.css"

const Hero = ({ setActiveSection }) => {
  const handleContactClick = () => {
    setActiveSection("contact")
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" })
  }

  const handleProjectsClick = () => {
    setActiveSection("projects")
    document.getElementById("projects").scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Varshini Loganathan</h1>
          <h2>Aspiring Data Analyst | AI & Data Science</h2>
          <p>
            Aiming to utilize my analytical skills and expertise in data manipulation, database management, and
            visualization to support data-driven decision-making.
          </p>
          <div className="social-links-hero">
            <a
              href="https://github.com/Varshiniloganathan"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/varshini-loganathan0427"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              LinkedIn
            </a>
          </div>
          <div className="hero-buttons">
            <button className="btn primary" onClick={handleProjectsClick}>
              View Projects
            </button>
            <button className="btn secondary" onClick={handleContactClick}>
              Contact Me
            </button>
          </div>
        </div>
        <div className="hero-image">
          <div className="profile-image">
            <img src="/mine-image.jpeg" alt="Varshini Loganathan" />
          </div>
        </div>
      </div>
      <div className="hero-scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <div>
          <span className="scroll-arrow"></span>
          <span className="scroll-arrow"></span>
          <span className="scroll-arrow"></span>
        </div>
      </div>
    </div>
  )
}

export default Hero
