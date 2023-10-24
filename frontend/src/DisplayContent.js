import React from 'react'
import {Link} from 'react-router-dom';
import {useLocation} from 'react-router-dom';
import './HomePage.css'

const DisplayContent = () => {
const location = useLocation();
  
  return (
    <div className='displayContent'>
    <center><h1>Content Display page</h1></center>
    <ul>
    <Link to ="/"><li>Home</li></Link>
    <Link to ="/login"> <li>Login</li></Link>
    <Link to ="/signUp"><li>Sign Up</li></Link>
    <Link to ="/about"><li>About</li></Link>
    <Link to ="/displayContent2"><li>Display Content</li></Link>
    </ul>

    <div className='info'>
    <center><h3> Details Entered in Login page/Sign Up page </h3></center>
      <ul1>
          <li1>User Name        : {location.state.usName} </li1><br/>
          <li1>Email            : {location.state.email}</li1><br/>
          <li1>Phone Number     : {location.state.phoneNumber}</li1><br/>
          <li1>Password         : {location.state.password}</li1><br/>
          <li1>Confirm Password : {location.state.confirmPassword}</li1><br/>


      </ul1>
    </div>
  </div>
  )
}
export default DisplayContent;