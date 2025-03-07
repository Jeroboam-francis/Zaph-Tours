import "./Header.css";
import { FaClock, FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMailUnread } from "react-icons/io5";
import Logo from "../Logo/Logo";

function Header() {
  return (
    <header className="header">
      <HeaderContacts />
      <HeaderNavigation />
    </header>
  );
}
export default Header;

function HeaderNavigation() {
  return (
    <div className="header-navigation">
      <Logo />
      <HeaderNavItem text="Home" />
      <HeaderNavItem text="Destinations" />
      <HeaderNavItem text="Trip Types" />
      <HeaderNavItem text="Contact Us" />
    </div>
  );
}

function HeaderContacts() {
  return (
    <div className="header-contacts">
      <HeaderContact text=" tel:+254746261731" icons={<FaPhone />} />
      <HeaderContact text=" zaphtours@gmail.com" icons={<IoMailUnread />} />
      <HeaderContact text=" Nairobi, Kenya" icons={<FaLocationDot />} />
      <HeaderContact text=" 24hrs 7 ays" icons={<FaClock />} />
    </div>
  );
}

function HeaderContact({ icons, text }) {
  return (
    <div className="header-contact">
      {icons}
      <p>{text}</p>
    </div>
  );
}

function HeaderNavItem({ text }) {
  return (
    <div className="header-nav-item">
      <p>{text}</p>
    </div>
  );
}
