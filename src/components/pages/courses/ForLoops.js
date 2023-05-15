import React, {useState } from "react";
import Box from '@mui/material/Box';
import { createTheme } from '@mui/material/styles';
import QuestionCard from '../../QuestionCard';
import LinearProgress from '@mui/material/LinearProgress';
import CodeSnippet from "../../CodeSnippet";
import PageItem from "../../PageItem";
import Typography from '@mui/material/Typography';
import ".//courses.css";

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


export default function ForLoops(params) {
    const [question1, setQuestion1] = useState(0);
    const [question2, setQuestion2] = useState(0);
    const codeBlock1 = [{
        line: 1,
        code: "for x in range(5):"
    },
    {
        line: 2,
        code: "  for y in range (3):"
    },
    {
        line: 3,
        code: "    print(x+y,end = ' ')"
    },
    {
        line: 4,
        code: "  print()"
    }]

    
    return (
        <>
            <div> 
                <Typography variant = "h2">For Loops</Typography>
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
                    <Typography variant = "h4" gutterBottom>Loops are very powerful computing tools</Typography>
                    <Typography variant = 'h6'gutterBottom>
                        They are when computers start to perform tasks better than humans
                    </Typography>
                    <Typography variant = "h6" gutterBottom>
                        For example, it might take you a few hours to write down all the numbers from 1 to 10,000 but a computer can do that in a few milliseconds
                    </Typography>
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
                    <Typography variant = "h4" gutterBottom>Loops in python are a way of repeating a specific block of code a certain number of times.</Typography>
                    <Typography variant = "h6" gutterBottom>
                        There are two types of loops built into python: For and While Loop
                    </Typography>
                    <Typography variant = "h6" gutterBottom>
                        Each repeat of the code in a loop is called an “iteration”
                    </Typography>  
                    <Typography variant = "h6" gutterBottom>
                        Each iteration, the variable will be set to a certain value that is predetermined by the list in the for loop
                    </Typography>
           
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
                    <Typography variant = "h4" gutterBottom>Range function</Typography>
                    <CodeSnippet lines = {[{
                    line: 1,
                    code: "range( <any integer expression> )"
                },]} content = "center"/>
                    <Typography variant = "h6" gutterBottom>
                        The range function will return a list of numbers from 0 to one less than the argument
                    </Typography>
                    <Typography variant = "h6" gutterBottom>
                        Example
                    </Typography>  
                    <CodeSnippet lines = {[{
                    line: 1,
                    code: "print(range(10))"
                },]} content = "center"/>
                <CodeSnippet lines = {[{
                    line: 1,
                    code: "[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]"
                },]} content = "left"/>
                    <Typography variant = "h6" gutterBottom>
                        There 10 numbers, but 10 is not included because the list starts at 0
                    </Typography>
                    <Typography variant = "h6" gutterBottom>
                        This observation is applicable for every list returned by range(integer)
                    </Typography>
           
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
                    <Typography variant = "h4" gutterBottom>For Loop Syntax</Typography>
                    <Typography variant = 'h6'>
                        <b>for</b> + (any variable) + <b>in</b> + (a list):
                    </Typography>
                    <Typography variant = "h6" gutterBottom>
                        <ul><li>any code goes here</li></ul>
                    </Typography>
                    <Typography variant = "h6">
                        Unless you want to do the same thing many times, 
                    </Typography>
                    <Typography variant = "h6" gutterBottom>
                        the variable in the for loop -(any variable) in our example- will be in the block code inside of the loop
                    </Typography>
                    <CodeSnippet lines = {[{
                    line: 1,
                    code: "for x in range(5)"
                },{
                    line: 2,
                    code: "print(x)"
                },]} content = "center"/>
                <CodeSnippet lines = {[{
                    line: 1,
                    code: "0"
                },{
                    line: 2,
                    code: "1"
                },{
                    line: 3,
                    code: "2"
                },{
                    line: 4,
                    code: "3"
                },{
                    line: 5,
                    code: "4"
                },]} content = "left"/>
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
                    <Typography variant = "h4" gutterBottom>How a Loop Runs</Typography>
                    <Typography variant = "h6" gutterBottom>As stated before, the value of the variable is predetermined by the list</Typography>
                    <Typography variant = "h6" gutterBottom>The for loop will start with the variable equal to the first element in the list</Typography>
                    <Typography variant = "h6" gutterBottom>The next iteration will repeat the block of code, but with the variable equal to the second element in the list</Typography>
                    <Typography variant = "h6">This pattern of:</Typography>
                    <Typography variant = "h6">repeating the block of code inside the for loop with the variable equal to the element in the list after the one in the previous iteration</Typography>
                    <Typography variant = "h6" gutterBottom> continues until the list ends</Typography>
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

                    <Typography variant = "h4"gutterBottom>Let's take a look at how this loop runs</Typography>
                    <CodeSnippet lines = {[{
                        line: 1,
                        code: "for x in range(4):"
                    },{
                        line: 2,
                        code: "    print(x)"
                    }
                    ,]} content = "center"/>
                    <Typography variant = "h6">First, we need to identify what the list is going to be:</Typography>
                    <Typography variant = "h6">range(4) returns [0,1,2,3]</Typography>
                    <Typography variant = "h6" gutterBottom>We now know that x is going to be 0 for the first iteration, 1 for the second, 2 for the third, and 3 for the fourth</Typography>
                    <Typography variant = "h6"gutterBottom>First iteration</Typography>
                    <Typography variant = "h6"gutterBottom>x = 0</Typography>
                    <CodeSnippet lines = {[{
                        line: 1,
                        code: "for x in range(4):"
                    },{
                        line: 2,
                        code: "    print(x)"
                    }
                    ,]} content = "center"/>
                    <CodeSnippet lines = {[{
                        line: 1,
                        code: "0"
                    }
                    ,]} content = "left"/>
                    <Typography variant = "h6"gutterBottom>Second iteration</Typography>
                    <Typography variant = "h6">x = 1</Typography>
                    <Typography variant = "h6"gutterBottom>repeat the inner block of code</Typography>
                    <CodeSnippet lines = {[{
                        line: 1,
                        code: "for x in range(4):"
                    },{
                        line: 2,
                        code: "    print(x)"
                    }
                    ,]} content = "center"/>
                    <CodeSnippet lines = {[{
                        line: 1,
                        code: "0"
                    },
                    {
                        line: 2,
                        code: "1"
                    },]} content = "left"/>
                    <Typography variant = "h6"gutterBottom>Third iteration</Typography>
                    <Typography variant = "h6" gutterBottom>x = 2</Typography>
                    <CodeSnippet lines = {[{
                        line: 1,
                        code: "for x in range(4):"
                    },{
                        line: 2,
                        code: "    print(x)"
                    }
                    ,]} content = "center"/>
                    <CodeSnippet lines = {[{
                        line: 1,
                        code: "0"
                    },
                    {
                        line: 2,
                        code: "1"
                    },
                    {
                        line: 3,
                        code: "2"
                    },
                    ]} content = "left"/>
                    <Typography variant = "h6"gutterBottom>Fourth iteration</Typography>
                    <Typography variant = "h6" gutterBottom>x = 3</Typography>
                    <CodeSnippet lines = {[{
                        line: 1,
                        code: "for x in range(4):"
                    },{
                        line: 2,
                        code: "    print(x)"
                    }
                    ,]} content = "center"/>
                    <CodeSnippet lines = {[{
                        line: 1,
                        code: "0"
                    },
                    {
                        line: 2,
                        code: "1"
                    },
                    {
                        line: 3,
                        code: "2"
                    },
                    {
                        line: 4,
                        code: "3"
                    },
                    ]} content = "left"/>
                <Typography variant = "h6"gutterBottom>And we're done!</Typography>
                <Typography variant = "h6"gutterBottom>The result is:</Typography>
                <CodeSnippet lines = {[{
                        line: 1,
                        code: "0"
                    },
                    {
                        line: 2,
                        code: "1"
                    },
                    {
                        line: 3,
                        code: "2"
                    },
                    {
                        line: 4,
                        code: "3"
                    },
                    ]} content = "left"/>
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
                    <Typography variant = "h4" gutterBottom>Loop Tracing</Typography>
                    <Typography variant = "h6"gutterBottom>Loop tracing is manually going through the steps of a loop to see what it does</Typography>
                    <Typography variant = "h6"gutterBottom>We were tracing through the loop in the example above</Typography>
                    <Typography variant = "h6"gutterBottom>Loop tracing is essential for reading code and writing your own loops</Typography>
                    <Typography variant = "h6"gutterBottom>However, we generally want to be able to trace through loops much faster than we did in the example above</Typography>
                    <Typography variant = "h6"gutterBottom>Once you get good at this skill, you will be able to tell what a loop does just by looking at the list and the inner block of code</Typography>
                    <Typography variant = "h6"gutterBottom>This is a really important skill to have, so practice it thoroughly!</Typography>
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
                <Typography variant = "h4"gutterBottom>Practice</Typography>
                </Box>
                <Box sx={{
                display: 'grid', 
                gap : 3,
                alignItems: 'center',
                justifyContent: 'center',
                bgcolor: '#e0e0e0',
                color: '#000000',
                padding: 2,
                borderRadius: 2
                }}>
                <CodeSnippet lines = {[{
                    line: 1,
                    code: "array = [1,2,4,8,16,32,64]"
                },{
                    line: 2,
                    code: "for x in range(len(array)):"
                },
                {
                    line: 3,
                    code: "  print(x)"
                },]} content = "center"/>
                    <QuestionCard question = {{
                    question: "How many times does this for loop run?",
                }} 
                answers = {{
                    a1: "6",
                    a2: "7",
                    a3: "32",
                    a4: "64"
                }}
                answer = {2}
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
                

                <Box sx={{
                padding: 4,
                display: 'grid', 
                gap : 3,
                alignItems: 'center',
                justifyContent: 'center',
                bgcolor: '#e0e0e0',
                }}>
                <CodeSnippet lines = {codeBlock1} content = "center"/>
                <QuestionCard question = {{
                    question: "What does the code above print?",
                }} 
                answers = {{
                    a1: <><Box sx = {{
                        bgcolor: "#f0f0f0",
                        padding: 1,
                        borderRadius: 2
                    }}><Typography>
                            ***
                        </Typography>
                        <Typography>
                            ***
                        </Typography>
                        <Typography>
                            ***
                        </Typography>
                        <Typography>
                            ***
                        </Typography>
                        <Typography>
                            ***
                        </Typography>
                        </Box>
                        </>,
                    a2: <><Box sx = {{
                        bgcolor: "#f0f0f0",
                        padding: 1,
                        borderRadius: 2
                    }}>
                        <Typography diplay = "block">
                            * * * * *
                        </Typography>
                        <Typography diplay = "block">
                            * * * * *
                        </Typography>
                        <Typography diplay = "block">
                            * * * * *
                        </Typography>
                        </Box>
                    </>
                    ,
                    a3: <>
                    <Box sx = {{
                        bgcolor: "#f0f0f0",
                        padding: 1,
                        borderRadius: 2
                    }}>
                        <Typography>
                            * * *
                        </Typography>
                        <Typography>
                            * * *
                        </Typography>
                        <Typography>
                            * * *
                        </Typography>
                        <Typography>
                            * * *
                        </Typography>
                        <Typography>
                            * * *
                        </Typography>
                        </Box>
                    </>
                    ,
                    a4: <>
                    <Box sx = {{
                        bgcolor: "#f0f0f0",
                        padding: 1,
                        borderRadius: 2
                    }}>
                    
                    <Typography diplay = "block">
                        *****
                    </Typography>
                    <Typography diplay = "block">
                        *****
                    </Typography>
                    <Typography diplay = "block">
                        *****
                    </Typography>
                    </Box>
                </>
                }}
                answer = {3}
                questionNumber = {1}
                correct = {question1}
                setCorrect = {() => setQuestion1(1)}/>
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

            </div>
        </>
    )
        
};
