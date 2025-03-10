import "./Header.css";
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
