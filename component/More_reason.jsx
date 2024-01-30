import React from 'react'
import top_rated_img from '../assets/top_rated_img.avif'
import bestseller_img from '../assets/bestseller_img.avif'
import new_arrivals_img from '../assets/new_arrivals_img.avif'
import mahali_img from '../assets/mahali_img.avif'

function More_reason() {
  return (
    <>
      <div className='sm:w-1/3 my-2'>
        <h1 className='font-bold text-2xl text-gray-600 cursor-pointer'>More reasons to shop</h1>
        <div className='grid grid-cols-2 cursor-pointer'>
          <img src={top_rated_img} className='my-1' alt="" />
          <img src={bestseller_img} className='my-1 ' alt="" />
          <img src={new_arrivals_img} className='my-1' alt="" />
          <img src={mahali_img} className='my-1' alt="" />
        </div>
      </div>
    </>
  )
}

export { More_reason }