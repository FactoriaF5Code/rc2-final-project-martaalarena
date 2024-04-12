import ProgressBar from "react-bootstrap/ProgressBar";
import "./SingleReview.css";
import { useParams } from 'react-router-dom';
import { useDataContext } from "../../../middleware/context/DataContext";

export default function SingleReview() {
  const { reviewId } = useParams();
  const { reviewList } = useDataContext();
  const selectedReview = reviewList.find(review => review.id === reviewId);

  if (!selectedReview) {
    return <div>Loading...</div>; // Maneja el caso en que la revisión no se encuentre
  }

  return (
    <section className="totalContainer">
     
        <article className="totalContainerInfo">
          <div className="containerImgName" >
            <img src={selectedReview.urlImg} alt="Playa" />
            <h1>{selectedReview.name}</h1>
          </div>
          <div>
            <article className="progressBarContainer">
              <div>
                <p>Cantidad de gente</p>
                <ProgressBar
                  className="progessBar"
                  now={selectedReview.amountOfPeople}
                />
              </div>
              <div>
                <p>Aparcamiento</p>
                <ProgressBar className="progessBar" now={selectedReview.parking} />
              </div>
              <div>
                <p>Dificultad</p>
                <ProgressBar className="progessBar" now={selectedReview.dificulty} />
              </div>
              <div>
                <p>Calidad de la ola</p>
                <ProgressBar className="progessBar" now={selectedReview.waveCuality} />
              </div>
              <div>
                <p>Accesibilidad</p>
                <ProgressBar
                  className="progessBar"
                  now={selectedReview.accessibility}
                />
              </div>
            </article>
            <article className="containerDescription">
              <p>Descripción</p>
              <div>
                <h3>{selectedReview.description}</h3>
              </div>
            </article>
          </div>
        </article>
   
    </section>
  );
}
