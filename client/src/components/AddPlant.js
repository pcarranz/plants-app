import React, { Component } from "react";
import axios from "axios";

class AddPlant extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      type: "",
      care: "",
      alert: {
        class: "hidden",
        message: "",
      },
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleTypeChange = this.handleTypeChange.bind(this);
    this.handleCareChange = this.handleCareChange.bind(this);
  }

  addPlant = () => {
    const plant = {
      name: this.state.name,
      type: this.state.type,
      care: this.state.care,
    };

    if (plant.name && plant.name.length > 0) {
      axios
        .post("/api/plants", plant)
        .then((res) => {
          if (res.data) {
            this.setState({
              alert: {
                class: "alert alert-success visible",
                message: "A new plant has been added.",
              },
            });
          }
        })
        .catch((err) => {
          console.log(err);
          this.setState({
            alert: {
              class: "alert alert-danger visible",
              message: "Error while adding new plant.",
            },
          });
        });
    } else {
      console.log("Plant name is required");
      this.setState({
        alert: {
          class: "alert alert-danger visible",
          message: "Plant name is required.",
        },
      });
    }
  };

  handleNameChange = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  handleTypeChange = (e) => {
    this.setState({
      type: e.target.value,
    });
  };

  handleCareChange = (e) => {
    this.setState({
      care: e.target.value,
    });
  };

  render() {
    let { name, type, care, alert } = this.state;
    return (
      <div className="col-sm">
        <h1>Add New Plant</h1>
        <div className="form-group row">
          <label htmlFor="plantName" className="col-sm-2 col-form-label">
            Name
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              onChange={this.handleNameChange}
              value={name}
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="plantType" className="col-sm-2 col-form-label">
            Type
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              onChange={this.handleTypeChange}
              value={type}
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="plantCare" className="col-sm-2 col-form-label">
            Care Description
          </label>
          <div className="col-sm-10">
            <textarea
              className="form-control"
              id="plantCareTextArea"
              rows="5"
              onChange={this.handleCareChange}
              value={care}
            ></textarea>
          </div>
        </div>
        <div id="add-plant-alert" className={alert.class} role="alert">
          {alert.message}
        </div>
        <button className="btn btn-primary mb-2" onClick={this.addPlant}>
          Add
        </button>
      </div>
    );
  }
}

export default AddPlant;
