import SearchBar from "../components/SearchBar";

function Home() {
  return (
    <div style={{ padding: "60px", textAlign: "center" }}>
      <h1>Find Your Dream Job</h1>
      <p>Search thousands of jobs from top companies</p>

      <SearchBar />
    </div>
  );
}

export default Home;
