import React from "react";
import NavBar from "../_components/Navbar";
import PrivateRoute from "../_components/PrivateRoute";
import { BrowserRouter, Switch } from "react-router-dom";
import Profile from "../Profile";
import WebcamCapture from "../_components/WebcamCapture";
import Home from "../HomePage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <NavBar />
        </header>
        <Switch>
          <PrivateRoute exact path="/" component={Home} />
          <PrivateRoute path="/profile" component={Profile} />
          <PrivateRoute path="/capture" component={WebcamCapture} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;