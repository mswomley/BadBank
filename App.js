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

function App () {
  return (
<Router>
      <nav class="topnav">
        <Link class="topnav" to="/"> Home </Link>
        <Link class="topnav" to="/createaccount"> Create Account </Link>
        <Link class="topnav" to="/withdraw"> Withdraw </Link>
        <Link class="topnav" to="/deposit"> Deposit </Link>
        <Link class="topnav" to="/alldata"> All Data </Link>
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
 