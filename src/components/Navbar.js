import {Link} from "react-router-dom";
import pythonLogo from "../images/python_logo.png";
import React from 'react';
import './Navbar.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
// import { Router} from "react-router";

export default function Navbar(params) {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{
        bgcolor: '#ff8800',
        color: '#FFFFFF',
        display: 'flex'
      }}>
        <Toolbar >
            <Box className="nav-container" sx={{
                alignItems: 'center',
                justifyContent: 'space-between',
                height: 60,
                margin: 0.5
            }}>
                <Link to="/" className="site-title"> 
                    <img src={pythonLogo} alt='python logo' className = "pythonLogo"></img>
                </Link>
                <ul>
                    {/* <Customlink to = "/" className="nav-button">Home</Customlink>
                    <Customlink to = "/courses" className="nav-button">Courses</Customlink>
                    <Customlink to = "/about" className="nav-button" >About</Customlink>
                    <Customlink to = "/login" className="nav-button">Log In</Customlink> */}
                </ul>
                
            </Box>
            {/* <Router> */}
                <Button color="inherit" sx={{
                    fontSize: 30, 
                }}>Learn Python</Button>
                <Button id="home-button" component={Link} to='/' color='inherit' sx={{
                    ml: 100,
                    fontSize: 20,
                    position: "static", //top: 10, right: 425-50, zIndex: 2000
                }}>Home</Button>
                <Button id="about-button" component={Link} to='/about' color='inherit' sx={{
                    ml: 2,
                    fontSize: 20,
                    position: "static", //top: 10, right: 325-50, zIndex: 2000
                }}>About</Button>
                <Button id="courses-button" component={Link} to='/courses' color='inherit' sx={{
                    ml: 2,
                    fontSize: 20,
                    position: "static", //top: 10, right: 205-50, zIndex: 2000
                }}>Courses</Button>
                <section id="whenSignedOut">
                <Button id="login-button" component={Link} to='/login' color='inherit' sx={{
                    ml: 2,
                    fontSize: 20,
                    position: "static", //top: 10, right: 112-50, zIndex: 2000
                }}>Login</Button>
                </section>
                <section id = "whenSignedIn" hidden="true">
                <Button id="login-button" component={Link} to='/login' color='inherit' sx={{
                    fontSize: 20,
                    position: "fixed", top: 10, right: 112-50, zIndex: 2000
                }}>Signout</Button>

                </section>
                
            {/* </Router> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}


// function Customlink({ to, children, ...props }) {
//     const resolvedPath = useResolvedPath(to);
//     const isActive = useMatch({path: resolvedPath.pathname, end:true});
//     return (
//     <li className = { isActive ? "active" : ""}>
//         <Link to={to} {...props}>{children}</Link>
//     </li>
//     )
// }