import ProgressBar from "react-bootstrap/ProgressBar";
import "./SingleReview.css"

export default function SingleReview() {
  return (
    <section className="totalContainer">
      <div className="containerImgName">
        <img src="http://imgfz.com/i/BjJtUxE.jpeg" alt="Playa" />
        <h1>PLAYA DE LOS QUEBRANTOS</h1>
        <div>
          <div>
            <p>Cantidad de gente</p>
            <ProgressBar now={60} />
          </div>
          <div>
            <p>Aparcamiento</p>
            <ProgressBar now={60} />
          </div>
          <div>
            <p>Dificultad</p>
            <ProgressBar now={60} />
          </div>
          <div>
            <p>Calidad de la ola</p>
            <ProgressBar now={60} />
          </div>
          <div>
            <p>Accesibilidad</p>
            <ProgressBar now={60} />
          </div>

          <article>
            <p>Descripción</p>
            <div></div>
          </article>
        </div>
      </div>
    </section>
  );
}
