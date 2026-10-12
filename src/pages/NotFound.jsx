import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <section>
      <h1>404 – Sidan hittades inte</h1>
      <Link to="/">Till startsidan</Link>
    </section>
  )
}

export default NotFound
