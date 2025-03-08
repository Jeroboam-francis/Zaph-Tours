import "./Home.css";
function Home() {
  return (
    <div>
      <h1>
        <Hero />
      </h1>
    </div>
  );
}

export default Home;

function Hero() {
  return (
    <div className="hero">
      <h1>Explore the Beauty of Kenya</h1>
      <p>
        Experience your adventures with the best safari guides in East Africa
      </p>
      <button>Book Now</button>
    </div>
  );
}
