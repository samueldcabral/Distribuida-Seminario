import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import MyNavbar  from "./components/Navbar/Navbar";

function App() {
  return (
    <Router>
       <MyNavbar/>
       <Route path="/" exact component={Login}/>
       <Route path="/home" exact component={Home}/>
    </Router>
  );
}

export default App;
