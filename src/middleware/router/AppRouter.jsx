import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "../../presentation/pages/Home/Home";
import SearchBeach from "../../presentation/pages/searchBeach/SearchBeach";
import Review from "../../presentation/pages/review/Review";
import { DataProvider } from "../context/DataContext";
import AddReview from "../../presentation/pages/addReview/AddReview";
import WriteReview from "../../presentation/pages/writeReview/WriteReview";

export default function AppRouter() {
  return (
    <>
      <DataProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/searchBeach" element={<SearchBeach/>}/>
            <Route path="/review/:id" element={<Review />} />
            <Route path="/myReviews" element={<AddReview />} />
            <Route path="/writeReview" element={<WriteReview />} />
          </Routes>
        </Router>
      </DataProvider>
    </>
  );
}
