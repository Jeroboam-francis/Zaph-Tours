import "./Header.css";
// import { FaClock, FaPhone } from "react-icons/fa";
// import { FaLocationDot } from "react-icons/fa6";
// import { IoMailUnread } from "react-icons/io5";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <HeaderNavigation />
      {/* <HeaderContacts /> */}
    </header>
  );
}
export default Header;

function HeaderNavigation() {
  return (
    <div className="header-navigation">
      <ol>
        <h1>
          Zaph<span> Tours</span>
          <p className="tagline">Best Safaris and Adventures</p>
        </h1>
        <NavigationLink to="/" Label="Home" />
        <NavigationLink to="/destinations" Label="Destinations" />
        <NavigationLink to="/triptypes" Label="Trip Types" />
        <NavigationLink to="/contactus" Label="Contact Us" />
      </ol>
    </div>
  );
}

// function HeaderContacts() {
//   return (
//     <div className="header-contacts">
//       <HeaderContact text=" Tel:+254746261731" icons={<FaPhone />} />
//       <HeaderContact text=" zaphtours@gmail.com" icons={<IoMailUnread />} />
//       <HeaderContact text=" Nairobi, Kenya" icons={<FaLocationDot />} />
//       <HeaderContact text=" 24hrs" icons={<FaClock />} />
//     </div>
//   );
// }

function HeaderContact({ icons, text }) {
  return (
    <div className="header-contact">
      {icons}
      <p>{text}</p>
    </div>
  );
}

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
