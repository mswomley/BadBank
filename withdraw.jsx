import { useState } from "react";
import { Card, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import { useBankContext } from "./money";

function Withdraw() {
  const [withdrawalAmount, setWithdrawalAmount] = useState(0);
  const [accountBalance, setAccountBalance] = useState(100); 

  const handleWithdrawal = (event) => {
    event.preventDefault();
    if (withdrawalAmount > accountBalance) {
      alert("Transaction failed");
    } 
    else if (isNaN(withdrawalAmount)) {
      alert("Please enter a number!");
      } 
    else {
      setAccountBalance(accountBalance - withdrawalAmount);
      alert(`Success! New balance: $${accountBalance - withdrawalAmount}`);
    }
  };

  return (
    <>
      <div className="card" color="white" style={{width: 300}}>
        <div>
          <div>
            <div className="card-header">
              Withdraw
            </div>
            <div className="card-body">
              Account Balance ${accountBalance}
              <br></br>
                <br></br>
            <form onSubmit={handleWithdrawal}>
              <input
                type="number"
                width="200"
                value={withdrawalAmount}
                onChange={(event) => setWithdrawalAmount(Number(event.target.value))}
              ></input>
              <br></br>
              <input className="submit" type="submit" width="200" value="Withdraw" disabled={!withdrawalAmount}></input>
            </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Withdraw;