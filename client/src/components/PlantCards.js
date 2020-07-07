import React, { Component } from "react";
import axios from "axios";

class PlantCards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      plants: [],
    };
  }

  componentDidMount() {
    this.getPlants();
  }

  getPlants = () => {
    axios
      .get("/api/plants")
      .then((res) => {
        if (res.data) {
          this.setState({
            plants: res.data,
          });
        }
      })
      .catch((err) => console.log(err));
  };

  render() {
    let { plants } = this.state;

    return (
      <>
        {plants ? (
          plants.map((plant) => (
            <div class="col">
              <div class="card" style={{ width: "18rem" }}>
                <img
                  class="card-img-top"
                  src="https://via.placeholder.com/180x100"
                  alt="Card image cap"
                />
                <div class="card-body">
                  <h5 class="card-title">{plant.name}</h5>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No plants have been added.</p>
        )}
      </>
    );
  }
}

export default PlantCards;
