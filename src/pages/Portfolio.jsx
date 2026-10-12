import { useState, useEffect } from 'react'
import projectPhoto from '../assets/project_photo.jpg'

function Modal({ repo, onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h2>{repo.name}</h2>
        <p>{repo.description || 'Ingen beskrivning.'}</p>
        <a href={repo.html_url} target="_blank" rel="noreferrer">Visa på GitHub</a>
        <button onClick={onClose}>Stäng</button>
      </div>
    </div>
  )
}

function Portfolio() {
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)
  const [selected, setSelected] = useState(null)

  useEffect(() => {
    fetch('https://api.github.com/users/qeovanni/repos')
      .then((r) => r.json())
      .then((data) => {
        setRepos(Array.isArray(data) ? data : [])
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  if (loading) return <p>Laddar projekt...</p>

  return (
    <section>
      <h1>Portfolio</h1>
      <div className="portfolio-grid">
        {repos.map((repo) => (
          <div key={repo.id} className="card">
            <img src={projectPhoto} alt={repo.name} />
            <h3>{repo.name}</h3>
            <p>{repo.description || 'Ingen beskrivning.'}</p>
            <button onClick={() => setSelected(repo)}>Mer info</button>
          </div>
        ))}
      </div>
      {selected && <Modal repo={selected} onClose={() => setSelected(null)} />}
    </section>
  )
}

export default Portfolio
