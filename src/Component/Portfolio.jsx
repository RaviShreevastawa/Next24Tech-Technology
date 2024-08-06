import React from 'react'
import python from "../assets/python logo.jpg";
import mongoDB from "../assets/Mongo logo.png";
import react from "../assets/react-logo-1.png";
import node from "../assets/Node.js logo.png";
import java from "../assets/java logo.png";
import express from "../assets/Express icon.png";

export default function Portfolio() {
  const cardItem=[
    {
      id:1,
      logo:mongoDB,
      name:"MongoDB"
    },
    {
      id:2,
      logo:express,
      name:"Express"
    },
    {
      id:3,
      logo:react,
      name:"React"
    },
    {
      id:4,
      logo:node.js,
      name:"Node.Js"
    },
    {
      id:5,
      logo:python,
      name:"Python"
    },
    {
      id:6,
      logo:java,
      name:"Java"
    }
  ]
  return (
    <div 
      name="Portfolio" 
      className=' max-w-screen-2xl container mx-auto px-4 md:px-20 my-16'>
      <div>
        <h1 className='text-3xl font-bold mb-5'>PortFolio</h1>
        <span className='underline font-semibold'>Feature Projects</span>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-4 my-5'>
           {
            cardItem.map(({id,logo,name}) => (
              <div className=' md:w-[300px] md:h-[300px] border-[2px] rounded-lg p-1 cursor-pointer hover:scale-110 duration-300 shadow-md' key={id}>
                <img src={logo} className=' w-[120px] h-[120px] p-1 rounded-full border-[2px]' alt="" />
                <div>
                  <div className=' px-2 font-bold text-xl mb-2'>{name}</div>
                  <p className='px-2 text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                </div>
                <div className='justify-around px-6 py-4 space-x-3'>
                  <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded'>Video</button>
                  <button className='bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded'>Source Code</button>
                </div>
              </div>
            ))
           }
        </div>
      </div>
    </div>
  )
}
