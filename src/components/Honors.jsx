import "./Honors.css"

const Honors = () => {
  const honorsData = [
    {
      year: "2024",
      title: "Participated in iMobiliton by Volkswagen",
    },
    {
      year: "2020",
      title: "Secured State 3rd Rank in SSLC",
    },
  ]

  return (
    <div className="honors-section">
      <div className="section-container">
        <h2 className="section-title">Honors & Awards</h2>
        <div className="honors-timeline">
          {honorsData.map((honor, index) => (
            <div className="honor-card" key={index}>
              <div className="honor-year">{honor.year}</div>
              <div className="honor-content">
                <p>{honor.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Honors
