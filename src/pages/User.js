import React from 'react';
import { connect} from 'react-redux'


function User(state) {

  console.log(state) 
    return (
        <div>
            <p>teeest</p>
            <p>teeest</p>
            <p>teeest</p>
            <p>teeest</p>
        </div>
    )
}
const mapStateToProps= (state) => { 
    return state
}

export default connect(mapStateToProps)(User)