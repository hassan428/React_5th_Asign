import React from 'react'
import Noon_logo from './Noon_logo'
import { CiHeart } from 'react-icons/ci'
import { Input_field } from './Input_field'
import { LiaSearchSolid } from 'react-icons/lia'
import { MdOutlineSupervisorAccount } from "react-icons/md";
import { MdOutlineShoppingCart } from "react-icons/md";
import dubai_flag from '../assets/dubai_flag.svg'
import { FaAngleDown } from "react-icons/fa";

const Navbar = () => {
    return (<>

        <nav className='md:hidden bg-[#f3e009] px-2 sm:px-5'>
            <div className='flex items-center justify-center py-2 space-x-5 '>
                <div>
                    <Noon_logo class="w-20" />
                </div>
                <div className='w-full flex items-center '>
                    <Input_field type="text" placeholder="What are you looking for?"
                        class="w-full sm:py-1 px-2 rounded-2xl rounded-r-none border-2 border-r-0 border-gray-300" />
                    <button className='py-1 sm:py-2 px-2 rounded-2xl rounded-l-none border-2 border-l-0 border-gray-300 bg-white'><LiaSearchSolid /></button>
                </div>
                <MdOutlineSupervisorAccount className='text-3xl hover:text-gray-500 ' />

            </div>

            <div className='flex items-center text-xs sm:text-sm justify-between space-x-5 '>

                <div className='flex space-x-1 sm:space-x-3  cursor-pointer hover:text-gray-500'>
                    <img src={dubai_flag} alt="" />
                    <p>Deliever to <strong>Dubai</strong></p>
                    <FaAngleDown />
                </div>

                <div className='flex items-center space-x-1 sm:space-x-3'>
                    <div className='cursor-pointer'>العربية </div>
                    <div className='hover:text-gray-500 flex items-center cursor-pointer border-l border-gray-400  pl-1'>Whishlist
                        <CiHeart className='ml-1' /></div>
                    <div className='hover:text-gray-500 flex items-center border-l cursor-pointer border-gray-400  pl-1'>Cart
                        <MdOutlineShoppingCart className='ml-1 ' /></div>
                </div>
            </div>
        </nav>

        {/* ================== Width 768++ ================== */}

        <nav className='hidden md:flex items-center justify-between py-3 xl:py-5 px-5 space-x-5 bg-[#f3e009]'>
            <div>
                <Noon_logo class="w-20 xl:w-24 2xl:w-28 " />
            </div>

            <div className='flex space-x-3 text-sm cursor-pointer hover:text-gray-500'>
                <img src={dubai_flag} alt="" />
                <p>Deliever to <br /><strong>Dubai</strong></p>
                <FaAngleDown />
            </div>

            <div className='md:w-1/5 lg:w-1/3 xl:w-1/2 2xl:w-7/12 flex items-center mx-2 '>
                <Input_field type="text" placeholder="What are you looking for?" class="w-full py-1 px-2" />
            </div>

            <div className='flex items-center text-sm space-x-3'>
                <div className='cursor-pointer'>العربية </div>
                <div className='hover:text-gray-500 flex items-center cursor-pointer border-l border-gray-400  pl-1 lg:pl-4'>Log In
                    <MdOutlineSupervisorAccount className='ml-1 lg:ml-2 text-lg lg:text-xl' /></div>
                <div className='hover:text-gray-500 flex items-center cursor-pointer border-l border-gray-400  pl-1 lg:pl-4'>Whishlist
                    <CiHeart className='ml-1 xl:ml-2 text-lg lg:text-xl' /></div>
                <div className='hover:text-gray-500 flex items-center border-l cursor-pointer border-gray-400  pl-1 lg:pl-4'>Cart
                    <MdOutlineShoppingCart className='ml-1 xl:ml-2 ' /></div>
            </div>
        </nav>
    </>)
}

export { Navbar }