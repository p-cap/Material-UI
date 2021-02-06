import React, { useState } from 'react'
import { Button } from '@material-ui/core'
import Kahon from './Kahon'
import { Grid, Typography } from '@material-ui/core'
import CountUpdate from './CountUpdate'

export default function Pindot(props) {
    const [count, setCount] = useState(0);

    return(
        <Grid 
            container
            direction="column"
            justify="center"
            alignItems="center"
            spacing={2}
            >
            <Grid item>
                <Kahon count={count} />
            </Grid>
            <Grid item>
                <Button 
                    variant='outlined'
                    color="primary"
                    onClick={
                        () => setCount(count + 1)
                    }
                    > Pindot 
                </Button>
            </Grid>
            <Grid item>
                <CountUpdate count={count}/>
            </Grid>
        </Grid>
    )
}


//            onClick={() => { alert('Napindot!') }}
//             <p> Pindot mo ay {count} </p>
