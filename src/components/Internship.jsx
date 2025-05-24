import "./Internship.css"

const Internship = () => {
  return (
    <div className="internship-section">
      <div className="section-container">
        <h2 className="section-title">Internship Experience</h2>
        <div className="internship-card">
          <div className="internship-header">
            <h3>Data Analysis</h3>
            <span className="company">Unified Mentor</span>
          </div>
          <div className="internship-content">
            <p>
              Analyzed Amazon sales data using Tableau and created interactive dashboards to extract actionable
              insights.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Internship
