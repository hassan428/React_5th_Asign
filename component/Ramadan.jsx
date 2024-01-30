import React from 'react'
import { Heading_compo } from './Heading_compo'
import { Button_compo } from './Button_compo'
import { ramadan_arr } from '../utils/Ramadan_data'

export const Ramadan = () => {
    return (<>

        <div className='sm:py-5 py-2 bg-yellow-100'>
            <div className='flex justify-between items-center'>
                <Heading_compo text="Get ready for ramadan" />
                <Button_compo />
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7'>
                {ramadan_arr.map((img, ind) => {
                    return <img src={img} key={ind} className='m-auto w-28 cursor-pointer' />
                })}
            </div>
        </div>
    </>
    )
}
