import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/Nav";
import HappySongs from "./components/pages/HappySongs";
import Home from "./components/pages/Home";
import SadSongs from "./components/pages/SadSongs";
import "./App.css";

function App() {
  return (
<Router>
      <div>
        <Nav />
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/happysongs" component={HappySongs} />
        <Route exact path="/sadsongs" component={SadSongs} />
      </div>
</Router>
      
      );
    }
export default App;
