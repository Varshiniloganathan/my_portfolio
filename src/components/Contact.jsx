import "./Contact.css"

const Contact = () => {
  return (
    <div className="contact-section">
      <div className="section-container">
        <h2 className="section-title">Contact Me</h2>

        <div className="contact-container">
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon">
                <i className="icon-email">✉️</i>
              </div>
              <div className="contact-text">
                <h3>Email</h3>
                <p>
                  <a href="mailto:varshulogu04@gmail.com">varshulogu04@gmail.com</a>
                </p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <i className="icon-phone">📱</i>
              </div>
              <div className="contact-text">
                <h3>Phone</h3>
                <p>+91 6374623823</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <i className="icon-location">📍</i>
              </div>
              <div className="contact-text">
                <h3>Location</h3>
                <p>Erode, Tamil Nadu</p>
              </div>
            </div>

            <div className="social-links">
              <a
                href="https://www.linkedin.com/in/varshini-loganathan0427"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/Varshiniloganathan"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                GitHub
              </a>
              <a
                href="https://leetcode.com/u/varshini_l04/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                LeetCode
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
