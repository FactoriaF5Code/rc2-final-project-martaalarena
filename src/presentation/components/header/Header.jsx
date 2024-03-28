import logo from "../../assets/rip_current_logo.png";
import textLogo from "../../assets/RIP CURRENT.png";
import "./Header.css";

export default function Header() {
  return (
    <>
      <article className="container1">
        <section className="container__logo">
          <img src={logo} alt="Rip current logo" />
          <img src={textLogo} alt="Rip current" />
        </section>
        <section className="container__list">
          <ul>
            <li>HOME</li>
            <li>REVIEWS</li>
            <li>SURF FORECAST</li>
            <li>MY REVIEWS</li>
          </ul>
        </section>
      </article>
    </>
  );
}
