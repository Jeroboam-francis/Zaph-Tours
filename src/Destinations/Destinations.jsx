import Footer from "../components/Footer/Footer";
import DestinationsData from "../data/DestinationsData";
import "./Destinations.css";
import { Link } from "react-router-dom";

function Destinations() {
  return (
    <div>
      <DestinationsCard />
      <Footer />
    </div>
  );
}

export default Destinations;

function DestinationsCard() {
  return (
    <section className="destinations" id="featured">
      <div className="container">
        <h2 className="section-title">Destinations Offers</h2>
        <div className="dest-grid">
          {DestinationsData.map((data) => (
            <DestinationCard
              key={data.id}
              image={data.image}
              title={data.title}
              description={data.description}
              pricePerGroup={data.pricePerGroup}
              individualCost={data.individualCost}
              link={data.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function DestinationCard({
  image,
  title,
  description,
  pricePerGroup,
  individualCost,
  link,
}) {
  return (
    <div className="dest-card">
      <div className="dest-img">
        <img src={image} alt={title} />
      </div>
      <div className="dest-info">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="price">
          <p>{pricePerGroup}</p>
          <p> {individualCost}</p>
        </div>
        <Link to={link} className="btn">
          Learn More
        </Link>
      </div>
    </div>
  );
}
