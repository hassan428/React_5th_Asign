import React from 'react'
import { Button } from '@mui/material'
import { TbMessageCircle2 } from "react-icons/tb";

export const Help_compo = () => {
  return (
    <div className='fixed my-2 sm:m-3 bottom-0 sm:right-0 sm:transform-none right-1/2 transform translate-x-1/2 z-10'>
      <Button
        variant='contained'
        sx={{
          borderRadius: 100,
          bgcolor: "rgb(55 65 81)",
          textTransform: 'capitalize',
          fontWeight: "bold",
          border: "5px solid white",
          borderStyle: 'double',
          '@media (min-width: 640px)': {
            fontSize: "medium",
          },
          ":hover": {
            bgcolor: "#f3e009",
            color: "black",
            border: "5px solid black",
            borderStyle: 'double',
          }
        }}
        startIcon={<TbMessageCircle2 size={"24px"} />}>
        Help
      </Button>
    </div >
  )
}
