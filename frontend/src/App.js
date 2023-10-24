import React from 'react';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Navbar from './NavBar';
import AboutPage from './AboutPage';
import Login from './Login';
import SignUp from './SignUp';
import DisplayContent from './DisplayContent';
import './HomePage.css';
import Diplay2 from './Diplay2';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Navbar/>}/>
          <Route path="/about" element={<AboutPage/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signUp" element={<SignUp/>}/>
          <Route path="/displayContent" element={ <DisplayContent/> }/>
          <Route path="/displayContent2" element={<Diplay2/> }/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App;


