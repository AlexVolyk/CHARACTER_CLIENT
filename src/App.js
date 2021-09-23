import React, {useState, useEffect} from 'react';
import '../src/Components/Landing/landingpage.css'

// import Auth from './Components/Auth/Auth';
// import Random from './Random';
// import Login from './Components/Auth/Sign-Log/Login'; 
// import Signup from './Components/Auth/Sign-Log/Signup';
// import Auth from './Components/Auth'
// import { Route, BrowserRouter as Router} from 'react-router-dom';
// import Landing from './Components/Landing/LandingPage';
// import Signup from './Components/Auth/Sign-Log/Signup';
// import Login from './Components/Auth/Sign-Log/Login';
// import Create from './Components/Character/CharCreate';
// import Auth from './Components/Auth/Auth'
// import { Route, BrowserRouter as Router, Link, Switch} from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Navigation from './Components/Nav/Navbar';


import { Context } from './Context';

function App() {
  // const [toggle, setToggle] = useState(true);
  // const Tog = () => setToggle(!toggle);

  // const [sessionToken, setSessionToken] = useState('');
  const [username, setUsername] = useState('');
  
  const updateName = (newName) => {
    setUsername(newName);
    // console.log(newName , '-----------');
  }

  const clearToken = () => {
    localStorage.clear();
    setSessionToken('');
  }


  // const protectedViews = () => {
  //   return (sessionToken === localStorage.getItem('token') ? <WorkoutIndex token={sessionToken}/>
    // : <Auth updateToken={updateToken}/>)

    // style={{width: "1200px",
    // margin: "0 auto"}}

    const [sessionToken, setSessionToken] = useState('');
    useEffect(() => {
      if (localStorage.getItem('token')){
        setSessionToken(localStorage.getItem('token'));
      }
    }, [])
  
    const updateToken = (newToken) => {
      localStorage.setItem('token', newToken);
      setSessionToken(newToken);
      // console.log(newToken , '-----------');
    }

    return (
      <Context.Provider value={{
        updateName, updateToken, username, sessionToken, clearToken
      }}>
        {/* We get sessionToken from the SignUp or Login files via Context (for getting sessionToken we use updateToken function) */}
        {/* We get a value from the sessionToken and send it to the Navigation file with name (token)*/}
        <Navigation token={sessionToken}/>
        <Footer />
      </Context.Provider>
    );
}

export default App;