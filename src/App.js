import React from 'react';
import Navbar from './components/Navbar';
import About from './components/pages/About';
import LogIn from './components/auth/LogIn';
import Home from './components/pages/Home';
import Courses from './components/pages/Courses';
import { Route, Routes } from "react-router-dom";
import SignUp from './components/auth/SignUp'


const App = () => {
    
    return(
        <>
            <Navbar />
            <div className = "container">
                <Routes>
                    <Route path = "/" element = {<Home />}></Route>
                    <Route path = "/courses/*" element = {<Courses />}></Route>
                    <Route path = "/about" element = {<About />}></Route>
                    <Route path = "/login" element = {<LogIn />}></Route>
                    <Route path = "/signup" element = {<SignUp />}></Route>
                    
                </Routes>
            </div>
            
        </>
    );
}

export default App;