import React from 'react'
import { Link } from 'react-router-dom';
import './HomePage.css';
const AboutPage = () => {
  return (
    <div className='aboutPage'>
        <center><h1>About Page Content</h1></center>
        <ul>
        <Link to="/"><li>Home</li></Link>
        <Link to ="/login"> <li>Login</li></Link>
        <Link to="/signUp"> <li>Sign Up</li></Link>
        <Link to="/about"><li>About</li></Link>
      </ul>

   <div className='body'>

   <center><h3>Login Successful</h3></center>
  </div>
</div>
  )
}

export default AboutPage;