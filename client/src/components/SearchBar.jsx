import { useNavigate } from "react-router-dom";
import { useState } from "react";

function SearchBar() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const search = () => {
    navigate(`/jobs?search=${query}`);
  };

  return (
    <div style={{ marginTop: "30px" }}>
      <input
        placeholder="Search job title..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ padding: "10px", width: "250px" }}
      />
      <button onClick={search} style={{ padding: "10px 20px" }}>
        Search
      </button>
    </div>
  );
}

export default SearchBar;
