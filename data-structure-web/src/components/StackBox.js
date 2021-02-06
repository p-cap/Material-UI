import react, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Box, Paper } from '@material-ui/core';

export default function StackBox() {
    const [num, setNum] = useState(1)

    function arrayBuilder(num) {
        var data = []
        var length = num

        for (var i = 0; i < length; i++) {
            data.push(length)
        }
        return data
    }

    return(
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
                <Typography variant="h1">Stack Simulation</Typography>
                <Typography variant="h1">LIFO</Typography>
            </Grid>
        </Grid>
        <Grid item>
            <Grid 
                container
                spacing={2}
                >
            <Grid item>
                <Button variant="contained" color="secondary" onClick={() => setNum(num + 1)}>Add Box</Button>
            </Grid>
            <Grid item>
                <Button variant="contained" color="secondary" onClick={() => setNum(num - 1)}>Remove Box</Button>
            </Grid>
        </Grid>
        </Grid>
            <Grid item>
                <Grid 
                    container
                    direction="column"
                    >
                    {
                        arrayBuilder(num).map((item, index) => {
                            return (
                                <Paper variant="elevation">
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
            </Grid>
        </Grid>
    )
}