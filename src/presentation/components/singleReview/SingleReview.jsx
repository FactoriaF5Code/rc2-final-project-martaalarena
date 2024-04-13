import ProgressBar from "react-bootstrap/ProgressBar";
import "./SingleReview.css";
import { useDataContext } from "../../../middleware/context/DataContext";

export default function SingleReview() {
  const {  selectedBeachInfo } = useDataContext();


  return (
    <section className="totalContainer">
      {selectedBeachInfo && (
        <article className="totalContainerInfo">
          <div className="containerImgName">
            <img src={selectedBeachInfo.urlImg} alt="Playa" />
            <h1>{selectedBeachInfo.name}</h1>
          </div>
          <div>
            <article className="progressBarContainer">
              <div>
                <p>Cantidad de gente</p>
                <ProgressBar
                  className="progessBar"
                  now={selectedBeachInfo.amountOfPeople}
                />
              </div>
              <div>
                <p>Aparcamiento</p>
                <ProgressBar className="progessBar" now={selectedBeachInfo.parking} />
              </div>
              <div>
                <p>Dificultad</p>
                <ProgressBar
                  className="progessBar"
                  now={selectedBeachInfo.dificulty}
                />
              </div>
              <div>
                <p>Calidad de la ola</p>
                <ProgressBar
                  className="progessBar"
                  now={selectedBeachInfo.waveCuality}
                />
              </div>
              <div>
                <p>Accesibilidad</p>
                <ProgressBar
                  className="progessBar"
                  now={selectedBeachInfo.accessibility}
                />
              </div>
            </article>
            <article className="containerDescription">
              <p>Descripción</p>
              <div>
                <h3>{selectedBeachInfo.description}</h3>
              </div>
            </article>
          </div>
        </article>
      )}
    </section>
  );
}

