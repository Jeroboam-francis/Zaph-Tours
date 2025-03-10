import "./Footer.css";
import { FaYoutube, FaTwitter, FaWhatsapp, FaFacebook } from "react-icons/fa";

import { NavLink } from "react-router-dom";
import Contacts from "../Contacts/Contacts";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-column">
            <h3>Zaph Tours</h3>
            <p>
              Best safaris and adventures in Kenya and beyond, creating
              unforgettable experiences since 2005.
            </p>
          </div>

          <div className="footer-column">
            <h3>Quick Links</h3>
            <ul>
              <NavigationLink to="/" Label="Home" />
              <NavigationLink to="/destinations" Label="Destinations" />
              <NavigationLink to="/triptypes" Label="Trip Types" />
              <NavigationLink to="/contactus" Label="Contact Us" />
            </ul>
          </div>

          <div className="footer-column">
            <h3>Popular Destinations</h3>
            <ul>
              <li>
                <a href="#">Mt. Kenya</a>
              </li>
              <li>
                <a href="#">Lake Nakuru</a>
              </li>
              <li>
                <a href="#">Tsavo National Park</a>
              </li>
              <li>
                <a href="#">Coastal Kenya</a>
              </li>
              <li>
                <a href="#">Maasai Mara</a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Connect With Us</h3>
            <div className="social-links">
              <SocialLinks />
              <a href="#">
                <SocialLinksData icons={<FaFacebook />} />
              </a>
              <a href="#">
                <SocialLinksData icons={<FaWhatsapp />} />
              </a>
              <a href="#">
                <SocialLinksData icons={<FaTwitter />} />
              </a>
              <a href="#">
                <SocialLinksData icons={<FaYoutube />} />
              </a>
            </div>
            <Contacts />
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 Zaph Tours. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
export default Footer;

function NavigationLink({ to, Label }) {
  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) => isActive === true && "active-link"}
      >
        {Label}
      </NavLink>
    </li>
  );
}

function SocialLinks({ icons, text }) {
  return (
    <div>
      {icons}
      <p>{text}</p>
    </div>
  );
}
function SocialLinksData({ icons }) {
  return <div>{icons}</div>;
}
