import React from "react";
import { Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Home from "./components/Home";
import People from './components/People';
import Films from './components/Films';
import Planets from './components/Planets';

const FourOFour = () => <h1 style={{ color: "white" }}> Eror 404, Not found... </h1>;

const App = () => (
  <Provider store={store}>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/people" component={People} />
      <Route path="/films" component={Films} />
      <Route path="/planets" component={Planets} />
      <Route component={FourOFour} />
    </Switch>
  </Provider>
);

export default App;
