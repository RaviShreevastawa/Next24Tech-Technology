import React from 'react'
import html from "../assets/html-logo.png";
import javascript from "../assets/javascript.jpg";
import oracle from "../assets/oracle-logo.jpg";
import java from "../assets/java logo.png";
import css from "../assets/css-logo.png";
import springboot from "../assets/springboot.png";
import spring from "../assets/springboot-logo.png"

export default function Experience() {
  const cardItem=[
    {
      id:1,
      logo:html,
      name:"HTML"
    },
    {
      id:2,
      logo:javascript,
      name:"JavaScript"
    },
    {
      id:3,
      logo:oracle,
      name:"Oracle"
    },
    {
      id:4,
      logo:java,
      name:"Java"
    },
    {
      id:5,
      logo:css,
      name:"Css"
    },
    {
      id:6,
      logo:springboot,
      name:"Springboot"
    },
    {
      id:7,
      logo:spring,
      name:"Spring"
    }
  ]
  return (
    <div 
      name="Experience" 
      className=' max-w-screen-2xl container mx-auto px-4 md:px-20 my-16'>
      <div>
        <h1 className='text-3xl font-bold mb-5'>Experience</h1>
        <span className='font-semibold'>I have more than of one year of Experience in web Technologies</span>
        <div className='grid grid-cols-2 md:grid-cols-5 gap-7 my-3'>
           {
            cardItem.map(({id,logo,name}) => (
              <div className=' flex flex-col items-center justify-center border-[2px] rounded-full md:w-[200px] md:h-[200px] cursor-pointer hover:scale-110 duration-300' 
              key={id}>
                <img 
                    src={logo} 
                    className=' w-[150px] rounded-full' 
                    alt="" />
                <div>
                  <div className=''>{name}</div>
                  
                </div>
              </div>
            ))
           }
        </div>
      </div>
    </div>
  )
}
