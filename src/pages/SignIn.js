import React from 'react';
import Form from '../componants/Form';

function SignIn({ setToken }){
  return (
    
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <Form  setToken={setToken}/>
      </section>
    </main>
  )
}
export default SignIn