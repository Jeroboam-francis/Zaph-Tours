import "./FeaturedDestinations.css";
import { Link } from "react-router-dom";

function FeaturedDestinations({ title, description, price, image, link }) {
  return (
    <div className="dest-card">
      <div className="dest-img">
        <img src={image} alt={title} />
      </div>
      <div className="dest-info">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="price">{price}</div>
        <Link to={link} className="btn">
          Explore More
        </Link>
      </div>
    </div>
  );
}

export default FeaturedDestinations;
