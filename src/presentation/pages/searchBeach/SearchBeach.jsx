import BeachSearcher from "../../components/beachSearcher/BeachSearcher";
import Header from "../../components/header/Header";
import { useState } from "react";

export default function SearchBeach() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (term) => {
    setSearchTerm(term);
  };
  return (
    <>
    <Header />
    <BeachSearcher onSearch={handleSearch}/>
    </>
  )
}
