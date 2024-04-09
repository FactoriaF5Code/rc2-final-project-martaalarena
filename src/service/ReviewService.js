import axios from "axios"


const URL = "http://localhost:8080/api/review";


class ReviewService{
  async createReview(formData) {
    try {
      const response = await axios.post(`${URL}`, formData);
      return response.data;
    } catch (error) {
      console.error("Error creando reseña", error.response);
      throw error;
    }
  }

  async viewReview() {
    try {
      const response = await axios.get(`${URL}`);
      return response.data;
    } catch (error) {
      console.error("No se pueden cargar la lista de reseñas", error.response);
      throw error;
    }
  }

}

export default ReviewService;