import cvData from '../data/cv.json'

function CV() {
  return (
    <section className="cv">
      <h1>{cvData.profil.namn}</h1>
      <p className="cv-titel">{cvData.profil.titel}</p>

      <div className="cv-section">
        <h2>Sammanfattning</h2>
        <p>{cvData.sammanfattning}</p>
      </div>

      <div className="cv-section">
        <h2>Kompetenser</h2>
        <ul className="focus-list">
          {cvData.kompetenser.map((k, i) => (
            <li key={i}>{k}</li>
          ))}
        </ul>
      </div>

      <div className="cv-grid">
        <div>
          <h2>Utbildning</h2>
          {cvData.utbildningar.map((u, i) => (
            <div key={i} className="cv-item">
              <h3>{u.skola}</h3>
              <p className="cv-roll">{u.program}</p>
              <p className="cv-period">{u.period}</p>
              <p>{u.beskrivning}</p>
            </div>
          ))}
        </div>
        <div>
          <h2>Arbetslivserfarenhet</h2>
          {cvData.arbeten.map((a, i) => (
            <div key={i} className="cv-item">
              <h3>{a.arbetsplats}</h3>
              <p className="cv-roll">{a.roll}</p>
              <p className="cv-period">{a.period}</p>
              <p>{a.beskrivning}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CV
