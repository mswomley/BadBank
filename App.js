import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import Home from "./home"
import CreateAccount from "./createaccount"
import Withdraw from "./withdraw"
import Deposit from "./deposit"
import AllData from "./alldata"
import money from "./money"
import { NavLink } from 'react-router-dom';

function App () {
  return (
<Router>
      <nav class="topnav">
        <NavLink class="active"  to="/"> Home </NavLink>
        <NavLink class="active"  to="/createaccount"> Create Account </NavLink>
        <NavLink class="active"  to="/withdraw"> Withdraw </NavLink>
        <NavLink class="active"  to="/deposit"> Deposit </NavLink>
        <NavLink class="active"  to="/alldata"> All Data </NavLink>
      </nav>
  <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/createaccount" element={<CreateAccount />} />
      <Route path="/withdraw" element={<Withdraw />} />
      <Route path="/deposit" element={<Deposit />} />
      <Route path="/alldata" element={<AllData />} />
  </Routes>
</Router>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
  );
  export default App;
 