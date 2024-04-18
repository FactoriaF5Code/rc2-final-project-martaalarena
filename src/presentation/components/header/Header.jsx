import logo from "../../assets/rip_current_logo.png";
import log_out from "../../assets/log-out.png";
import textLogo from "../../assets/RIP CURRENT.png";
import "./Header.css";
import { Link } from "react-router-dom";

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
            <li><Link to={"/home"}>HOME</Link></li>
            <li><Link to={"/searchBeach"}>REVIEWS</Link></li>
            <li><Link to={"/myReviews"}>MY REVIEWS</Link></li>
            <Link to={"/"}>
            <img src={log_out} alt="log out" />
            </Link>
          </ul>
        </section>
      </article>
    </>
  );
}
