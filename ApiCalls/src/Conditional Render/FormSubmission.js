import { Typography } from '@material-ui/core'
import react, { useState } from 'react'

export default function FormSubmission() {

    const [IP, setIP] = useState("")

    function Test() {
        return {ButtonClicked}
    }

    function ButtonClicked(e) {
        setIP(e.target.value)
        console.log(e.target.value)
        return <div><Typography variant="h2">{IP} </Typography></div>
            
    }
    return (
        <div>
            <input type="text" 
                value={IP} 
                onChange={ButtonClicked} 
                />            
                <button onClick={ButtonClicked}>Submit</button>
            <Typography variant="h1">{IP}</Typography>
            <Test />
        </div>
    )
}