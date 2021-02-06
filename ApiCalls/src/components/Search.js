import react from 'react'
import TextField from '@material-ui/core/TextField';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { useState } from 'react'
import { Grid, Typography } from '@material-ui/core';
import Call from './Call';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
    root: {
        // if I need to override the component name, you can use the the syntax below
        '& .MuiTextField-root': {
            margin: theme.spacing(6),
            width: '25ch',
        },
        '& > *': {
            margin: theme.spacing(1),
          },
    }
}))

const URL = 'https://www.dshield.org/api/ip/70.91.145.10?json'

export default function Search() {
    const classes = useStyles()
    const [ip, setIP] = useState(null)
    
    function ShowCall(props) {
        const ip = props.ip
        if (ip == "70.91.145.10") {
            return <div><Call ip={ip}/></div>
        } else {
            return <h2>Please enter IP</h2>
        }
    }

    return (
    <Grid>
        <TextField 
                label="Search IP" 
                type="search" 
                variant="filled" 
                onChange={ e => setIP(e.target.value) } 
                />
        <Typography variant='h3'>{ip}</Typography>
        <ShowCall ip={ip} />
    </Grid>
    )
}


