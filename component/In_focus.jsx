import React from 'react'
import fragrance_img from '../assets/fragrance_img.avif'
import starzplay_img from '../assets/starzplay_img.avif'

function In_focus() {
    return (
        <>
            <div className='sm:w-1/3 my-2'>
                <h1 className='font-bold text-2xl text-gray-600 cursor-pointer'>In focus</h1>
                <div>
                    <img src={fragrance_img} className='cursor-pointer my-2' alt="" />
                    <img src={starzplay_img} className='cursor-pointer' alt="" />
                </div>
            </div>
        </>)
}

export { In_focus }