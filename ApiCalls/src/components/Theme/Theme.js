import { createMuiTheme } from '@material-ui/core'
import react from 'react'

const theme = createMuiTheme({
    overrides : {
        MuiTextField : {
            root: {
                margin: '20ch',
                width: '25ch',
                // ch is character width
            }

        }
    }
})

export default theme;