import Footer from "../components/Footer/Footer";
import "./ContactUs.css";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMailUnread } from "react-icons/io5";
function ContactUs() {
  return (
    <div>
      <ContactUsCard />
      <Footer />
    </div>
  );
}

export default ContactUs;

const ContactUsCard = () => {
  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <div className="contact-container-flex">
        <form className="contact-form">
          <h5>Reach Us Form </h5>
          <div className="placeholder">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <input type="text" placeholder="Subject" required />
            <textarea placeholder="Your Message" required></textarea>
            <button type="submit">Send Message</button>
          </div>
        </form>

        <div className="contactus-info">
          <h3>Contact Information</h3>
          <p>{<IoMailUnread />} zaphtours@gmail.com</p>
          <p>{<FaPhone />} +254746261731</p>
          <p>{<FaLocationDot />} 145 Murang'a ,Murang'a City, Kenya</p>
        </div>

        <div className="office-hours">
          <h3>Office Hours</h3>
          <p>Monday - Friday: 9 AM - 6 PM</p>
          <p>Saturday: 10 AM - 4 PM</p>
          <p>Sunday: Closed</p>
        </div>
      </div>
      <div className="cont-social-links">
        <h3>Follow Us</h3>
        <a
          href="https://github.com/Jeroboam-francis"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook />
        </a>
        <a
          href="https://wa.me/qr/KV2C2LW2YH3PD1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp />
        </a>
        <a
          href="https://wa.me/qr/KV2C2LW2YH3PD1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.linkedin.com/in/jeroboam/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
      </div>
      <div className="map-container">
        <iframe
          title="company-location"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=murang'a%20kenya+(ZaphTours)&amp;t=h&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};
