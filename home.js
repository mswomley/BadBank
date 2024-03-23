import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";
import bank from './bank.png';
import Card from 'react-bootstrap/Card'



function Home () {
    return (
        <>
        <div className="container">
        </div>
  <div class="card" style={{width: 300}}>
  <img class="card-img-top" src={bank} alt="bank"></img>
  <div class="card-body">
    <h1 class="card-title" >Maggie's Bank</h1>
    <p class="card-text">Welcome, click Create Account to get started. </p>
  </div>


</div>
        </>
         );
}



export default Home;

