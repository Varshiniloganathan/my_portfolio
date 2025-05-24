import "./Skills.css"

const Skills = () => {
  const skillCategories = [
    {
      category: "Languages",
      skills: ["Java", "C", "Python"],
    },
    {
      category: "Database & Data Analysis & Machine Learning",
      skills: ["SQL", "Power BI","Tableau", "Numpy", "Pandas", "Scikit-learn"],
    },
    {
      category: "Web Development",
      skills: ["HTML/CSS", "JavaScript", "Node.js with Express.js", "MongoDB(Schema&Model creation"],
    },
    {
      category: "Tools",
      skills: ["Postman", "Jupyter Notebook","VS Code", "Git/GitHub"],
    },
  ]

  return (
    <div className="skills-section">
      <div className="section-container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-container">
          {skillCategories.map((category, index) => (
            <div className="skill-category" key={index}>
              <h3>{category.category}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div className="skill-item" key={skillIndex}>
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills
