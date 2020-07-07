import React, { Component } from "react";

class AddPlant extends Component {
  render() {
    return (
      <div class="col-sm">
        <h1>Add New Plant</h1>
        <form>
          <div class="form-group row">
            <label for="inputPassword" class="col-sm-2 col-form-label">
              Name
            </label>
            <div class="col-sm-10">
              <input type="password" class="form-control" id="inputPassword" />
            </div>
          </div>
          <button type="submit" class="btn btn-primary mb-2">
            Add
          </button>
        </form>
      </div>
    );
  }
}

export default AddPlant;
