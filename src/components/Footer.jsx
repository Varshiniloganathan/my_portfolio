import "./Footer.css"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {currentYear} Varshini Loganathan. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
