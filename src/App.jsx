"use client"

import { useState } from "react"
import "./App.css"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Education from "./components/Education"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Internship from "./components/Internship"
import Honors from "./components/Honors"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function App() {
  const [activeSection, setActiveSection] = useState("home")

  return (
    <div className="app">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <main>
        <section id="home">
          <Hero setActiveSection={setActiveSection} />
        </section>
        <section id="education">
          <Education />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="experience">
          <Internship />
        </section>
        <section id="honors">
          <Honors />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App
