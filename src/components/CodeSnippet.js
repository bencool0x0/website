import React, {useState } from "react";
import Box from '@mui/material/Box';
import './CodeSnippet.css';


export default function CodeSnippet(props) {
    const {lines, content} = props

    const linesItems = lines.map(line =>
        <li key = {line.name}>
            <p>
                {line.code}
            </p>
        </li>
    );


    return (
                <Box
                    sx={{
                        display: "flex",
                        alignItems:"center",
                        justifyContent:"center",
                    }}>
                    <Box sx={{
                    padding: '5px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: content,
                    bgcolor: '#f0f0f0',
                    boxShadow: 1,
                    borderRadius: 2,
                    p: 1,
                    minWidth: 250,
                    paddingRight: 6
                    }}>
                    <pre>
                        <code>
                            <ul>
                                {linesItems}
                            </ul>
                        </code>
                    </pre>
                    </Box>
                </Box>
    );
}

                