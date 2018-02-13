import axios from "axios";
import { SEARCH, RES_SEARCH, ERR_SEARCH } from "./constants";

const API_PEOPLE = "https://swapi.co/api/people/";
const API_FILMS = "https://swapi.co/api/films/";
const API_PLANETS = "https://swapi.co/api/planets/";

export const searchPeople = name => {
  const request = axios.get(`${API_PEOPLE}?search=${name}`);

  return function (dispatch) {
    dispatch({
      type: SEARCH
    });

    return request
      .then(res => {
        dispatch({
          type: RES_SEARCH,
          payload: res.data.results
        });
      })
      .catch(err => {
        dispatch({
          type: ERR_SEARCH,
          payload: err
        });
      });
  };
};

export const searchFilms = name => {
  const request = axios.get(`${API_FILMS}?search=${name}`);

  return function (dispatch) {
    dispatch({
      type: SEARCH
    });

    return request
      .then(res => {
        dispatch({
          type: RES_SEARCH,
          payload: res.data.results
        });
      })
      .catch(err => {
        dispatch({
          type: ERR_SEARCH,
          payload: err
        });
      });
  };
};

export const searchPlanets = name => {
  const request = axios.get(`${API_PLANETS}?search=${name}`);

  return function (dispatch) {
    dispatch({
      type: SEARCH
    });

    return request
      .then(res => {
        dispatch({
          type: RES_SEARCH,
          payload: res.data.results
        });
      })
      .catch(err => {
        dispatch({
          type: ERR_SEARCH,
          payload: err
        });
      });
  };
};
