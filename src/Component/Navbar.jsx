import React, { useState } from 'react';
import pic from "../assets/Collage img.jpg";
import { MdMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-scroll";


function Navbar() {
  const [menu, setmenu]=useState(false)
  const navItems=[
    {
      id:1,
      text:"Home"
    },
    {
      id:2,
      text:"About"
    },
    {
      id:3,
      text:"Portfolio"
    },
    {
      id:4,
      text:"Experience"
    },
    {
      id:5,
      text:"Contact"
    }
  ]
  return (
     <div>
        <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 shadow-md shadow-white flex justify-between items-center h-16 text-white'>
          <div className='flex space-x-2 items-center'>
            <img src={pic} className='h-12 w-12 rounded-full shadow-md shadow-orange-700' alt=""/>
              <div>
                <h1 className='font-semibold text-xl cursor-pointer'>
                  Rav<span className='text-green-500'>i</span>
                </h1>
                <p className='text-sm'>Web Developer</p>
              </div>
          </div>
          {/* Desktop Navbar*/}
          <div>
            <ul className=' hidden md:flex space-x-8'>
               {navItems.map(({ id, text }) => (
                <li 
                  className=' hover:scale-105 duration-200 cursor-pointer' 
                  key={id}
                >
                  <Link 
                  to={text}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  activeClass="active"
                  >{text}</Link>
                </li>
               ))}
            </ul>
             <div onClick={ () => setmenu (!menu) } className=' md:hidden'>
              {menu ? <IoMdClose size={24}/> : <MdMenu  size={24} />} </div>
          </div>
        </div>
        {/* Mobile Navbar */}
         {
          menu &&(
            <div>
              <ul className=' md:hidden flex flex-col items-center justify-center h-screen text-white'>
              {navItems.map(({ id, text }) => (
                <li 
                  className=' hover:scale-105 font-semibold  duration-200 cursor-pointer' 
                  key={id}
                >
                  <Link 
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="active"
                  >
                    {text}
                  </Link>
                </li>
               ))}
              </ul>
            </div>
          )
         }
    </div>
  );
}

export default Navbar;
