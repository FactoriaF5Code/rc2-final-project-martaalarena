import ProgressBar from "react-bootstrap/ProgressBar";
import "./SingleReview.css";
import { useDataContext } from "../../../middleware/context/DataContext";

export default function SingleReview() {
  const { reviewList } = useDataContext();

  console.log("Datos de reviewList:", reviewList);

  return (
    <section className="totalContainer">
      {reviewList.map((review, index) => (
        <article className="totalContainerInfo" key={index}>
          <div className="containerImgName" key={review.id}>
            <img src={review.urlImg} alt="Playa" />
            <h1>{review.name}</h1>
          </div>
          <div>
            <article className="progressBarContainer">
              <div>
                <p>Cantidad de gente</p>
                <ProgressBar
                  className="progessBar"
                  now={review.amountOfPeople}
                />
              </div>
              <div>
                <p>Aparcamiento</p>
                <ProgressBar className="progessBar" now={review.parking} />
              </div>
              <div>
                <p>Dificultad</p>
                <ProgressBar className="progessBar" now={review.dificulty} />
              </div>
              <div>
                <p>Calidad de la ola</p>
                <ProgressBar className="progessBar" now={review.waveCuality} />
              </div>
              <div>
                <p>Accesibilidad</p>
                <ProgressBar
                  className="progessBar"
                  now={review.accessibility}
                />
              </div>
            </article>
            <article className="containerDescription">
              <p>Descripción</p>
              <div>
                <h3>{review.description}</h3>
              </div>
            </article>
          </div>
        </article>
      ))}
    </section>
  );
}
