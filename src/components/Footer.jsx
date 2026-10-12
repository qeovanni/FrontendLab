function Footer({ onEasterEgg }) {
  return (
    <footer>
      <p>© 2026 Geovanni Medina Herrera <span className="egg" onClick={onEasterEgg}>·</span></p>
    </footer>
  )
}

export default Footer
