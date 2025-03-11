import Footer from "../components/Footer/Footer";
import TripTypesData from "../data/TripTypesData";
import "./TripTypes.css";
import { Link } from "react-router-dom";

function TripTypes() {
  return (
    <div>
      <HeroSection />
      <TripTypesDataCard />
      <Footer />
    </div>
  );
}

export default TripTypes;
function TripTypesDataCard() {
  return (
    <section className="packages" id="featured">
      <div className="container">
        <div className="package-list">
          {TripTypesData.map((data) => (
            <TripTypesCard
              key={data.id}
              id={data.id}
              title={data.title}
              category={data.category}
              images={data.images}
              description={data.description}
              pricing={data.pricing}
              specialOffer={data.specialOffer}
              link={data.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function TripTypesCard({
  id,
  title,
  category,
  images = [],
  description,
  pricing,
  specialOffer,
  link,
}) {
  return (
    <div>
      <section className="packages">
        <div className="container">
          <div className="package-card" id={id}>
            <h2 className="package-title">{title}</h2>
            <div className="package-category">{category}</div>
            <div className="image-gallery">
              <div className="main-image">
                {images && images.length > 0 ? (
                  <img src={images[0]} alt={title} />
                ) : (
                  <p>No image available</p>
                )}
              </div>
              <div className="thumbnail-container">
                {images && images.length > 1 ? (
                  images
                    .slice(1, 4)
                    .map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt={`${title} thumbnail ${index + 1}`}
                      />
                    ))
                ) : (
                  <p>No thumbnails available</p>
                )}
              </div>
            </div>

            <div className="package-description">
              <h3>Description</h3>
              <p>{description}</p>
            </div>

            <div className="package-pricing">
              <h3>Pricing</h3>
              <p className="price">{pricing} </p>
              <div className="special-offer">{specialOffer}</div>
              <Link to={link} className="btn">
                Book Now!
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
function HeroSection() {
  return (
    <div>
      <section className="packages-intro">
        <div className="container">
          <h2>Explore Our Diverse Range of Travel Experiences</h2>
          <p>
            Browse through our selection of packages and find the perfect
            journey for your next adventure. Each package is thoughtfully
            designed to provide authentic experiences, comfortable
            accommodations, and unforgettable memories.
          </p>
        </div>
      </section>
    </div>
  );
}
