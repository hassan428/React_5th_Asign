import React from "react"
import { FaRegHeart } from "react-icons/fa6";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { Rating, Typography } from "@mui/material";



const Card = (props) => {
  const { img, text, rating, disc_price, orig_price, advice } = props.data
  return (<>

    <div className="w-1/2 shadow bg-white shadow-black rounded-lg min-w-40 max-w-40 sm:min-w-52 sm:max-w-52 xl:min-w-64 xl:max-w-64 2xl:min-w-80 2xl:max-w-80  m-2">

      <div className="relative">
        <img src={img} className="rounded-lg m-auto mx-1" alt="" />
        <div className="rounded-full bg-white text-gray-600 absolute top-1 right-1 p-1 text-lg shadow shadow-gray-600 font-black cursor-pointer">
          <FaRegHeart />
        </div>

        <div className="rounded-full bg-white text-gray-600 absolute bottom-1 right-1 p-1 text-lg shadow shadow-gray-600 font-black cursor-pointer">
          <MdOutlineAddShoppingCart />
        </div>

        <div className="flex items-center absolute bottom-1 left-1 cursor-pointer">
          <Typography component="legend">{rating}</Typography>
          <Rating name="read-only" size="small" value={1} max={1} readOnly />
        </div>
      </div>


      <div className="flex-col space-y-1 pl-2 mb-2  ">


        <h1 className="sm:text-sm text-xs xl:text-base min-h-10 max-h-10 overflow-hidden cursor-pointer whitespace-break-spaces">
          {text}
        </h1>


        <h1 className="text-xs xl:text-sm cursor-pointer">
          AED <strong>{disc_price}</strong> <del>{orig_price}</del> <strong className="text-green-600">20%</strong>
        </h1>

        <h1 className="text-xs xl:text-sm flex items-center cursor-pointer">
          <MdOutlineAddShoppingCart />
          {advice}
        </h1>

        <button className="text-xs xl:text-sm rounded-md font-bold px-1 italic bg-yellow-400" type="button">express</button>
      </div>


    </div>
  </>)
}

export { Card }
