import React, { Component } from "react";
import { connect } from "react-redux";
import { searchFilms } from "../actions/searchAction";
import { FormControl } from 'react-bootstrap';
import './style.css';

let timeoutId;
class Films extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => this.props.searchFilms(this.input.value), 1000);
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
            placeholder="Enter Name Films Star Wars ..."
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
                <h3 className="name">{result.title}</h3>
                <p className="prg">Director : {result.director}</p>
                <p className="prg">Producer : {result.producer}</p>
                <p className="prg">Release Date : {result.release_date}</p>
                <p className="prg">Opening Crawl : {result.opening_crawl}</p>
              </div>
            ))}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    searchData: state.searchFilms.all,
    fetching: state.searchFilms.fetching
  };
}

export default connect(mapStateToProps, { searchFilms })(Films);
