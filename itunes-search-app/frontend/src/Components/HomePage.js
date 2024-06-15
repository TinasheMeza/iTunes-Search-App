import React, { useState } from "react";
import { Link } from "react-router-dom";
import usePersistedState from "./PersistedState";
import "../css/HomePage.css";

/**
 * HomePage Component
 * This component allows users to search for iTunes content and add items to their favorites.
 */
const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [favorites, setFavorites] = usePersistedState("favorites", []);

   // Handle the search operation by fetching data from the server
  const handleSearch = async () => {
    try {
      const tokenResponse = await fetch(`http://localhost:5000/api/token`);
      if (!tokenResponse.ok) {
        throw new Error(`HTTP error! Status: ${tokenResponse.status}`);
      }
      const { token } = await tokenResponse.json();
      console.log("Obtained token:", token);

      const response = await fetch(
        `http://localhost:5000/api/search?term=${searchTerm}&media=music&limit=10`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      console.log("Search results:", data);
      setResults(data.results);
    } catch (error) {
      console.error("Error fetching data from API:", error);
    }
  };


   // Add a selected item to the favorites list
  const addToFavorites = (result) => {
    setFavorites([...favorites, result]);
    alert(
      `${result.trackName} by ${result.artistName} has been added to favorites`
    );
  };

  return (
    <div className="home-page-container">
      <div className="navbar">
        <Link to="/">Welcome</Link>
        <Link to="/favorites">Favorites</Link>
      </div>
      <div>
        <div className="header">
          <h1>Search iTunes</h1>
        </div>
        <div className="input-box-container">
          <input
            className="input-box"
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Enter search term"
          />
        </div>
        <div className="search-btn-container">
          <button className="search-btn" onClick={handleSearch}>
            Search
          </button>
        </div>
        <div>
          {results.map((result) => (
            <div className="Results-Container" key={result.trackId}>
              <div className="artwork-img">
                <img
                  src={result.artworkUrl100}
                  alt={result.trackName}
                  style={{ marginRight: "10px" }}
                />
              </div>
              <div className="track-details">
                <p className="trackNameAndArtistName">
                  {result.trackName} by {result.artistName} 
                </p>
                <p>
                  Released on:{" "}
                  {new Date(result.releaseDate).toLocaleDateString()}
                </p>
              </div>
              <button
                className="addTofav"
                onClick={() => addToFavorites(result)}
              >
                Add to Favorites
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
