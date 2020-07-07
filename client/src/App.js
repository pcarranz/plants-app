import React from "react";
import "./App.css";
import PlantCards from "./components/PlantCards";

function App() {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="">
          Plants
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-item nav-link active" href="">
              Dashboard <span class="sr-only">(current)</span>
            </a>
          </div>
        </div>
      </nav>
      <div class="container">
        <div class="row">
          <PlantCards />
        </div>
      </div>
    </>
  );
}

export default App;
