import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { BsTelegram } from "react-icons/bs";

import { SiMongodb } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";

import { ReactTyped,Typed } from "react-typed";

import pic from "../assets/Collage img.jpg";








export default function Home() {
  return (
        <>
            <div 
                name="Home" 
                className=' max-w-screen-2xl container mx-auto px-4 md:px-20 my-20 shadow-md'>
                <div className=' flex flex-col md:flex-row'> 
                    <div className=' md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1'>
                        <span className='text-xl'>Welcome In My Feed</span>
                        <div className='flex space-x-1 text-2xl md:text-4xl'>
                            <h1>Hello, I'm a </h1>
                            {/*<span className=' text-red-700 font-bold'>Developer</span>*/}
                            <ReactTyped
                                className=' text-red-700 font-bold'
                                 strings={["Developer", "Programmer", "Coder"]}
                                 typeSpeed={40}
                                 backSpeed={50}
                                 loop={true}
                            />
                        </div>
                        <br/>
                        <p className='text-sm md:text-md text-justify'>I Have a good Understanding of HTML || CSS || JAVASCRIPT || MONGODB || EXPRESS || REACT || NODE.JS 
                        with the knowledge of Version Control System Git and Github.</p>
                        <br/>
                        {/* Social Media Icons*/}
                         <div className='flex items-center flex-col md:flex-row space-y-6 md:space-y-0 justify-between'>
                            <div className=' space-y-2'>
                                <h1 className='font-bold text-center'>Available On</h1>
                                <ul className='flex space-x-4'>
                                    <li>
                                         <a href='https://www.facebook.com/'
                                         target='_blank'>
                                            <FaFacebookSquare className='text-2xl cursor-pointer' />
                                        </a>
                                    </li>
                                    <li>
                                        <a href='https://www.linkedin.com/' 
                                        target='_blank'>
                                            < FaLinkedin className='text-2xl cursor-pointer' />
                                        </a>
                                    </li>
                                    <li>
                                        <a href='https://www.youtube.com/'
                                        target='_blank'>
                                            <IoLogoYoutube className='text-2xl cursor-pointer' />
                                        </a>
                                    </li>
                                    <li>
                                        <a href='https://t.me/'
                                        target='blank'> 
                                            <BsTelegram className='text-2xl cursor-pointer' />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                            <h1 className='font-bold'>Currently Working On</h1>
                                <ul className='flex space-x-5'>
                                 <SiMongodb className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]' />
                                 <SiReact className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]' />
                                 <SiExpress className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]' />
                                 <FaNodeJs className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]' />
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1'> 
                        <img src={pic} className='rounded-full md:w-[350px] md:h-[350px] ' alt="" />
                    </div>
                </div>
            </div>
        </>
    );
}
