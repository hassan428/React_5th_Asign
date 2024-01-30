import React from 'react'
import hero_side_img_1 from '../assets/hero_side_img_1.avif'
import hero_side_img_2 from '../assets/hero_side_img_2.avif'
const Hero_side = () => {
    return (
        <div className='flex w-1/4 cursor-pointer'>
            <img src={hero_side_img_1} className=' w-1/2 object-fill' alt="" />
            <img src={hero_side_img_2} className=' w-1/2 object-fill' alt="" />
        </div>
    )
}

export { Hero_side }