import * as React from 'react';
import Box from '@mui/material/Box';
import './CodeSnippet.css';


export default function PageItem(props) {
    const listOfItems = props
    const items = listOfItems.map(item =>
        <li key = {item.line}>
            {item.component}
        </li>
    );

    return (
        <>
        <Box sx={{
            padding: 4,
            display: 'grid',
            gap: 3,
            alignItems: 'center',
            justifyContent: 'center',
            bgcolor: '#e0e0e0',
        }}>
        <ul>
            {items}
        </ul>
        </Box><Box sx={{
            bgcolor: '#',
            color: '#000000',
            padding: '5px',
            height: '20px'
        }}></Box>
        </>
    )
}