import React from "react";
import Button from '@mui/material/Button';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {Link} from 'react-router-dom';
import WICoding from "./courses/WICoding";
import ForLoops from "./courses/ForLoops";
import YPython from "./courses/YPython";
import Box from '@mui/material/Box';
import IfStatements from "./courses/IfStatements";



export default function Courses(params) {

    return (
        <>
            <Routes>
                <Route path = '/whatIsCoding' element = {<WICoding/>} />
                <Route path = '/whyPython' element = {<YPython/>} />
                <Route path = '/forLoops' element = {<ForLoops/>} />
                <Route path = '/ifStatements' element = {<IfStatements/>} />
            </Routes>

            <Box sx={{
                bgcolor: '#',
                color: '#000000',
                padding: '5px',
                height: '20px'
                }}></Box>
            <h1>Courses</h1>
            <div>
                <div>
                    
                    <Button variant="contained" color="primary" component={Link} to='/courses/whatIsCoding' sx={{
                    fontSize: 20, 
                    margin: 3,
                    }}>What Is Coding?</Button>

                    <Button variant="contained" color="primary" component={Link} to='/courses/whyPython' sx={{
                    fontSize: 20, 
                    margin: 3,
                    }}>Why Python?</Button>

                    <Button variant="contained" color="primary" component={Link} to='/courses/forLoops' sx={{
                    fontSize: 20, 
                    margin: 3,
                    }}>For Loops</Button>

                    <Button variant="contained" color="primary" component={Link} to='/courses/ifStatements' sx={{
                    fontSize: 20, 
                    margin: 3,
                    }}>If Statements</Button>
                </div>

            </div>
            
        </>
    )
};
