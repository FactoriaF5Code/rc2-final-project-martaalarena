import ProgressBar from "react-bootstrap/ProgressBar";
import "./SingleReview.css";
import { useDataContext } from "../../../middleware/context/DataContext";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import locationIcon from "../../assets/Location.png";

export default function SingleReview() {
  const { selectedBeachInfo, getBeachInfoById } = useDataContext();

  const { id } = useParams();

  useEffect(() => {
    const fetchBeach = async () => {
      try {
        await getBeachInfoById(id);
      } catch (error) {
        console.error("Error fetching post:", error);
      }
    };
    fetchBeach();
  }, [id]);

  if (!selectedBeachInfo) {
    return null;
  }

  return (
    <section className="totalContainer">
      {selectedBeachInfo && (
        <article className="totalContainerInfo">
          <div className="containerImgName">
            <img src={selectedBeachInfo.urlImg} alt="Playa" />
            <div className="containerNameLocation">
              <h1>{selectedBeachInfo.name}</h1>
              <div className="locationContainer">
                <img src={locationIcon} alt="location icon" />
                <p>{selectedBeachInfo.location}</p>
              </div>
            </div>
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
                <ProgressBar
                  className="progessBar"
                  now={selectedBeachInfo.parking}
                />
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
