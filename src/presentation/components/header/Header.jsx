import logo from "../../assets/rip_current_logo.png";
import textLogo from "../../assets/RIP CURRENT.png";

export default function Header() {
  return (
    <>
      <section className="container">
        <section>
          <img src={logo} alt="Rip current logo" />
          <img src={textLogo} alt="Rip current" />
        </section>
        <section>
          <ul>
            <li>Home</li>
            <li>Reseñas</li>
            <li>Surf Forecast</li>
            <li>Mis Reseñas</li>
          </ul>
        </section>
      </section>
    </>
  );
}
