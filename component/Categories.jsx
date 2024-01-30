import React from 'react'
import { FaAngleDown, FaAngleRight } from 'react-icons/fa'
import one from '../assets/one_img.png'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

const Categories = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    return (<>
        <div className='flex justify-between cursor-pointer items-center w-full px-1 py-1 font-sans font-bold xl:text-sm text-xs'>
            <h6 className='flex text-blue-400 hover:text-blue-800 px-1 w-1/2 sm:w-1/6'>ALL CATEGORIES
                <FaAngleDown className='ml-5' />
            </h6>

            <div className='hidden sm:flex w-3/5 '>
                <Box sx={{ maxWidth: { xs: "100%"}, bgcolor: 'background.paper',}}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        variant="scrollable"
                        scrollButtons="auto"
                        aria-label="scrollable auto tabs example"
                    >
                        <Tab label="ELECTRONICS" sx={{fontWeight: 900, color: "black",}} />
                        <Tab label="MEN" sx={{fontWeight: 900, color: "black"}} />
                        <Tab label="WOMEN" sx={{fontWeight: 900, color: "black"}} />
                        <Tab label="HOME" sx={{fontWeight: 900, color: "black"}} />
                        <Tab label="BEAUTY & FRAGRANCE" sx={{fontWeight: 900, color: "black"}} />
                        <Tab label="BABY" sx={{fontWeight: 900, color: "black"}} />
                        <Tab label="TOYS" sx={{fontWeight: 900, color: "black"}} />
                        <Tab label="SPORTS" sx={{fontWeight: 900, color: "black"}} />
                        <Tab label="HEALTH & NUTRITION" sx={{fontWeight: 900, color: "black"}} />
                        <Tab label="BEST SELL" sx={{fontWeight: 900, color: "black"}} />
                    </Tabs>
                </Box>
            </div>

            <div className='flex justify-between ml-2 px-1 lg:py-3 items-center content-center text-xs w-1/2 sm:w-1/5 bg-yellow-300 border border-orange-600 rounded'>
                <h6 className='hover:text-gray-500'>noon</h6>
                <img src={one} className='w-5 mx-2' alt="" />
                <h6 className='text-green-500 hover:text-red-500'>Free Delivery</h6>
                <FaAngleRight  />
            </div>
        </div>

    </>);
}

export { Categories }
