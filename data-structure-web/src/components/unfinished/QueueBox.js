import react, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Box, Paper } from '@material-ui/core';

export default function QueueBox() {

    const [num, setNum] = useState(1)
    const [remove, setRemove] = useState(false)

    function arrayBuilder(num) {
        var data = []
        var length = num
        
        for (var i = 0; i < length; i++) {
            data.push(i)
        }

        return data
    }

    
    function removeItem(array) {
        return array.shift()
    }

    return (
        <Grid
            container
            direction="column"
            spacing={10}
            alignItems="center"
        >
        <Grid item>
            <Grid 
                container
                direction="column"
                justify="center"
                alignItems="center"
                >
                <Typography variant="h1">Queue Simulation</Typography>
                <Typography variant="h1">FIFO</Typography>
            </Grid>
        </Grid>
        <Grid item>
            <Grid 
                container
                spacing={2}
                >
            <Grid item>
                <Button variant="contained" color="primary" onClick={() => setNum(num + 1)}>Add Box</Button>
            </Grid>
            <Grid item>
                <Button variant="contained" color="primary" onClick={() => setRemove(true)}>Remove Box</Button>
            </Grid>
            <Grid item>
                <Button variant="contained" color="secondary" onClick={() => setNum(0)}>Clear</Button>
            </Grid>
        </Grid>
    </Grid>
        { remove ? arrayBuilder(num).delete(removeItem(arrayBuilder(num))) : null }
        {   
            arrayBuilder(num).map((item, index) => {
                return (
                    <Paper variant="elevation">
                        {console.log(item + " " + index)}
                        <Box p={1}>
                            <Grid key={index}>
                                <Typography variant="h1">Box {index}</Typography>
                            </Grid>
                        </Box>
                    </Paper>
                )
            })
        }
    </Grid>
    )
}
