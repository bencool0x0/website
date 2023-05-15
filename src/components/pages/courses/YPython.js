import React from "react";
import Box from '@mui/material/Box';
import { createTheme } from '@mui/material/styles';
import { Typography } from "@mui/material";

const theme = createTheme({
    palette: {
      primary: {
        light: '#e0e0e0',
        main: '#3f50b5',
        dark: '#002884',
        contrastText: '#fff',
      },
      secondary: {
        light: '#ff7961',
        main: '#f44336',
        dark: '#ba000d',
        contrastText: '#000',
      },
    },
  });

export default function YPython(params) {
    return (
        <>
            <div> 
                <Typography variant = "h2">Why Python?</Typography>
                <Box sx={{
                bgcolor: '#',
                color: '#000000',
                padding: '5px',
                height: '20px'
                }}></Box>
                <Box sx={{
                bgcolor: '#e0e0e0',
                color: '#000000',
                padding: 2,
                borderRadius: 2
                }}>
                    <Typography variant = "h4" gutterBottom>Python is a relatively easy to learn language suitable for many programming tasks</Typography>
                    <Typography variant = "h6" gutterBottom>Python's own website boasts that the langauge is "easy to pick up whether you're a first time programmer or you're experienced with other languages"</Typography>
                    <Typography variant = "h6">Many people use Python, which means there are many resources online about Python, including code from other people that you can reuse. </Typography>
                    <Typography variant = "h6" gutterBottom>Also, it means that most computer systems can run Python.</Typography>

                </Box>
                <Box sx={{
                bgcolor: '#',
                color: '#000000',
                padding: '5px',
                height: '20px'
                }}></Box>
                <Box sx={{
                bgcolor: '#e0e0e0',
                color: '#000000',
                padding: 2,
                borderRadius: 2
                }}>
                    <Typography variant = "h4" gutterBottom>The skills learned in Python can be applied to other languages</Typography>
                    <Typography variant = "h6">Python is similar to Java and Javascript</Typography>
                </Box>
                <Box sx={{
                bgcolor: '#',
                color: '#000000',
                padding: '5px',
                height: '20px'
                }}></Box>
                <Box sx={{
                bgcolor: '#e0e0e0',
                color: '#000000',
                padding: 2,
                borderRadius: 2
                }}>
                    <Typography variant = "h4">All in all, Python is an easy to pick up yet highly versatile language that many people use!</Typography>
                </Box>
                
                
            </div>
        </>
    )
        
};
