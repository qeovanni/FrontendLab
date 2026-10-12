import cvData from '../data/cv.json'
import profilePicture from '../assets/sillouette_profile_picture.jpg'

function Home() {
  return (
    <section className="home">
      <div className="home-content">
        <div className="home-text">
          <h1>Geovanni Medina Herrera</h1>
          <p>
            Jag studerar till Fullstackutvecklare .NET på Chas Academy och brinner för att bygga
            saker som faktiskt fungerar. Det jag gillar mest med programmering är känslan när
            bitarna faller på plats – när logiken och gränssnittet möts och blir något användbart.
          </p>
          <p>
            Just nu lär jag mig mest inom backend med C# och .NET, men React har verkligen
            fångat mitt intresse på frontend-sidan. Söker LIA-praktik nov 2026 – apr 2027.
          </p>
          <h2>Mina fokusområden just nu</h2>
          <ul className="focus-list">
            {cvData.kompetenser.map((k, i) => (
              <li key={i}>{k}</li>
            ))}
          </ul>
        </div>
        <div className="home-image">
          <img
            src={profilePicture}
            alt="Profilbild"
          />
        </div>
      </div>
    </section>
  )
}

export default Home
