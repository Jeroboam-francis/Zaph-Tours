import PropTypes from "prop-types"; 
import { FaClock, FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMailUnread } from "react-icons/io5";

function Contacts() {
  return (
    <div>
      <FooterContact text=" Tel:+254746261731" icons={<FaPhone />} />
      <FooterContact text=" zaphtours@gmail.com" icons={<IoMailUnread />} />
      <FooterContact text=" Nairobi, Kenya" icons={<FaLocationDot />} />
      <FooterContact text=" 24hrs" icons={<FaClock />} />
    </div>
  );
}
export default Contacts;

function FooterContact({ icons, text }) {
  return (
    <div className="footer-contacts">
      <p>
        {icons} {text}
      </p>
    </div>
  );
}

FooterContact.propTypes = {
  icons: PropTypes.element.isRequired,
  text: PropTypes.string.isRequired,
};
