import React from 'react'
import './HomePage.css'
import {Link} from 'react-router-dom'

export const Navbar = () => {
  return (
    <div className='MainBody'>
      <center><h2>Home Page</h2></center>
      <div className='navbar'>
      <ul>
        <Link to="/"><li>Home</li></Link>
        <Link to ="/login"> <li>Login</li></Link>
        <Link to="/signUp"> <li>Sign Up</li></Link>
        <Link to="/about"><li>About</li></Link>
      </ul>

      <div className='info' >
    	<h3>For Employees</h3>
    	<article>The three Social Security Schemes run by the Employees’ 
        P F Organisation are for the employees engaged in the Industries and establishments
         and EPFO constantly makes effort to provide better services. Information regarding 
         all the available services and the application forms for Employees and Pensioners 
         are available for download and the process for availing the benefits have been explained 
         in the documents and FAQs. The women employees are also given the benefits at par and 
         there are special benefits for the employees who had to leave the present job due to 
         physical incapacitation. The youth of the country who are our potential customers either by 
         becoming an entrepreneur or an employee can also collect all information on the facilities 
         and the benefits provided by the EPFO.
		</article>
		
   </div>

      </div>

    </div>
  )
}

export default Navbar;