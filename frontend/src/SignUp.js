import React, {useState} from 'react'
import './App.css'
import images from './images/User Profile logo.webp'
import {Link,Navigate,useNavigate} from'react-router-dom';
import axios from 'axios';

const App = () => {
//Use state object
const [data,setData] = useState({
username : '',
email : '',
phoneNumber : '',
password : '',
confirmPassword : ''
})


//Deconstructing the useState Data
const {username, email, phoneNumber, password,confirmPassword} = data;

const dataHandler = (e) =>{
setData({...data,[e.target.name] : e.target.value})
}

const submiHandler = (e) =>{
e.preventDefault();
if(password!== confirmPassword){
alert('Password and Confirm Password do not match')
}
else{
alert('Successfully Submitted')
console.log(data);
}
}

//to Use the data from one page to another
const navigate = useNavigate();
const toComponentB=()=>{

  if(password!== confirmPassword){
    alert('Password and Confirm Password do not match')
    }
    else{
    alert('Successfully Submitted')
    console.log(data);
    navigate('/displayContent',{state:{
      usName: data.username,
      email: data.email,
      phoneNumber: data.phoneNumber,
      password:data.password,
      confirmPassword:data.confirmPassword
    }});
    }
}

const [Path,setPath] = useState(false)
if (Path) {
    return <Navigate to="/Login" replace />  
}

const submitReview= ()=>{
  axios.post('http://localhost:4001/api/submittingData',{
    buName : data.username,
    bEmail : data.email,
    bPhoneNumber : data.phoneNumber,
    bPassword : data.password
  }).then(() => {alert('Successfully Submitted')})
};

return (
<div className='SignUp'>
<center><h1>Welcome to the Employee Portal </h1></center>
      <ul>
        <Link to="/"><li>Home</li></Link>
        <Link to ="/login"> <li>Login</li></Link>
        <Link to="/signUp"> <li>Sign Up</li></Link>
        <Link to="/about"><li>About</li></Link>
        <Link to="/displayContent2"><li>Display Content</li></Link>
      </ul>
<center><h2>Sign Up Form </h2></center>

<img src={images} alt="profile" />

<form onSubmit={submiHandler}>
<label>Username</label>
<input type="text"  placeholder="Enter Username" name="username" value={username} onChange={dataHandler}/> <b/>

<label>Email</label>
<input type="email" placeholder="Enter Email"name="email" value={email} onChange={dataHandler}/><b/><b/>

<label>Phone Number</label>
<input type="number"  placeholder="Enter Phone Number"name="phoneNumber" value={phoneNumber}onChange={dataHandler}/><b/>

<label>Password</label>
<input type="password" placeholder="* * * * * *" name="password" value={password}onChange={dataHandler}/><b/>

<label>Confirm Password</label>
<input type="password" placeholder="* * * * * *" name="confirmPassword" value={confirmPassword} onChange={dataHandler}/><b/>

<button type="submit"  onClick={()=>{submitReview()}}>Sign Up</button> <b/>
<button type="submit"  onClick={()=>{toComponentB()}}>Submit the data and view in next page</button> <b/>

</form>
<button2 className="link-btn" onClick={() => setPath(true)}>Already have an account? Login here.</button2>
</div>
)
}
export default App;
