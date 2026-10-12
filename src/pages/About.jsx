const interests = [
  {
    icon: '🎵',
    title: 'Musik',
    text: 'Har samlat på vinylskivor sedan jag var 12 år gammal. Letar ständigt i skivbutiker och lyssnar främst på soul, funk, latin och hip hop.',
  },
  {
    icon: '🎬',
    title: 'Film',
    text: 'Riktig filmnörd som älskar filmer från 90- och 00-talet, särskilt från Asien och Sydamerika. Wong Kar-wai är den absoluta favoritregissören.',
  },
  {
    icon: '⚽',
    title: 'Fotboll',
    text: 'Fotboll är en stor passion, både att titta på och att snöra på sig skorna och spela själv.',
  },
  {
    icon: '🧗',
    title: 'Gym & Bouldering',
    text: 'För att koppla av från skärmen blir det mycket styrketräning på gymmet och bouldering på klätterväggen.',
  },
  {
    icon: '✈️',
    title: 'Resor',
    text: 'Älskar att resa och upptäcka världen, med Asien och Sydamerika som favoritmål där jag även har familj.',
  },
  {
    icon: '🎲',
    title: 'Brädspel',
    text: 'En riktigt bra helg innehåller ofta strategiska brädspel (som Terraforming Mars, Catan eller Diplomacy) tillsammans med bra mat och vänner.',
  },
]

function About() {
  return (
    <section className="about">
      <div className="about-grid">
        <div className="about-text">
          <h1>Om mig</h1>
          <h2>Från klassrummet till koden</h2>
          <p>
            Min resa till systemutveckling har inte varit spikrak, men den har gett mig
            värdefulla verktyg. Med flera års erfarenhet av socialt arbete och som pedagog
            i skolan har jag lärt mig vikten av tålamod, tydlig kommunikation och
            problemlösning i komplexa situationer.
          </p>
          <p>
            Under min tid i skivbutik lärde jag mig service och att hantera många bollar
            i luften. Idag tar jag med mig min vana att strukturera arbete, bygga relationer
            och förstå människors behov rakt in i koden. Jag trivs bäst när logik får möta
            kreativitet och användarnytta.
          </p>
          <p>
            När jag inte sitter bakom tangentbordet är jag en person som älskar att
            upptäcka nya miljöer. Jag reser så ofta jag kan och är väldigt öppen för att
            i framtiden både bo och arbeta utomlands, kanske till och med i Spanien.
          </p>
        </div>
        <div className="about-interests">
          <h2>På fritiden</h2>
          <div className="interests-grid">
            {interests.map((item) => (
              <div key={item.title} className="interest-card">
                <span className="interest-icon">{item.icon}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
