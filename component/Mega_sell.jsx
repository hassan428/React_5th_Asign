import React from 'react'
import { MdOutlineAddShoppingCart } from 'react-icons/md'
import { mega_deal_data } from '../utils/mega_sell_data'



function Mega_sell() {

    return (
        <>
            <div className='sm:w-1/3 my-2 py-1 px-2 bg-yellow-200 '>
                <div className="flex justify-between items-center m-auto">
                    <h1 className='font-bold text-2xl text-gray-600 cursor-pointer'>Mega Deal</h1>
                    <button className='bg-gray-700 text-white py-1 px-5 rounded'>ALL...</button>
                </div>


                <div className='grid grid-cols-2 cursor-pointer'>
                    {mega_deal_data.map((obj, ind) => {
                        const { discPrice, img, origPrice, tag, text } = obj
                        return <div key={ind} className='bg-white m-auto my-2 p-2  max-w-32 xl:max-w-40 2xl:max-w-48 relative rounded' >
                            <div className="rounded-tr-full  rounded-bl-full  overflow-clip text-[11px] max-h-5 min-h-5  bg-[#f3e009] text-red-600 px-2 absolute -top-1 -right-1 ">
                                {tag}
                            </div>

                            <div className='relative mt-2'>

                                <img src={img} className='w-3/6 m-auto ' alt="" />

                                <div className="rounded-full bg-white hover:bg-[#f3e009] absolute bottom-0 right-0 p-1 font-black">
                                    <MdOutlineAddShoppingCart />
                                </div>
                            </div>
                            <h1 className='text-xs overflow-hidden min-h-8 max-h-8'>
                                {text}
                            </h1>
                            <h1 className='font-bold text-xs lg:text-base'>
                                <del className='text-[10px] lg:text-xs'>{origPrice} </del>
                                {discPrice}
                            </h1>

                        </div>
                    })}





                </div>
            </div>
        </>
    )
}

export { Mega_sell }