import { createContext, useContext, useState } from "react";
import ReviewService from "../../service/ReviewService";

const DataContext = createContext();

// eslint-disable-next-line react/prop-types
export const DataProvider = ({ children }) => {
  const [review, setReview] = useState("");
  const [reviewList, setReviewList] = useState([]);
  const reviewService = new ReviewService();

  const postReview = async (formData) => {
    try {
      const reviewData = await reviewService.createReview(formData);
      setReview(reviewData);
      console.log(reviewData);
    } catch (error) {
      console.error("Error fetching review:", error);
    }
  };

  const viewReview = async () => {
    try {
      const reviewList = await reviewService.viewReview();
      setReviewList(reviewList);
      console.log(reviewList);
    } catch (error) {
      console.error("Error fetching review:", error);
    }
  };

  const value = {
    review,
    setReview,
    postReview,
    viewReview,
    reviewList
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export const useDataContext = () => {
  return useContext(DataContext);
};
