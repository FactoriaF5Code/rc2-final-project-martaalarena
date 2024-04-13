import { createContext, useContext, useState, useEffect } from "react";
import ReviewService from "../../service/ReviewService";

const DataContext = createContext();

// eslint-disable-next-line react/prop-types
export const DataProvider = ({ children }) => {
  const [review, setReview] = useState("");
  const [reviewList, setReviewList] = useState([]);
  const [selectedBeachInfo, setSelectedBeachInfo] = useState(null);

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const reviewList = await reviewService.viewReview();
        setReviewList(reviewList);
        console.log(reviewList);
  
        // Aquí debes establecer el ID de la reseña que deseas obtener
        const beachId = '603'; // Reemplaza 'ID_DE_LA_RESEÑA' con el ID real
        const beachInfo = await reviewService.getBeachInfoById(beachId);
        setSelectedBeachInfo(beachInfo);
        console.log(beachInfo);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    fetchData();
  }, []); 

  const value = {
    review,
    setReview,
    postReview,
    reviewList,
  
    selectedBeachInfo,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export const useDataContext = () => {
  return useContext(DataContext);
};
