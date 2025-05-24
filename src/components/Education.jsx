import "./Education.css"

const Education = () => {
  const educationData = [
    {
      degree: "B.Tech in AI & Data Science",
      institution: "Kongu Engineering College",
      year: "2022–2026",
      score: "CGPA: 8.50/10",
    },
    {
      degree: "HSC",
      institution: "Vivekananda Vidyalaya Matric Hr. Sec. School",
      year: "2022",
      score: "90%",
    },
    {
      degree: "SSLC",
      institution: "Vivekananda Vidyalaya Matric Hr. Sec. School",
      year: "2020",
      score: "99.6%",
    },
  ]

  return (
    <div className="education-section">
      <div className="section-container">
        <h2 className="section-title">Education</h2>
        <div className="education-timeline">
          {educationData.map((edu, index) => (
            <div className="education-card" key={index}>
              <div className="education-year">{edu.year}</div>
              <div className="education-content">
                <h3>{edu.degree}</h3>
                <p className="institution">{edu.institution}</p>
                <p className="score">{edu.score}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Education
