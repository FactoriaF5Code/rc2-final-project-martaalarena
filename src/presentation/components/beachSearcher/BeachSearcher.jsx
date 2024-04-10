import { useState } from "react";
import searchIcon from "../../assets/Search.png";
import "./BeachSearcher.css";

export default function BeachSearcher({ onSearch }) {
  const [search, setSearch] = useState("");

  const handleSearchInput = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setSearch(searchTerm);
    onSearch(searchTerm);
  };
  return (
    <>
      <article className="searcherContainer">
        <input
          className="buscador"
          type="text"
          value={search}
          onChange={handleSearchInput}
          placeholder="Buscar..."
        />
        <img src={searchIcon} alt="lupa" />
      </article>
    </>
  );
}
