import React from "react";
import { Link } from "react-router-dom";
import usePersistedState from "./PersistedState";
import "../css/HomePage.css";

/**
 * Favourites Component
 * This component displays the user's favorite iTunes items and allows removal from the favorites list.*/
const Favourites = () => {
  const [favorites, setFavorites] = usePersistedState("favorites", []);

  // Remove an item from the favorites list
  const removeFromFavorites = (trackId) => {
    setFavorites(favorites.filter((track) => track.trackId !== trackId));
  };

  return (
    <div className="home-page-container">
      <div className="navbar">
        <Link to="/">Welcome</Link> <Link to="/Home">Home</Link>
      </div>
      <div>
        <div className="header">
          <h1>Your Favorites</h1>
        </div>
        <div>
          {favorites.map((result) => (
            <div className="Results-Container" key={result.trackId}>
              <div className="artwork-img">
                <img
                  src={result.artworkUrl100}
                  alt={result.trackName}
                  style={{ marginRight: "10px" }}
                />
              </div>
              <div className="track-details">
                <p>
                  {result.trackName} by {result.artistName}
                </p>
                <p>
                  Released on:{" "}
                  {new Date(result.releaseDate).toLocaleDateString()}
                </p>
                <button
                  className="removeFromfav"
                  onClick={() => removeFromFavorites(result.trackId)}
                >
                  Remove from Favorites
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Favourites;
