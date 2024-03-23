import{useState} from 'react';
import { Card, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import { useBankContext } from "./money";

function Deposit() {
    const [depositAmount, setDepositAmount] = useState(0);
    const [accountBalance, setAccountBalance] = useState(0); 


    const handleDeposit = (event) => {
      event.preventDefault();
      setAccountBalance(accountBalance + depositAmount);
      alert(`Success! New balance: $${accountBalance + depositAmount}`);
    };
  
    return (
      <>
        <div className="card" style={{width: 300}}>
          <div color="white" >
            <div>
              <div className="card-header" >
                Deposit
              </div>
              <div className="card-body">
                Account Balance ${accountBalance}
                <br></br>
                <br></br>
              
              <form onSubmit={handleDeposit}>
                <input
                  type="number"
                  width="200"
                  value={depositAmount}
                  onChange={(event) => setDepositAmount(Number(event.target.value))}
                ></input>
                <br></br>
                <input className="submit" type="submit" width="200" value="Deposit" disabled={!depositAmount}></input>
              </form>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  
  export default Deposit;