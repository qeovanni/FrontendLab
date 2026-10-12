import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <header>
      <nav>
        <NavLink to="/">Hem</NavLink>
        <NavLink to="/om-mig">Om mig</NavLink>
        <NavLink to="/cv">CV</NavLink>
        <NavLink to="/portfolio">Portfolio</NavLink>
      </nav>
    </header>
  )
}

export default Navbar
