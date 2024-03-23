import{
  createContext,
  useContext,
  useState
} from 'react';

function Card1(props){
  function classes(){
      const bg = props.bgcolor ? ' bg-' + props.bgcolor : ' ';
      const txt = props.txtcolor ? ' text-' + props.txtcolor : ' text-white';
      return 'card mb-3 ' + bg + txt; 
  }

  return (
      <div className={classes()} style={{maxWidth: "90rem",
                                         marginTop: "30px",
                                         fontsize: "1px",
                                        alignitems: "center"}}>
          <div className="card-header"> {props.header} </div>
          <div className="card-body">
              {props.title && (<h5 className="card-title"> {props.title}</h5> )}
              {props.text && (<p className="card-text"> {props.text}</p> )}
              {props.body}
              {props.status && ( <div id="createStatus"> {props.status} </div> )}
          </div>
      </div>
  );
}
export default Card1;
const BankContext = createContext(null);
export const useBankContext = () => useContext(BankContext);
export const BankProvider = ({children}) => {
  const[bank, setBank] = useState({
      users:[
          { name: 'test1', email: 'test@test.test', password: 'testsecret1', balance: 5, },
          { name: 'test2', email: 'test2@test.test', password: 'testsecret2', balance: 10, },
      ]
  }
  )
  const addUser = (user) => {
      setBank({
          ...bank,
          users: [...bank.users, user]
      });
  }
  return (
      <BankContext.Provider value={{
          bank,
          addUser,
      }}>
          {children}
      </BankContext.Provider> 

  );
}