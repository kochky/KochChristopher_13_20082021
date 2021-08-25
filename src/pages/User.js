import React, {useEffect} from 'react';
import { useSelector,connect } from "react-redux";
import { apiCallUserInfo } from '../service/fetch';


function User({state,apiUserInfo}) {
  
  const firstName=useSelector((state)=> state.firstname)
  const lastName=useSelector((state)=> state.lastname)
  const tokenValue=useSelector((state)=> state.token)

  useEffect(()=>{
    apiUserInfo(tokenValue)
  },[apiUserInfo])

 
    return (
       <main className="main bg-dark">
      <div className="header">
        <h1>Welcome back<br />{firstName} {lastName} !</h1>
        <button className="edit-button">Edit Name</button>
      </div>
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
    apiUserInfo:(token)=>dispatch(apiCallUserInfo(token))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(User)