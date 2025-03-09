import "./Header.css";
import { FaClock, FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMailUnread } from "react-icons/io5";
import Logo from "../Logo/Logo";
import { NavLink } from "react-router-dom";

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
      <ol>
        <NavigationLink to="/" Label="Home" />
        <NavigationLink to="/destinations" Label="Destinations" />
        <NavigationLink to="/triptypes" Label="Trip Types" />
        <NavigationLink to="/contactus" Label="Contact Us" />
      </ol>
    </div>
  );
}

function HeaderContacts() {
  return (
    <div className="header-contacts">
      <Logo />
      <HeaderContact text=" Tel:+254746261731" icons={<FaPhone />} />
      <HeaderContact text=" zaphtours@gmail.com" icons={<IoMailUnread />} />
      <HeaderContact text=" Nairobi, Kenya" icons={<FaLocationDot />} />
      <HeaderContact text=" 24hrs" icons={<FaClock />} />
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

// function HeaderNavItem({ text }) {
//   return (
//     <div className="header-nav-item">
//       <p>{text}</p>
//     </div>
//   );
// }

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
