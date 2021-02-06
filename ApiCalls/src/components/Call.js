import { Typography } from '@material-ui/core';
import axios from 'axios';
import { useState, useEffect } from 'react';


export default function Call(props) {
    const URL = `https://www.dshield.org/api/ip/${props.ip}?json`

    const [number, setNumber] = useState('')
    const [asabusecontact, setAsAbuseContact] = useState('')
    const [ascountry, setAsCountry] = useState('')

    const callAPI = async() => {
        const response = await axios.get(URL)
        const data = response.data

        setNumber(data.ip.number)
        setAsAbuseContact(data.ip.asabusecontact)
        setAsCountry(data.ip.ascountry)
    }

    useEffect(() => {
        callAPI()
    }, [])

    // If you want to run an effect and clean it up only once (on mount and unmount), 
    // you can pass an empty array ([]) as a second argument. This tells React that your 
    // effect doesn’t depend on any values from props or state, so it never needs to re-run.

    return (
        <div>
         <Typography variant="h3">{number}</Typography> 
         <Typography variant="h3">{asabusecontact}</Typography>
         <Typography variant="h3">{ascountry}</Typography>
        </div>
      )
    }
