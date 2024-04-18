import { useDataContext } from "../../../middleware/context/DataContext";
import locationIcon from "../../assets/Location.png";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import "./ReviewList.css";

// eslint-disable-next-line react/prop-types
export default function ReviewList({ searchTerm }) {
  const { reviewList, getBeachInfoById } = useDataContext();

  const handleViewMoreInfo = (beachId) => {
    getBeachInfoById(beachId);
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
                  <div className="containerLocationReviewList">
                    <img src={locationIcon} alt="localizacion" />
                    <p>{review.location}</p>
                  </div>
                  <Stack spacing={1}>
                    <Rating
                      style={{ fontSize: "8rem" }}
                      name="size-"
                      defaultValue={review.valoration}
                      size="large"
                      readOnly
                    />
                  </Stack>
                  <button onClick={() => handleViewMoreInfo(review.id)}>
                    <Link to={`/review/${review.id}`}>Más info </Link>
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
