import {React, useState} from "react";
import Box from '@mui/material/Box';
import { createTheme } from '@mui/material/styles';
import { Typography } from "@mui/material";
import QuestionCard from '../../QuestionCard';
import LinearProgress from '@mui/material/LinearProgress';
import CodeSnippet from "../../CodeSnippet";
import ".//courses.css";


export default function IfStatements(params) {
    const [question1, setQuestion1] = useState(0);
    const [question2, setQuestion2] = useState(0);
    const [question3, setQuestion3] = useState(0);

    return (
        <>
            <div> 
                <Typography variant = "h2">If Statements</Typography>
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
                    <Typography variant = "h4" gutterBottom>What are If Statements?</Typography>
                    <Typography variant = "h6" gutterBottom>If statements are conditional statements that only run if a certain condition is True</Typography>
                    <CodeSnippet lines = {[{
                        line: 1,
                        code: "if (x < y):"
                    },{
                        line: 2,
                        code: "    print('x is less than y')"
                    }
                    ,]} content = "center"/>
                    <Typography variant = "h6"gutterBottom>We use if statements to separate different responses in different cases</Typography>
                    <Typography variant = "h6" gutterBottom>We can connect if statements together to check multiple cases</Typography>
                    <CodeSnippet lines = {[{
                        line: 1,
                        code: "if (x < y):"
                    },{
                        line: 2,
                        code: "    print('x is less than y')"
                    },{
                        line: 3,
                        code: "elif (x == y):"
                    },{
                        line: 4,
                        code: "    print('x is equal to y')"
                    },{
                        line: 5,
                        code: "else:"
                    },{
                        line: 6,
                        code: "    print('x is greater than y')"
                    },]} content = "center"/>
                    <Typography variant = "h6" gutterBottom>If you aren't proficient with Booleans, then please review that first</Typography>
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
                    <Typography variant = "h4" gutterBottom>If Statement Syntax</Typography>
                    <Typography variant = "h6"><b>if</b> + (Boolean Expression) + <b>:</b></Typography>
                    <ul><li><Typography variant = "h6"gutterBottom>code you want to run only if the (Boolean Expression) is True goes here</Typography></li></ul>
                    <Typography variant = "h6">Only code that is indented will be included in the if statement</Typography>
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
                    <Typography variant = "h4" gutterBottom>How If Statements Work</Typography>
                    <Typography variant = "h6" >There are two cases when an if statement runs</Typography>
                    <Typography variant = "h6" >When the boolean expression is True</Typography>
                    <CodeSnippet lines = {[{
                        line: 1,
                        code: "if (0 < 3):"
                    },{
                        line: 2,
                        code: "    print('0 is less than 3')"
                    }]} content = "center"/>
                    <Typography variant = "h6" gutterBottom>Or when the boolean expression is False</Typography>
                    <CodeSnippet lines = {[{
                        line: 1,
                        code: "if (6 < 3):"
                    },{
                        line: 2,
                        code: "    print('6 is less than 3')"
                    }]} content = "center"/>
                    <Typography variant = "h6" >If the boolean statement is True, then the indented block of code will run</Typography>
                        <CodeSnippet lines = {[{
                        line: 1,
                        code: "if (0 < 3):"
                    },{
                        line: 2,
                        code: "    print('0 is less than 3')"
                    }]} content = "center"/>
                    <CodeSnippet lines = {[{
                        line: 1,
                        code: "0 is less than 3"
                    },]} content = "left"/>    
                    <Typography variant = "h6" >If the boolean statement is False, then the indented block of code will not run</Typography>
                        <CodeSnippet lines = {[{
                        line: 1,
                        code: "if (6 < 3):"
                    },{
                        line: 2,
                        code: "    print('6 is less than 3')"
                    }]} content = "center"/>
                    <CodeSnippet lines = {[{
                        line: 1,
                        code: ""
                    },]} content = "left"/>   
                    <Typography variant = "h6">You can think of the if statement logic in terms of normal language</Typography>  
                    <Typography variant = "h6">If it is raining, then I will bring an umbrella</Typography>      
                    <Typography variant = "h6">Raining is the boolean expression, and bringing an umbrella is the code inside the if statement</Typography>         
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
                    <Typography variant = "h4" gutterBottom>Elif Statements</Typography>
                    <Typography variant = "h6" gutterBottom>Elif is short for else if</Typography>
                    <Typography variant = "h6" >Elif statements go after if statements</Typography>
                    <Typography variant = "h6"gutterBottom>You can't have an elif statement without an if statement</Typography>
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
                    <Typography variant = "h4" gutterBottom>Elif Statement Syntax</Typography>
                    <Typography variant = "h6">Elif statements are built exactly life if statements, but with elif instead of if</Typography>
                    <CodeSnippet lines = {[{
                        line: 3,
                        code: "elif (x == y):"
                    },{
                        line: 4,
                        code: "    print('x is equal to y')"
                    },]} content = "center"/>
                    <Typography variant = "h6"><b>elif</b> + (Boolean Expression) + <b>:</b></Typography>
                    <ul><li><Typography variant = "h6" gutterBottom>code you want to run only if the (Boolean Expression) is True goes here</Typography></li></ul>
                    <Typography variant = "h6">Elif statements have be on the same indentation as the if statement they are with</Typography>
                    <Typography variant = "h6">But their content has to be indented like in an if statement</Typography>
                    <CodeSnippet lines = {[{
                        line: 1,
                        code: "if (x < y):"
                    },{
                        line: 2,
                        code: "    print('x is less than y')"
                    },{
                        line: 3,
                        code: "elif (x == y):"
                    },{
                        line: 4,
                        code: "    print('x is equal to y')"
                    },]} content = "center"/>
                    <Typography variant = "h6" ></Typography>
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
                        <Typography variant = "h4" gutterBottom>How Elif Statements Work</Typography>
                        <Typography variant = "h6" >First, the elif statement is only reached if the if statement above it is False</Typography>
                        <Typography variant = "h6" >In this case, the elif statement is not reached because the if statement above it is True</Typography>
                        <CodeSnippet lines = {[{
                        line: 1,
                        code: "if (0 < 3):"
                    },{
                        line: 2,
                        code: "    print('0 is less than 3')"
                    },{
                        line: 3,
                        code: "elif (0 == 3):"
                    },{
                        line: 4,
                        code: "    print('0 is equal to 3')"
                    },]} content = "center"/>
                        <Typography variant = "h6"gutterBottom>Thus, the code inside the elif statement will not run</Typography>
                        <CodeSnippet lines = {[{
                        line: 4,
                        code: "0 is less than 3"
                    },]} content = "left"/>
                        <Typography variant = "h6">Once is the elif statement is reached (the if statement above is False)</Typography>
                        <Typography variant = "h6">You can treat it like just another if statement</Typography>
                        <Typography variant = "h6"gutterBottom>If the boolean expression is True, then the code will run, like in an if statement</Typography>
                        <CodeSnippet lines = {[{
                        line: 1,
                        code: "if (3 < 3):"
                    },{
                        line: 2,
                        code: "    print('3 is less than 3')"
                    },{
                        line: 3,
                        code: "elif (3 == 3):"
                    },{
                        line: 4,
                        code: "    print('3 is equal to 3')"
                    },]} content = "center"/>
                    <CodeSnippet lines = {[{
                        line: 4,
                        code: "3 is equal to 3"
                    },]} content = "left"/>
                    <Typography variant = "h6">If the boolean expression in the elif statement is False</Typography>
                        <Typography variant = "h6"gutterBottom>The code will not run, just like in an if statement</Typography>
                        <CodeSnippet lines = {[{
                        line: 1,
                        code: "if (6 < 3):"
                    },{
                        line: 2,
                        code: "    print('6 is less than 3')"
                    },{
                        line: 3,
                        code: "elif (6 == 3):"
                    },{
                        line: 4,
                        code: "    print('6 is equal to 3')"
                    },]} content = "center"/>
                    <CodeSnippet lines = {[{
                        line: 4,
                        code: ""
                    },]} content = "left"/>
                        <Typography variant = "h6">You can think of the if and elif statement logic in terms of normal language</Typography>
                        <Typography variant = "h6">If it is raining, I will bring an umbrella</Typography>
                        <Typography variant = "h6">Else if it is snowing, I will wear a winter coat</Typography> 
                        <Typography variant = "h6">In this case, snowing is the boolean of the elif, and wearing a winter coat is the code inside it</Typography> 
                        <Typography variant = "h6">If you think in terms of langauge, first you check if it is raining</Typography> 
                        <Typography variant = "h6">And only if it is not raining do you check if it's snowing</Typography> 
                        <Typography variant = "h6">If it's not raining but is snowing, I will wear a coat, and I won't otherwise</Typography> 
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
                        <Typography variant = "h4" gutterBottom>Mutliple Elif Statements</Typography>
                        <Typography variant = "h6">You can have multiple elif statements per one if statement</Typography>
                        <CodeSnippet lines = {[{
                        line: 1,
                        code: "if (6 < 3):"
                    },{
                        line: 2,
                        code: "    print('6 is less than 3')"
                    },{
                        line: 3,
                        code: "elif (6 == 3):"
                    },{
                        line: 4,
                        code: "    print('6 is equal to 3')"
                    },{
                        line: 5,
                        code: "elif (6 > 3):"
                    },{
                        line: 6,
                        code: "    print('6 is greater than 3')"
                    },]} content = "center"/>

                        <Typography variant = "h6" gutterBottom>There are two elif statements in this case</Typography>
                        <Typography variant = "h6">However, only one if or elif statement will run at most</Typography>
                        <Typography variant = "h6">Once one boolean expression is True in an if or elif statement, the code inside that statement will run, and the rest are skipped</Typography>
                        <Typography variant = "h6"gutterBottom>Out of a chain of conditional (if and elif) statements, only the first statement with a True condition will actually run</Typography>
                        <Typography variant = "h6">Examples:</Typography>
                        <CodeSnippet lines = {[{
                        line: 1,
                        code: "if (6 < 3):"
                    },{
                        line: 2,
                        code: "    print('6 is less than 3')"
                    },{
                        line: 3,
                        code: "elif (6 == 3):"
                    },{
                        line: 4,
                        code: "    print('6 is equal to 3')"
                    },{
                        line: 5,
                        code: "elif (6 > 3):"
                    },{
                        line: 6,
                        code: "    print('6 is greater than 3')"
                    },]} content = "center"/>
                    <CodeSnippet lines = {[{
                        line: 1,
                        code: "6 is greater than 3"
                    },]} content = "center"/>
                    <Typography variant = "h6" gutterBottom>In this case, because the last elif statement is the first one to have a True condition, the code inside of it is run</Typography>
                    <CodeSnippet lines = {[{
                        line: 1,
                        code: "if (3 < 3):"
                    },{
                        line: 2,
                        code: "    print('3 is less than 3')"
                    },{
                        line: 3,
                        code: "elif (3 == 3):"
                    },{
                        line: 4,
                        code: "    print('3 is equal to 3')"
                    },{
                        line: 5,
                        code: "elif (4 > 3):"
                    },{
                        line: 6,
                        code: "    print('4 is greater than 3')"
                    },]} content = "center"/>
                    <CodeSnippet lines = {[{
                        line: 1,
                        code: "3 is equal to 3"
                    },]} content = "center"/>
                    <Typography variant = "h6">Even though the last elif is True, only the first conditional statement with a True condition is run, which is the one with 3==3</Typography>
                    <CodeSnippet lines = {[{
                        line: 1,
                        code: "if (2 < 3):"
                    },{
                        line: 2,
                        code: "    print('2 is less than 3')"
                    },{
                        line: 3,
                        code: "elif (3 == 3):"
                    },{
                        line: 4,
                        code: "    print('3 is equal to 3')"
                    },{
                        line: 5,
                        code: "elif (4 > 3):"
                    },{
                        line: 6,
                        code: "    print('4 is greater than 3')"
                    },]} content = "center"/>
                    <CodeSnippet lines = {[{
                        line: 1,
                        code: "2 is less than 3"
                    },]} content = "center"/>
                    <Typography variant = "h6">Conditional statements also include if statements</Typography>
                    <Typography variant = "h6">Because the if statement is True, the rest won't run</Typography>

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
                    <Typography variant = "h4" gutterBottom>Why not use multiple if statements instead of elifs?</Typography>
                    <Typography variant = "h6" >Elif statements only run if the statements before it are True</Typography>
                    <Typography variant = "h6" >This feature can simplify logic sometimes</Typography>
                    <Typography variant = "h6"gutterBottom>For example, take this grade calculator:</Typography>
                    <CodeSnippet lines = {[{
                        line: 1,
                        code: "if (grade >= 90):"
                    },{
                        line: 2,
                        code: "    print('A')"
                    },{
                        line: 3,
                        code: "elif (grade >= 80):"
                    },{
                        line: 4,
                        code: "    print('B')"
                    },{
                        line: 5,
                        code: "elif (grade >= 70):"
                    },{
                        line: 6,
                        code: "    print('C')"
                    },]} content = "center"/>
                    <Typography variant = "h6">This grade calculator only needs to check for lower boundary of the grade because all the upper boundaries are covered by the conditionals preceeding the conditional</Typography>
                    <Typography variant = "h6"gutterBottom>If my grade was an 85, then once it gets to the second conditional (elif (grade {">"}= 80)) 
                    it has to be less than 90 already because the first if statement would've already ran and skipped the rest if my grade was greater than or equal to 90</Typography>
                    <Typography variant = "h6"gutterBottom>However, if I was only using if statements:</Typography>
                    <CodeSnippet lines = {[{
                        line: 1,
                        code: "if (grade >= 90):"
                    },{
                        line: 2,
                        code: "    print('A')"
                    },{
                        line: 3,
                        code: "if (grade >= 80 and grade < 90):"
                    },{
                        line: 4,
                        code: "    print('B')"
                    },{
                        line: 5,
                        code: "if (grade >= 70 and grade < 80):"
                    },{
                        line: 6,
                        code: "    print('C')"
                    },]} content = "center"/>
                    <Typography variant = "h6"gutterBottom>I have to check for the upper bound of the grade because each if statement is independent of each other</Typography>
                    <Typography variant = "h6"gutterBottom>If my grade was 85 again, then once I get to the second if statement, then I can't assume that my grade is less than 90 because the second if statement isn't dependent on the first being False</Typography>
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
                    <Typography variant = "h4" gutterBottom>Else Statements</Typography>
                    <Typography variant = "h6" gutterBottom>Else statements go at the very end of a chain of if and elif statements</Typography>
                    <Typography variant = "h6" >Else statements run if and only if every conditional before it is False</Typography>
                    <Typography variant = "h6" >That means else statements only run if everything before it is False</Typography>
                    <Typography variant = "h6" gutterBottom>And always run if everything before it is False</Typography>
                    <Typography variant = "h6">You don't have to have elifs to have an else</Typography>
                    <CodeSnippet lines = {[{
                        line: 1,
                        code: "if (0 > 3):"
                    },{
                        line: 2,
                        code: "    print('0 is greater than or equal to 3')"
                    },{
                        line: 3,
                        code: "else:"
                    },{
                        line: 4,
                        code: "    print('0 is not greater than or equal to 3')"
                    },]} content = "center"/>
                    <Typography variant = "h6"gutterBottom>You can't have an elif statement without an if statement</Typography>
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
                    <Typography variant = "h4" gutterBottom>Else Statement Syntax</Typography>
                    <Typography variant = "h6">Else statements don't have a boolean expression</Typography>
                    <CodeSnippet lines = {[{
                        line: 1,
                        code: "else :"
                    },{
                        line: 2,
                        code: "    print('0 is greater than or equal to 3')"
                    },]} content = "center"/>
                    <Typography variant = "h6" ><b>else:</b></Typography>
                    <ul><li><Typography variant = "h6" gutterBottom>code you want to run if every condition in the group above it is False</Typography></li></ul>
                    <Typography variant = "h6" gutterBottom>Of course, the indentation still applies to the code inside the else statement</Typography>
                    <Typography variant = "h6">Also, remember that you need to have an if statement before having an else statement</Typography>
                    <CodeSnippet lines = {[{
                        line: 1,
                        code: "if (0 > 3):"
                    },{
                        line: 2,
                        code: "    print('0 is greater than or equal to 3')"
                    },{
                        line: 3,
                        code: "else:"
                    },{
                        line: 4,
                        code: "    print('0 is not greater than or equal to 3')"
                    },]} content = "center"/>
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
                    <Typography variant = "h4" gutterBottom>How else statements work</Typography>
                    <Typography variant = "h6">Else statements only run if all the conditionals before it are False</Typography>
                    <Typography variant = "h6">This only applies to the conditional group (if and elifs) that it is in</Typography>
                    <Typography variant = "h6">If a conditional before it is True, then the else state is skipped, like the rest of the elifs</Typography>
                    <CodeSnippet lines = {[{
                        line: 1,
                        code: "if (0 < 3):"
                    },{
                        line: 2,
                        code: "    print('0 is less than 3')"
                    },{
                        line: 3,
                        code: "elif (0 == 3):"
                    },{
                        line: 4,
                        code: "    print('3 is equal to 3')"
                    },{
                        line: 5,
                        code: "else:"
                    },{
                        line: 6,
                        code: "    print('0 is greater than 3')"
                    },]} content = "center"/>
                    <CodeSnippet lines = {[{
                        line: 1,
                        code: "0 is less than 3"
                    },]} content = "center"/>
                    <Typography variant = "h6" >In this case, our else statement represents when the number is greater than 3 because when the computer reaches the else statement, the number cannot be less than or equal to 3,
                    so <b>it has to be</b> greater than 3</Typography>
                    <Typography variant = "h6" gutterBottom>The else statement is not run because a conditional before it is True; the else statement is skipped</Typography>
                    <Typography variant = "h6">When the else statement is reached, it will automatically run</Typography>
                    <Typography variant = "h6">That's why there is no Boolean condition in the else statement syntax</Typography>
                    <CodeSnippet lines = {[{
                        line: 1,
                        code: "if (0 < 3):"
                    },{
                        line: 2,
                        code: "    print('6 is less than 3')"
                    },{
                        line: 3,
                        code: "elif (6 == 3):"
                    },{
                        line: 4,
                        code: "    print('3 is equal to 3')"
                    },{
                        line: 5,
                        code: "else:"
                    },{
                        line: 6,
                        code: "    print('6 is greater than 3')"
                    },]} content = "center"/>
                    <CodeSnippet lines = {[{
                        line: 1,
                        code: "6 is greater than 3"
                    },]} content = "center"/>
                    <Typography variant = "h6">Else statement logic in terms of normal language</Typography>
                        <Typography variant = "h6">If it is raining, I will bring an umbrella</Typography>
                        <Typography variant = "h6">Else if it is snowing, I will wear a winter coat</Typography> 
                        <Typography variant = "h6">Else I will wear a T-shirt</Typography> 
                        <Typography variant = "h6">In this case, wearing a t-shirt is the action inside the else statement</Typography> 
                        <Typography variant = "h6">If you think in terms of langauge, first you check if it is raining, then if it is snowing</Typography> 
                        <Typography variant = "h6" gutterBottom>If it's not snowing or raining, there's nothing else to check, so you'll wear a T-shirt</Typography> 
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
                    code: "day = 3"
                },{
                    line: 2,
                    code: "snowing = True"
                },
                {
                    line: 3,
                    code: "if (day <= 5 and snowing = False):"
                },
                {
                    line: 4,
                    code: "  print(school day, end = ' ')"
                },
                {
                    line: 5,
                    code: "elif (day <= 5 and snowing = True):"
                },
                {
                    line: 6,
                    code: "  print(snow day, end = ' ')"
                },
                {
                    line: 7,
                    code: "elif (day > 5 and snowing = False):"
                },
                {
                    line: 8,
                    code: "  print(go to the park, end = ' ')"
                },
                {
                    line: 9,
                    code: "else:"
                },
                {
                    line: 10,
                    code: "  print(go sledding, end = ' ')"
                }]} content = "center"/>
                    <QuestionCard question = {{
                    question: "What is printed?",
                }} 
                answers = {{
                    a1: "school day",
                    a2: "snow day",
                    a3: "snow day go to the park",
                    a4: "go sledding"
                }}
                answer = {2}
                questionNumber = {1}
                correct = {question1}
                setCorrect = {() => setQuestion1(1)}
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
                <CodeSnippet lines = {[{
                    line: 1,
                    code: "temperature = 20"
                },
                {
                    line: 2,
                    code: "humidity = 'low'"
                },
                {
                    line: 3,
                    code: "if (temperature > 32):"
                },
                {
                    line: 4,
                    code: "  if (humidity == 'high'):"
                },
                {
                    line: 5,
                    code: "     print('raining')"
                },
                {
                    line: 6,
                    code: "  else:"
                },
                {
                    line: 7,
                    code: "     print('no precipitation')"
                },
                {
                    line: 8,
                    code: "else:"
                },
                {
                    line: 9,
                    code: "  if (humidity == 'high'):"
                },
                {
                    line: 10,
                    code: "     print('snowing')"
                },
                {
                    line: 11,
                    code: "  else:"
                },
                {
                    line: 12,
                    code: "     print('cold')"
                }]} content = "center"/>
                <QuestionCard question = {{
                    question: "What does the code above print?",
                }} 
                answers = {{
                    a1: "raining",
                    a2: "no precipitation",
                    a3: "snowing",
                    a4: "cold"
                }}
                answer = {4}
                questionNumber = {2}
                correct = {question2}
                setCorrect = {() => setQuestion2(1)}/>
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
                <CodeSnippet lines = {[{
                    line: 1,
                    code: "<A> (fruitColor == 'orange'):"
                },
                {
                    line: 2,
                    code: "  print('the fruit is an orange')"
                },
                {
                    line: 3,
                    code: "<B> (fruitColor == 'yellow'):"
                },
                {
                    line: 4,
                    code: "  <C> (fruitShape == 'curved'):"
                },
                {
                    line: 5,
                    code: "     print('it is a banana')"
                },
                {
                    line: 6,
                    code: "  <D> :"
                },
                {
                    line: 7,
                    code: "     print('it is a pineapple')"
                },
                {
                    line: 8,
                    code: "<E>"
                },
                {
                    line: 9,
                    code: "  print('the fruit is not yellow nor orange)"
                }]} content = "center"/>
                <QuestionCard question = {{
                    question: "What does goes in the space of A, B, C, D, and E?",
                }} 
                answers = {{
                    a1: "if, elif, if, else, else",
                    a2: "if, if, if, else, else",
                    a3: "if, elif, elif, if, else",
                    a4: "if, if , else, if, else"
                }}
                answer = {1}
                questionNumber = {3}
                correct = {question3}
                setCorrect = {() => setQuestion3(1)}/>
                </Box>
                

                <Box sx={{
                bgcolor: '#',
                color: '#000000',
                padding: '5px',
                height: '20px'
                }}></Box>

                <LinearProgress color = "success" variant = 'determinate' value = {(((question1 + question2 + question3) /3) * 100)}/>
                { (((question1 + question2 + question3) /2) * 100) === 100 ? 
                <Typography variant = "h5">Finished!</Typography> :  <Typography variant = "h5">Not done yet</Typography>}

                
            </div>
        </>
    )
        
};
