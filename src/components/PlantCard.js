import React, { Component } from "react";

class PlantCard extends Component {
  render() {
    return (
      <div class="col-sm">
        <div class="card" className="card-width">
          <img
            class="card-img-top"
            src="https://via.placeholder.com/180x100"
            alt="Card image cap"
          />
          <div class="card-body">
            <h5 class="card-title">Plant Name</h5>
          </div>
        </div>
      </div>
    );
  }
}

export default PlantCard;
