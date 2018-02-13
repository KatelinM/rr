import React, { Component } from "react";
import { connect } from "react-redux";
import { searchPeople } from "../actions/searchAction";
import { FormControl } from 'react-bootstrap';
import './style.css';

let timeoutId;
class People extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => this.props.searchPeople(this.input.value), 1000);
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
            placeholder="Enter Name Character Star Wars ..."
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
                <p className="prg">Color Eye : {result.eye_color}</p>
                <p className="prg">Born : {result.birth_year}</p>
                <p className="prg">Gender : {result.gender}</p>
                <p className="prg">Weight : {result.mass}</p>
                <p className="prg">Hair Color : {result.hair_color}</p>
                <p className="prg">Skin Color : {result.skin_color}</p>
                <p className="prg">Height : {result.height}</p>
              </div>
            ))}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    searchData: state.searchPeople.all,
    fetching: state.searchPeople.fetching
  };
}

export default connect(mapStateToProps, { searchPeople })(People);
