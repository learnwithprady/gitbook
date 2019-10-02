import React from "react";
import NavBar from "../_components/Navbar";
import PrivateRoute from "../_components/PrivateRoute";
import { BrowserRouter, Switch } from "react-router-dom";
import Profile from "../_components/Profile";
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
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;