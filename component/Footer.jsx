import React from 'react'
import { Heading_footer } from './Heading_footer'
import { Footer_link_text, Footer_text } from './Footer_text'
import { IoMdHelpCircleOutline } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import { footer_data } from '../utils/footer_data';
import app_store_img from '../assets/app_store_img.svg'
import google_play_img from '../assets/google_play_img.svg'
import appgallery_img from '../assets/appgallery_img.png'
import tamara_en_img from '../assets/tamara_en_img.svg'
import card_amex_img from '../assets/card_amex_img.svg'
import card_mastercard_img from '../assets/card_mastercard_img.svg'
import card_visa_img from '../assets/card_visa_img.svg'
import cash_en_img from '../assets/cash_en_img.svg'
import tabby_v2_img from '../assets/tabby_v2_img.svg'
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa6";








export const Footer = () => {
    return (<>
        <footer className='p-3 bg-gray-200'>
            <div className='mb-4 hidden md:block'>
                <Heading_footer text="Superior online shopping in the UAE" />
                <Footer_text>As the leading destination for online shopping in the UAE, noon has everything you need under one roof. Whether you’re shopping for the latest
                    <Footer_link_text text="electronic products" />
                    , fashion, homeware,
                    <Footer_link_text text="products for kids and babies" />
                    , books and stationery, sports and health essentials,
                    <Footer_link_text text="beauty products" />
                    , or groceries, we have millions of products in the noon UAE store. As a customer-centric online store, we make it easier to buy online with flexible payment plans that help you save, along
                    <Footer_link_text text="Read More" class="font-bold" />
                </Footer_text>


                <Heading_footer text="Shop the best products & brands at noon UAE" />
                <Footer_text>You’ll find a massive variety of products from top brands at noon UAE. Our electronics department has the
                    <Footer_link_text text="latest mobile phones," />
                    along with tablets, mobile accessories,
                    <Footer_link_text text="laptops," />
                    wearable technology such as smartwatches and other wearable devices,
                    <Footer_link_text text="headphones" />
                    (in-ear, wireless and noise-cancelling), audiovisual gear, a selection of
                    <Footer_link_text text="cameras, televisions, video game consoles" />
                    such as PC and Xbox controllers, and
                    <Footer_link_text text="video games." />
                    We have products from Samsung, Xiaomi,


                    <Footer_link_text text="Read More" class="font-bold" />
                </Footer_text>


                <Heading_footer text="Hassle-free UAE online shopping" />
                <Footer_text>When you buy online at noon, you will always have peace of mind knowing that you are getting the best level of service. We take the hassle out of online shopping in Abu Dhabi and Dubai, with a number of features and flexible payment plans that make shopping simpler, faster, and better.

                    <Footer_link_text text=" Our Buy Now, Pay Later " />
                    plans include
                    <Footer_link_text text="Tabby," />
                    with orders split over 4 payments, and
                    <Footer_link_text text="Tamara," />
                    with orders split over 3 payments. Both plans are interest-free. We accept credit
                    <Footer_link_text text="Read More" class="font-bold" />
                </Footer_text>
            </div>


            <div className='sm:flex items-center justify-between bg-gray-300 '>
                <div className='sm:w-1/2 my-2'>
                    <Heading_footer class="sm:text-xl text-base" text="We're Always Here To Help" />
                    <Footer_text>
                        Reach out to us through any of these support channels
                    </Footer_text>
                </div>


                <div className='flex items-center space-x-5 bg-gray-2'>
                    <div className='flex items-center space-x-1 w-full hover:text-gray-500 cursor-pointer'>
                        <IoMdHelpCircleOutline size={"25px"} />
                        <div>
                            <Footer_text class="text-xs sm:text-sm" >
                                HELP CENTER
                            </Footer_text>
                            <Heading_footer text="help.noon.com" class="text-sm sm:text-base mt-0 hover:text-gray-500" />
                        </div>
                    </div>
                    <div className='flex items-center space-x-1 w-full hover:text-gray-500 cursor-pointer'>
                        <MdOutlineEmail size={"25px"} />
                        <div>
                            <Footer_text class="text-xs sm:text-sm" >
                                EMAIL SUPPORT
                            </Footer_text>
                            <Heading_footer text="care@noon.com" class="text-sm sm:text-base mt-0 hover:text-gray-500" />
                        </div>
                    </div>

                </div>
            </div>



            <div className='sm:flex  grid grid-cols-3 bg-gray-2 justify-between py-2'>
                {footer_data.map((head_arr, i) => {
                    const { arr, heading } = head_arr
                    return (
                        <div key={i} className="my-2">
                            <Heading_footer class="mt-0 text-sm xl:text-base" text={heading} key={i} />

                            <div className='flex-col space-y-1 my-3 '>
                                {arr.map((str, ind) => {
                                    return < Footer_text key={ind} class="cursor-pointer  text-[13px] xl:text-sm" >
                                        {str}
                                    </Footer_text>
                                })}
                            </div>
                        </div>
                    )
                })}

            </div>


            <div className="sm:flex block justify-around text-center">

                <div>
                    <Heading_footer class="sm:text-base text-sm" text="SHOP ON THE GO" />
                    <div className="flex justify-center">
                        <img src={app_store_img} className='w-28 cursor-pointer' alt="" />
                        <img src={google_play_img} className='w-28 cursor-pointer' alt="" />
                        <img src={appgallery_img} className='sm:w-28 w-24 cursor-pointer' alt="" />
                    </div>
                </div>


                <div className='text-center'>
                    <Heading_footer class="sm:text-base text-sm" text="CONNECT WITH US" />
                    <div className="flex space-x-5 items-center justify-center m-auto">
                        <div className='p-2 bg-[#f3e009] cursor-pointer text-xl  rounded-full'>
                            <FaFacebookF />
                        </div>
                        <div className='p-2 bg-[#f3e009]  cursor-pointer text-xl  rounded-full'>
                            <FaTwitter />
                        </div>
                        <div className='p-2 bg-[#f3e009]  cursor-pointer text-xl  rounded-full'>
                            <FaInstagram />
                        </div>
                        <div className='p-2 bg-[#f3e009]  cursor-pointer text-xl  rounded-full'>
                            <FaLinkedinIn />
                        </div>
                    </div>
                </div>


            </div>



            <div className='sm:flex block justify-between bg-gray-300 py-3'>
                <Footer_text class=" hidden sm:block lg:text-base">
                    © 2024 noon. All Rights Reserved
                </Footer_text>

                <div className="sm:w-1/2 flex justify-around">
                    <img className='cursor-pointer' src={tamara_en_img} alt="" />
                    <img className='cursor-pointer' src={tabby_v2_img} alt="" />
                    <img className='cursor-pointer' src={card_amex_img} alt="" />
                    <img className='cursor-pointer' src={card_mastercard_img} alt="" />
                    <img className='cursor-pointer' src={card_visa_img} alt="" />
                    <img className='cursor-pointer' src={cash_en_img} alt="" />
                </div>

            </div>


            <div className="sm:flex grid grid-cols-2 justify-around pt-2 px-2 bg-gray-300">
                <Footer_text class="underline-offset-1 py-1 hover:underline cursor-pointer">
                    Careers
                </Footer_text>

                <Footer_text class="underline-offset-1 py-1 hover:underline cursor-pointer">
                    Warranty Policy
                </Footer_text>

                <Footer_text class="underline-offset-1 py-1 hover:underline cursor-pointer">
                    Sell with us

                </Footer_text>

                <Footer_text class="underline-offset-1 py-1 hover:underline cursor-pointer">
                    Terms of Use
                </Footer_text>

                <Footer_text class="underline-offset-1 py-1 hover:underline cursor-pointer">
                    Terms of Sale
                </Footer_text>

                <Footer_text class="underline-offset-1 py-1 hover:underline cursor-pointer">
                    Privacy Policy
                </Footer_text>

                <Footer_text class="underline-offset-1 py-1 hover:underline cursor-pointer">

                    Consumer Rights

                </Footer_text>

            </div>





            <Footer_text class=" sm:hidden flex justify-center items-center ">
                © 2024 noon. All Rights Reserved
            </Footer_text>


        </footer >

    </>
    )
}


