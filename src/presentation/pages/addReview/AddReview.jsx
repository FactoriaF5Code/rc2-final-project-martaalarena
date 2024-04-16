import Header from "../../components/header/Header";
import plusMath from "../../assets/plusMath.png";
import { Link } from "react-router-dom";

import "./AddReview.css";

export default function AddReview() {
  return (
    <>
      <section style={{ backgroundColor: "#627C85", height: "100vh" }}>
        <Header />
        <article
          className="buttonAddReviewContainer"
          style={{ paddingTop: "13vh", minHeight: "100vh" }}
        >
          <Link to="/writeReview">
            <button className="addReviewButton">
              <img src={plusMath} alt="mas" />
              <h1>Añadir Reseña</h1>
            </button>
          </Link>
        </article>
      </section>
    </>
  );
}
