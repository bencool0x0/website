import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import CheckIcon from '@mui/icons-material/Check';

export default function QuestionCard(props) {
  const {question = {}, questionNumber , answer, answers, correct, setCorrect} = props;
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState(false);
  const [helperText, setHelperText] = React.useState('Choose wisely');

  const handleRadioChange = (event) => {
    setValue(event.target.value);
    setHelperText(' ');
    setError(false);
  };

  const changeDisplay = () => {
    if (value == answer) {
      setHelperText('You got it!');
      setError(false);
      setCorrect();
    } else {
      setHelperText('Not quite, try again!');
      setError(true);
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    changeDisplay();
    
  };

  return (
    <form onSubmit={handleSubmit}>
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined" sx = {{
        maxWidth: "400px"
      }}>
        <CardContent>
        
        <Typography variant="h5" component="div">
        Question {questionNumber}
        </Typography>
    
        <Typography sx = {{mb:1.5}} >
        {question.question}
        </Typography>

        
            
        <FormControl>
            <RadioGroup name = 'radio-group-quiz' value={value}
          onChange={handleRadioChange}>
            <FormControlLabel value={1} control={<Radio />} label= {answers.a1} />
            <FormControlLabel value={2} control={<Radio />} label= {answers.a2} />
            <FormControlLabel value={3} control={<Radio />} label= {answers.a3} />
            <FormControlLabel value={4} control={<Radio />} label= {answers.a4} />
            </RadioGroup>
            <FormHelperText>{helperText}</FormHelperText>
        </FormControl>
        
        </CardContent>
        <CardActions>
            {correct === 0 ? <Button variant="contained" color="primary" type = 'submit'>Submit</Button> : null}
            {correct ? <CheckIcon/> : null}
        </CardActions>
    </Card>
    </Box>
    </form>
  );
}