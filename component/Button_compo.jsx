import { Button } from '@mui/material'
import React from 'react'



export const Button_compo = () => {
    return (
        <Button variant='outlined' color='inherit' sx={{ mx: 2, p: 1, fontWeight: "bold", '@media (max-width: 500px)': { fontSize: "12px", p: 1, width: "40%" } }} >
            VIEW ALL
        </Button>
    )
}
