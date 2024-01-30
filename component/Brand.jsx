import React from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { brand_arr } from '../utils/brand_data';

let arr2 = [...brand_arr, ...brand_arr];
function Brand() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className='md:py-3 bg-yellow-100'>
            <Box sx={{ maxWidth: { xs: "100%", }, bgcolor: 'rgb(254 249 195 )' }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons="auto"
                    aria-label="scrollable auto tabs example"
                >
                    {arr2.map((img , index) => {
                        let image = (<img src={img} className='w-12 md:w-16' alt="" />)
                        return <Tab label={image} key={index} /> 
                    })}
                </Tabs>
            </Box>
        </div>

    );
}

export { Brand }