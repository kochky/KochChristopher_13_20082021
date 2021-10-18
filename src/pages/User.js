import React, {useEffect,useState} from 'react';
import { useSelector,connect } from "react-redux";
import { apiCallUserInfo} from '../constants/fetchUserInfo';
import { apiPutUserInfo } from '../constants/fetchChangeInfo';
import AccountItem from '../componants/AccountItem'

function User({apiUserInfo,apiChangeInfo}) {
  
  const userInfos= useSelector((state)=>state)

  const [isOpen,setIsOpen]=useState(false)
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
 
  useEffect(()=>{
    apiUserInfo(userInfos.token,userInfos)        
  },[])


  const handleClick = async e => {
    isOpen? (setIsOpen(false)) :(setIsOpen(true))
  }

  const handleSubmit = async e => {
    e.preventDefault();
    apiChangeInfo({firstName,lastName},userInfos.token)
    if(userInfos.error===''){
      setIsOpen(false)
    }
   }
    
    return (
       <main className="main bg-dark">
      <div className="header">
        <h1>Welcome back<br />{userInfos.firstname} {userInfos.lastname} !</h1>
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
            <div>{userInfos.error}</div>
            <button className="sign-in-button">Save</button>
          </form>
        </div>)

        
        :''}
      <h2 className="sr-only">Accounts</h2>
      <AccountItem
        title="Argent Bank Checking (x8349)"
        amount='$2,082.79'
        description='Available' />
     <AccountItem
        title="Argent Bank Savings (x6712)"
        amount='$10,928.42'
        description='Available' />
      <AccountItem
        title="Argent Bank Credit Card (x8349)"
        amount='$184.30'
        description='Current' />
    </main>
    )
}
const mapStateToProps= (state) => { 
    return state
}

const mapDispatchToProps= dispatch=>{
  return {
    apiUserInfo:(token,data)=>dispatch(apiCallUserInfo(token,data)),
    apiChangeInfo:(body,token)=>dispatch(apiPutUserInfo(body,token))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(User)