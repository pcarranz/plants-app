import React, { Component } from "react";
import axios from "axios";

class AddPlant extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
    };
  }

  addPlant = () => {
    const plant = { name: this.state.name };

    if (plant.name && plant.name.length > 0) {
      axios
        .post("/api/plants", plant)
        .then((res) => {
          if (res.data) {
            this.props.getPlants();
            this.setState({ plant: "" });
          }
        })
        .catch((err) => console.log(err));
    } else {
      console.log("Input field required");
    }
  };

  handleChange = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  render() {
    let { name } = this.state;
    return (
      <div class="col-sm">
        <h1>Add New Plant</h1>
        <form>
          <div class="form-group row">
            <label for="plantName" class="col-sm-2 col-form-label">
              Name
            </label>
            <div class="col-sm-10">
              <input
                type="text"
                class="form-control"
                onChange={this.handleChange}
                value={name}
              />
            </div>
          </div>
          <button class="btn btn-primary mb-2" onClick={this.addPlant}>
            Add
          </button>
        </form>
      </div>
    );
  }
}

export default AddPlant;
