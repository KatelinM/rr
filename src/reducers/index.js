import { combineReducers } from "redux";
import searchReducer from "./searchReducer";

const rootReducer = combineReducers({
  searchPeople: searchReducer,
  searchFilms: searchReducer,
  searchPlanets: searchReducer,
});

export default rootReducer;
