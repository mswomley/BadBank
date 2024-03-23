import React from 'react';
import BankContext from "./createaccount";
import Card from "./createaccount";
import UserContext from "./createaccount"

function AllData(){
    const ctx = React.useContext(UserContext);
    return (
      <div className="card" style={{width: 300}}>
      <h5 className="card-header">User Data</h5>
      <p5>Name</p5>
      <p6>Maggie S</p6>
      <p5>Email</p5>
      <p6>maggie@mit.edu</p6>
      <p5>Pasword</p5>
      <p6>secret123</p6>
      {JSON.stringify(ctx)}<br/>
      </div>
    );
  }
  
  export default AllData;
  