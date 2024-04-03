import { useState } from "react";

// eslint-disable-next-line react/prop-types
export default function BeachSearcher({ onSearch }) {
  const [search, setSearch] = useState("");

  const handleSearchInput = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setSearch(searchTerm);
    onSearch(searchTerm);
  };
  return (
    <>
      <article>
        <input
          className="buscador"
          type="text"
          value={search}
          onChange={handleSearchInput}
          placeholder="Buscar..."
        />
      </article>
    </>
  );
}
