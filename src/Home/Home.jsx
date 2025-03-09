import "./Home.css";
import Logo from "../components/Logo/Logo";
import FeaturedDestinations from "../components/FeaturedDestinations/FeaturedDestinations";
import FeaturedDestinationsData from "../data/FeaturedDestinationData";

function Home() {
  return (
    <div>
      <h1>
        <Hero />
        <AboutUs />
        <FeaturedDestinationsCard />
      </h1>
    </div>
  );
}

export default Home;

function Hero() {
  return (
    <div className="hero">
      <section className="hero-header">
        <h1>Explore the Beauty of Kenya</h1>
      </section>
      <div className="hero-paragraph">
        <p>
          Experience your adventures with the best safari guides in East Africa
        </p>
      </div>
      <div className="hero-button">
        <button>Book Now</button>
      </div>
    </div>
  );
}

function AboutUs() {
  return (
    <div className="about-us">
      <h2 className="section-title">About Us</h2>
      <div className="about-content">
        <div className="about-logo">
          <Logo />
        </div>
        <div className="about-text">
          <h3>Premier Safari Experience since 2005</h3>
          <p>
            Zaph Tours is a premier travel company based in Kenya, specializing
            in providing exceptional safari and adventure tours. With over 15
            years of experience, we have established ourselves as leaders in the
            East African tourism industry.
          </p>
          <p>
            Our passionate team of experienced guides, many born and raised in
            the regions we explore, bring unparalleled knowledge and insight to
            every adventure. We pride ourselves on creating personalized
            experiences that showcase the natural beauty and cultural richness
            of Kenya and neighboring countries.
          </p>
          <p>
            At Zaph Tours, we are committed to sustainable tourism practices
            that respect wildlife, support local communities, and preserve the
            breathtaking landscapes we are privileged to share with our guests.
          </p>
          <a href="#" className="btn">
            Learn More About Us
          </a>
        </div>
      </div>
    </div>
  );
}
function FeaturedDestinationsCard() {
  return (
    <section className="destinations" id="featured">
      <div className="container">
        <h2 className="section-title">Featured Destinations</h2>
        <div className="dest-grid">
          {FeaturedDestinationsData.map((data) => (
            <FeaturedDestinations
              key={data.id}
              image={data.image}
              title={data.title}
              description={data.description}
              price={data.price}
              link={data.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
