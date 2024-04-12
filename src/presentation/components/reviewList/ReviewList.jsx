import { useDataContext } from "../../../middleware/context/DataContext";
// import { Link } from "react-router-dom";
import "./ReviewList.css";
import { useState } from "react";
import { useHistory } from "react";

// eslint-disable-next-line react/prop-types
export default function ReviewList({ searchTerm }) {
  const { reviewList } = useDataContext();
  const history = useHistory();
  const [selectedReview, setSelectedReview] = useState(null);


  const handleMoreInfo = (reviewId) => {
    setSelectedReview(reviewList.find(review => review.id === reviewId));
    history.push(`/review/${reviewId}`);
  };

  return (
    <section className="containerReviewList">
      {reviewList.map((review, index) => {
        if (!searchTerm || review.name.toLowerCase().includes(searchTerm)) {
          return (
            <div key={index}>
              <div className="imgReviewList">
                <img src={review.urlImg} alt="playa" />
                <div>
                  <h1>{review.name}</h1>
                  <button  onClick={() => handleMoreInfo(review.id)}>
                    {/* <Link to={`/review/${review.id}`}>Mas info </Link> */}
                  </button>
                </div>
              </div>
              <hr />
            </div>
          );
        } else {
          return null;
        }
      })}
    </section>
  );
}
