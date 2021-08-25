import React, {useEffect,useState} from 'react';
import { useSelector,connect } from "react-redux";
import { apiCallUserInfo,apiPutUserInfo } from '../constants/fetch';


function User({state,apiUserInfo,apiChangeInfo}) {
  
  const firstname=useSelector((state)=> state.firstname)
  const lastname=useSelector((state)=> state.lastname)
  const tokenValue=useSelector((state)=> state.token)
  const errorMessage=useSelector((state)=> state.error)

  const [isOpen,setIsOpen]=useState(false)
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  useEffect(()=>{
    apiUserInfo(tokenValue)
  },[state])

  const handleClick = async e => {
    isOpen? (setIsOpen(false)) :(setIsOpen(true))
    console.log(isOpen)
 
  }
  const handleSubmit = async e => {
    e.preventDefault();
    apiChangeInfo({firstName,lastName},tokenValue)
    if(errorMessage==''){
      setIsOpen(false)
    }
   }
    

    return (
       <main className="main bg-dark">
      <div className="header">
        <h1>Welcome back<br />{firstname} {lastname} !</h1>
        <button className="edit-button" onClick={handleClick}>Edit Name</button>
      </div>

      {isOpen? (
        <div className='edit-profile'>
          <form className='edit-form'onSubmit={handleSubmit}>
            <div className="input-wrapper">
              <label htmlFor="firstname">Firstname</label>
              <input required type="text" id="firstname" name="firstname" value={firstName} onChange={e => setFirstName(e.target.value)} />
            </div>
            <div className="input-wrapper">
              <label htmlFor="lastname">Lastname</label>
              <input required type="text" id="lastname" name="lastname" value={lastName}  onChange={e => setLastName(e.target.value)}/>
            </div>
            <div>{errorMessage}</div>
            <button className="sign-in-button">Save</button>
          </form>
        </div>)

        
        :''}
      <h2 className="sr-only">Accounts</h2>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Checking (x8349)</h3>
          <p className="account-amount">$2,082.79</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Savings (x6712)</h3>
          <p className="account-amount">$10,928.42</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
          <p className="account-amount">$184.30</p>
          <p className="account-amount-description">Current Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
    </main>
    )
}
const mapStateToProps= (state) => { 
    return state
}

const mapDispatchToProps= dispatch=>{
  return {
    apiUserInfo:(token)=>dispatch(apiCallUserInfo(token)),
    apiChangeInfo:(body,token)=>dispatch(apiPutUserInfo(body,token))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(User)