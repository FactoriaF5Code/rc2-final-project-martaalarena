import review from "../../assets/review.jpg";
import experience1 from "../../assets/experience1.jpg";
import forecast1 from "../../assets/forecast1.jpg";
import "./PageContainer.css";
import { Link } from "react-router-dom";

export default function PageContainer() {
  return (
    <>
      <section className="allContainers">
        <div className="containerPage">
          <img src={review} alt="playa" />
          <p>Encuentra las mejores playas</p>
          <button> <Link to={"/searchBeach"}>Ve a la pagina</Link></button>
        </div>
        <div className="containerPage">
          <img src={forecast1} alt="ola" />
          <p>Conoce la prevision para tu playa favorita</p>
          <button>
           
          </button>
        </div>
        <div className="containerPage">
          <img src={experience1} alt="paisaje" />
          <p>Escribe tu experiencia en tus playas mas transitadas</p>
          <button>Ve a la pagina</button>
        </div>
      </section>
    </>
  );
}
