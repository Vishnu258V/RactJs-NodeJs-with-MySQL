import React, {useState} from 'react'
import './App.css'
import images from './images/User Profile logo.webp'
import {Link, Navigate} from'react-router-dom';


const Login = (props) => {

//Use state object
const [data,setData] = useState({
username : '',
password : '',
})

//Deconstructing the useState Data
const {username, password} = data;

const dataHandler = (e) =>{
setData({...data,[e.target.name] : e.target.value})
}

const submiHandler = (e) =>{
e.preventDefault();
console.log(alert('Successfully Submitted'))
console.log(data);
}

const [Path,setPath] = useState(false)
if (Path) {
    return <Navigate to="/SignUp" replace />
}

return (
<div className='Login'>
<center><h1>Welcome to the Employee Portal </h1></center>
      <ul>
        <Link to="/"><li>Home</li></Link>
        <Link to ="/login"> <li>Login</li></Link>
        <Link to="/signUp"> <li>Sign Up</li></Link>
        <Link to="/about"><li>About</li></Link>
        <Link to="/displayContent2"><li>Display Content</li></Link>
      </ul>
<center><h2>Login Page</h2></center>
<img src={images} alt="profile" />

<form onSubmit={submiHandler}>
<label>Username</label>
<input type="text"  placeholder="Enter Username" name="username" value={username} onChange={dataHandler}/> <b/>

<label>Password</label>
<input type="password" placeholder="* * * * * *" name="password" value={password}onChange={dataHandler}/><b/>

<button type="submit">Login</button> <b/>

</form>
<button2 className="link-btn" onClick={() => setPath(true) }>Don't have an account? Register here.</button2>
</div>
)
}
export default Login;








