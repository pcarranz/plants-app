import React from "react";
import "./App.css";
import PlantCards from "./components/PlantCards";
import AddPlant from "./components/AddPlant";

function App() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <h1 className="navbar-brand">Plants</h1>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-item nav-link active" href="/">
              Dashboard <span className="sr-only">(current)</span>
            </a>
          </div>
        </div>
      </nav>
      <div className="container">
        <div className="row">
          <AddPlant />
        </div>
        <div className="row">
          <PlantCards />
        </div>
      </div>
    </>
  );
}

export default App;
