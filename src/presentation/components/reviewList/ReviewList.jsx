import { useDataContext } from "../../../middleware/context/DataContext";
import { Link } from "react-router-dom";
import "./ReviewList.css";

export default function ReviewList() {
  const { reviewList } = useDataContext();
  return (
    <section className="containerReviewList">
      {reviewList.map((review, index) => (
        <div key={index}>
          <hr />
          <div className="imgReviewList">
            <img src={review.urlImg} alt="playa" />
            <div >
              <h1>{review.name}</h1>
              <button>
                <Link to="/review">Mas info </Link>
              </button>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
