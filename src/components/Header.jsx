"use client"

import { useState, useEffect } from "react"
import "./Header.css"

const Header = ({ activeSection, setActiveSection }) => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }

      // Update active section based on scroll position
      const sections = document.querySelectorAll("section")
      sections.forEach((section) => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.clientHeight
        if (window.scrollY >= sectionTop - 200 && window.scrollY < sectionTop + sectionHeight - 200) {
          setActiveSection(section.id)
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [setActiveSection])

  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId)
    setMenuOpen(false)
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" })
  }

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="header-container">
        <div className="logo">
          <h1>VL</h1>
        </div>
        <div className={`menu-toggle ${menuOpen ? "active" : ""}`} onClick={() => setMenuOpen(!menuOpen)}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <nav className={`nav ${menuOpen ? "open" : ""}`}>
          <ul>
            <li className={activeSection === "home" ? "active" : ""}>
              <a href="#home" onClick={() => handleNavClick("home")}>
                Home
              </a>
            </li>
            <li className={activeSection === "education" ? "active" : ""}>
              <a href="#education" onClick={() => handleNavClick("education")}>
                Education
              </a>
            </li>
            <li className={activeSection === "skills" ? "active" : ""}>
              <a href="#skills" onClick={() => handleNavClick("skills")}>
                Skills
              </a>
            </li>
            <li className={activeSection === "projects" ? "active" : ""}>
              <a href="#projects" onClick={() => handleNavClick("projects")}>
                Projects
              </a>
            </li>
            <li className={activeSection === "experience" ? "active" : ""}>
              <a href="#experience" onClick={() => handleNavClick("experience")}>
                Experience
              </a>
            </li>
            <li className={activeSection === "honors" ? "active" : ""}>
              <a href="#honors" onClick={() => handleNavClick("honors")}>
                Honors
              </a>
            </li>
            <li className={activeSection === "contact" ? "active" : ""}>
              <a href="#contact" onClick={() => handleNavClick("contact")}>
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
