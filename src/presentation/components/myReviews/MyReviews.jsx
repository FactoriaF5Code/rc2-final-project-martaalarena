import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import "./MyReviews.css"

import { useDataContext } from "../../../middleware/context/DataContext";

export default function MyReviews() {
 const {myReviews} = useDataContext();

  return (
    <>
      <section>
        {myReviews.map((myReview, index) => (
          <div key={index}>
            <div className="myReview">
              <img src={myReview.urlImg} alt="playa" />
              <div>
                <h1>{myReview.name}</h1>
                <Stack spacing={1}>
                  <Rating
                    style={{ fontSize: "8rem" }}
                    name="size-"
                    defaultValue={myReview.valoration}
                    size="large"
                    readOnly
                  />
                </Stack>
              </div>
            </div>
            <hr />
          </div>
        ))}
      </section>
    </>
  );
}
