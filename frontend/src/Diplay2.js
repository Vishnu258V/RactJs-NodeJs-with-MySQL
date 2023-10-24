import React from 'react'
import {Link} from 'react-router-dom';
import './HomePage.css'

const Diplay2 = () => {

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
          <li1>User Name        :  </li1><br/>
          <li1>Email            : </li1><br/>
          <li1>Phone Number     : </li1><br/>
          <li1>Password         : </li1><br/>
          <li1>Confirm Password : </li1><br/>
      </ul1>

    </div>



  </div>
  )
}
export default Diplay2;