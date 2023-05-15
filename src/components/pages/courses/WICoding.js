import React, {useState, useEffect} from "react";
import Box from '@mui/material/Box';
import { createTheme } from '@mui/material/styles';
import QuestionCard from '../../QuestionCard';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';


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


export default function WICoding(params) {
    const [question1, setQuestion1] = useState(0);
    const [question2, setQuestion2] = useState(0);

    
    return (
        <>
            <Typography variant = "h2">What is Coding?</Typography>
                <br></br>
                <Box sx={{
                bgcolor: '#e0e0e0',
                color: '#000000',
                padding: 2,
                borderRadius: 2
                }}>
                    <Typography variant = "h4" gutterBottom>Coding allows us to communicate with computers</Typography>
                    <Typography variant = "h6" gutterBottom>By writing code, we provide the computer instructions</Typography>
                    <Typography variant = "h6">Essentially, coding is just getting the computer to do what we want it to do.</Typography>
                    
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
                    <Typography variant = "h4"gutterBottom>There are different types of languages</Typography>
                    <Typography variant = "h6"gutterBottom>Python, Java, C++, HTML, etc. </Typography>
                    <Typography variant = "h6">Each language comes with their own benefits and drawbacks.</Typography>
                    <Typography variant = "h6">Just like the languages we speak, each programming language is unique, some may be inspired by ones that came before it, and each one has its own strengths and weaknesses.</Typography>
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
                    <Typography variant = "h4">Coding has many purposes in the modern world</Typography>
                    <Typography variant = "h6">
                    <ul>
                        <li>Creating websites</li>
                        <li>Artificial Intelligence</li>
                        <li>Robotics</li>
                        <li>Medicine</li>
                        <li>Finance</li>
                        <li>and many more!</li>
                    </ul>
                    </Typography>
                </Box>
                

                <Box sx={{
                bgcolor: '#',
                color: '#000000',
                padding: '5px',
                height: '20px'
                }}></Box>
                <Box sx={{
                padding: '5px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                bgcolor: '#e0e0e0',
                }}>
                <QuestionCard question = {{
                    question: "What is code?",
                }} 
                answers = {{
                    a1: "secret speech",
                    a2: "a language for computers",
                    a3: "a type of fish",
                    a4: "a form of philosophical inquiry that explores the issue of human existence"
                }}
                answer = {2}
                questionNumber = {1}
                correct = {question1}
                setCorrect = {() => setQuestion1(1)}/>
                <p></p>
                </Box>
                

                <Box sx={{
                bgcolor: '#',
                color: '#000000',
                padding: '5px',
                height: '20px'
                }}></Box>

                <Box sx={{
                padding: '5px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                bgcolor: '#e0e0e0',
                }}>
                    <QuestionCard question = {{
                    question: "What is not a purpose of code?",
                }} 
                answers = {{
                    a1: "Artificial intelligence",
                    a2: "Finance",
                    a3: "Making games",
                    a4: "Eat food"
                }}
                answer = {4}
                questionNumber = {2}
                correct = {question2}
                setCorrect = {() => setQuestion2(1)}
                />
                </Box>

                <Box sx={{
                bgcolor: '#',
                color: '#000000',
                padding: '5px',
                height: '20px'
                }}></Box>

                <LinearProgress color = "success" variant = 'determinate' value = {(((question1 + question2) /2) * 100)}/>
                { (((question1 + question2) /2) * 100) === 100 ? 
                <Typography variant = "h5">Finished!</Typography> :  <Typography variant = "h5">Not done yet</Typography>}
        </>
    )
        
};
