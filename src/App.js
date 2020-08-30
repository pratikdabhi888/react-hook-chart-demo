import React from 'react';
import './App.css';
import {Provider} from 'react-redux';
import store from './redux/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router, Route, Switch,
} from "react-router-dom"
import Home from "./Routes/Home/Home";
import Marketer from "./Routes/Marketer/Marketer";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/admin">
            <Home />
          </Route>
          <Route path="/marketer">
            <Marketer />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
