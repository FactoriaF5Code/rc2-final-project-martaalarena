import BeachSearcher from "../../components/beachSearcher/BeachSearcher";
import Header from "../../components/header/Header";
import { useState } from "react";
import ReviewList from "../../components/reviewList/ReviewList";
// import Map from "../../components/map/Map";

export default function SearchBeach() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (term) => {
    setSearchTerm(term);
  };
  return (
    <>
      <section style={{ backgroundColor: "#627C85" }}>
        <Header />
        <article style={{ paddingTop: '11rem',  minHeight: '100vh'}}>
          <BeachSearcher onSearch={handleSearch} />
          <ReviewList searchTerm={searchTerm} />
        </article>
      </section>
    </>
  );
}
