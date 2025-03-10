import "./NewsLetter.css";

function NewsLetter() {
  return (
    <div>
      <section className="newsletter">
        <div className="container">
          <h2>Subscribe to Our Newsletter</h2>
          <p>
            Receive weekly updates on new destinations, special offers, and
            travel tips.
          </p>
          <form className="newsletter-form">
            <input
              type="email"
              className="newsletter-input"
              placeholder="Your Email Address"
              required
            />
            <button type="submit" className="btn">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default NewsLetter;
