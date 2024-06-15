import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Components/HomePage";
import WelcomePage from "./Components/WelcomePage";
import Favourites from "./Components/Favourites";

//Main App Component
function App() {
  return (
    <div className="App">
      <>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/Home" element={<HomePage />} />
          <Route path="/favorites" element={<Favourites />} />
        </Routes>
      </>
    </div>
  );
}

export default App;
