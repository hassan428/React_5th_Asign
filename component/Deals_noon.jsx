import React from 'react'
import { mega_deal_data } from '../utils/mega_sell_data'
import { MdOutlineAddShoppingCart } from 'react-icons/md'
import { Heading_compo } from './Heading_compo'

export const Deals_noon = () => {
    return (<>
        <div className='bg-blue-100 py-2'>
            <Heading_compo text="Deals only on noon" />
            <div className='grid sm:grid-cols-4 grid-cols-2 cursor-pointer'>
                {mega_deal_data.map((obj, ind) => {
                    const { discPrice, img, origPrice, tag, text } = obj
                    return <div key={ind} className='bg-white m-2 p-2 relative rounded' >
                        <div className="rounded-tr-full  rounded-bl-full overflow-clip  px-2 text-base max-h-6 min-h-6  bg-blue-950 text-white absolute -top-1 -right-1 ">
                            {tag}
                        </div>

                        <div className='relative mt-3'>

                            <img src={img} className='w-4/6 m-auto ' alt="" />

                            <div className="rounded-full bg-white hover:bg-[#f3e009] absolute bottom-0 right-0 p-1 font-black">
                                <MdOutlineAddShoppingCart />
                            </div>
                        </div>
                        <h1 className=' overflow-hidden min-h-12 max-h-12'>
                            {text}
                        </h1>
                        <h1 className='font-bold lg:text-2xl'>
                            <del className='text-xs lg:text-xl'>{origPrice} </del>
                            {discPrice}
                        </h1>

                    </div>
                })}
            </div>
        </div>
    </>
    )
}
