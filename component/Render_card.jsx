import React, { useState } from 'react'
import { Box, Tab, Tabs } from '@mui/material'
import { Card } from './Card'
import { Heading_compo } from './Heading_compo'
import { Button_compo } from './Button_compo'


const Render_card = ({ card_data, heading }) => {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <>
            <div className="bg-gray-100 py-2">
                <div className='flex justify-between items-center'>
                    <Heading_compo text={heading} />
                    <Button_compo />
                </div>
                <Box sx={{ maxWidth: { xs: "100%" }, bgcolor: 'rgb(243 244 246)' }}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        variant="scrollable"
                        scrollButtons="auto"
                        aria-label="scrollable auto tabs example"
                    >
                        {card_data.map((obj, ind) => {
                            return <Card key={ind} data={obj} />

                        })}

                    </Tabs>
                </Box>
            </div>

        </>)
}

export { Render_card }
