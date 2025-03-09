import LogoImg from "../../assets/logo.png";
import "./Logo.css";
function Logo() {
  return (
    <div className="logo">
      <img src={LogoImg} alt="logo" />
      <h1>
        Zaph<span>Tours</span>
      </h1>
      <p className="tagline">Best Safaris and Adventures</p>
    </div>
  );
}
export default Logo;
