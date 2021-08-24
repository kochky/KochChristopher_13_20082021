import React from 'react';
import {useEffect } from 'react'
import { useSelector,connect, useDispatch } from "react-redux";


function User() {
  const staate=useSelector((state)=>state)

  const tokenBody=useSelector((state)=> state.token)
  const dispatch= useDispatch()
  useEffect(() => {
    fetch('http://localhost:3001/api/v1/user/profile', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${tokenBody}`
    },
    
  })
    .then(data => {return data.json()})
    .then(dataJson => {
      console.log(dataJson.body)
      //dispatch({ type: 'FETCH_DATA', firstName: dataJson.body.firstName, lastName: dataJson.body.lastName, id: dataJson.body.id})
      console.log(staate)
    })
  },[])

 
    return (
       <main className="main bg-dark">
      <div className="header">
        <h1>Welcome back<br />Tony Jarvis!</h1>
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

export default connect(mapStateToProps)(User)