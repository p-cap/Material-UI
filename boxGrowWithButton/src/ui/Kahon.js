import { makeStyles } from '@material-ui/core'
import React from 'react'
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
    Sample: {
        backgroundColor: theme.palette.primary.main,
        ...theme.favFont
    }
}))


export default function Sample(props) {
    const classes = useStyles()
    return (
    <Box p={props.count} className={classes.Sample}>
        <Box p={2} bgcolor="green" m={1} color="orange">
            Box 1
        </Box>
        <Box p={2} bgcolor="green" m={1} color="orange">
            Box 2        
        </Box>
    </Box>    
    )
}

// I used the className and applied to the paper and it worked
// I can use the box to apply color to it's background
// the box adjusts accordingly depending on the input of your text
// with the padding in mind



