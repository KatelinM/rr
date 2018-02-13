import React, { Component } from "react";
import { Link } from "react-router-dom";
import './home.css';

class Home extends Component {
  render() {
    return (
      <div className="container">
        <div className="SW">Star Wars</div>
        <div>
          <div className="col-md-4 box">
            <Link to='/people' className="link">
              <div className="card">
                People
            </div>
            </Link>
          </div>
          <div className="col-md-4 box">
            <Link to='/films' className="link">
              <div className="card">
                Films
              </div>
            </Link>
          </div>
          <div className="col-md-4 box">
            <Link to='/planets' className="link">
              <div className="card">
                Planets
              </div>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
