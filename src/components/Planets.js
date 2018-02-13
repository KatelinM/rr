import React, { Component } from "react";
import { connect } from "react-redux";
import { searchPlanets } from "../actions/searchAction";
import { FormControl } from 'react-bootstrap';
import './style.css';

let timeoutId;
class Planets extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => this.props.searchPlanets(this.input.value), 1000);
  }
  render() {
    const { searchData, fetching } = this.props;
    console.log(searchData, "ini adalah hasil search");
    return (
      <div className="container">
        <div className="i-g">
          <span className="fa fa-search"></span>
          <FormControl
            type="text"
            placeholder="Enter Name Planets Star Wars ..."
            onChange={this.handleChange}
            inputRef={ref => {
              this.input = ref;
            }}
            className="search"
          />
        </div>
        <div
          className="row"
          style={{
            marginTop: "30px",
            marginBottom: "30px"
          }}
        >
          <div className="col-md-5" />
          {fetching && <div className="col-md-1 loaders" />}
          <div className="col-md-5" />
        </div>
        <div className="content">
          {searchData &&
            searchData.map((result, key) => (
              <div className="col-md-8 box-content" key={key}>
                <h3 className="name">{result.name}</h3>
                <p className="prg">Climate : {result.climate}</p>
                <p className="prg">Diameter : {result.diameter}</p>
                <p className="prg">Gravity : {result.gravity}</p>
                <p className="prg">Orbita Period : {result.orbital_period}</p>
                <p className="prg">Population : {result.population}</p>
                <p className="prg">Rotation Period : {result.rotation_period}</p>
                <p className="prg">Surface Water : {result.surface_water}</p>
                <p className="prg">Terrain : {result.terrain}</p>
              </div>
            ))}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    searchData: state.searchPlanets.all,
    fetching: state.searchPlanets.fetching
  };
}

export default connect(mapStateToProps, { searchPlanets })(Planets);
