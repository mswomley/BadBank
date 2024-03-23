import ReactDOM from 'react-dom';
import './App.css';
import React, { useState } from 'react';
import { Formik, Field, Form } from 'formik';
import {validateEmail} from "./validateeemail"; 

const UserContext = React.createContext(null);

 
const PasswordErrorMessage = () => { 
 return ( 
   <p className="FieldError">Password should have at least 8 characters</p> 
 ); 
}; 
 
function App() { 
 const [firstName, setFirstName] = useState(""); 
 const [lastName, setLastName] = useState(""); 
 const [email, setEmail] = useState(""); 
 const [password, setPassword] = useState({ 
   value: "", 
   isTouched: false, 
 }); 
 const [role, setRole] = useState("role");
 const ctx = React.useContext(UserContext);  
 

 const getIsFormValid = () => { 
   return ( 
     firstName && 
     validateEmail(email) && 
     password.value.length >= 8 && 
     role !== "role" 
   ); 
 }; 
 
 const clearForm = () => { 
   setFirstName(""); 
   setLastName(""); 
   setEmail(""); 
   setPassword({ 
     value: "", 
     isTouched: false, 
   }); 
   setRole("role"); 
 }; 

 const addAccount = () => {
    return (<div><button type="submit" value="add another account">Add Another Account</button></div>);
 }


 const handleSubmit = (e) => { 
   e.preventDefault(); 
   alert("Success"); 
   clearForm();
   return (<div><button type="submit" value="add another account">Add Another Account</button></div>);
 }; 
 
 return ( 
   <div className="card" style={{width: 300}} > 
    <div class="card-header">Sign Up</div>
    <div class="card-body">
     <form onSubmit={handleSubmit}> 
       <fieldset> 
         <div className="Field" > 
           <label> 
             Name <sup>*</sup> 
           </label> <br></br>
           <input 
            required
             value={firstName} 
             onChange={(e) => { 
               setFirstName(e.target.value); 
             }} 
           /> 
         </div> 
         <div className="Field"> 
           <label> 
             Email <sup>*</sup> 
           </label> <br></br>
           <input 
            required
            type="email"
             value={email} 
             onChange={(e) => { 
               setEmail(e.target.value); 
             }} 
           /> 
         </div> 
         <div className="Field"> 
           <label> 
             Password <sup>*</sup> 
           </label> <br></br>
           <input 
            required
             value={password.value} 
             type="password" 
             onChange={(e) => { 
               setPassword({ ...password, value: e.target.value }); 
             }} 
             onBlur={() => { 
               setPassword({ ...password, isTouched: true }); 
             }} 
           /> 
           {password.isTouched && password.value.length < 8 ? ( 
             <PasswordErrorMessage /> 
           ) : null} 
         </div> 
         <button type="submit" onSubmit={!getIsFormValid()} > 
           Submit 
         </button> 
        
       </fieldset> 
     </form> 
     </div>
   </div> 
 ); 
} 



export default App; 
