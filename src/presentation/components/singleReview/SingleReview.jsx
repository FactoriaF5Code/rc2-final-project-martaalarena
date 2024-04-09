import ProgressBar from "react-bootstrap/ProgressBar";
import "./SingleReview.css";
import { useDataContext } from "../../../middleware/context/DataContext";

export default function SingleReview() {
  
  const { reviewList } = useDataContext();

  console.log("Datos de reviewList:", reviewList);

  return (
    <section className="totalContainer">
      {reviewList.map((review) => (
        <div className="containerImgName" key={review.id}>
          <img src={review.urlImg} alt="Playa" />
          <h1>{review.name}</h1>
          <div>
            <div>
              <p>Cantidad de gente</p>
              <ProgressBar now={review.amountOfPeople} />
            </div>
            <div>
              <p>Aparcamiento</p>
              <ProgressBar now={review.parking} />
            </div>
            <div>
              <p>Dificultad</p>
              <ProgressBar now={review.dificulty} />
            </div>
            <div>
              <p>Calidad de la ola</p>
              <ProgressBar now={review.waveCuality} />
            </div>
            <div>
              <p>Accesibilidad</p>
              <ProgressBar now={review.accessibility} />
            </div>

            <article>
              <p>Descripción</p>
              <div>{review.description}</div>
            </article>
          </div>
        </div>
      ))}
    </section>
  );
}
