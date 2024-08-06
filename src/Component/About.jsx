import React from 'react'

export default function About() {
  return (
    <div 
        name="About" 
        className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-16'>
      <h1 className='text-3xl font-bold mb-5'>About</h1>
      <p className=' pl-4'>
        Hello, I'm Ravi, a passionate Web Developer with a keen eye for 
        MERN Stack . With a background in IT, I strive to create impactfull and visually
        stunning Software that leave a lasting impression
      </p>
      <br/>
      <h1 className='text-green-700 font-semibold text-xl'>Education & Training </h1>
      <div className=' pl-4'>
        <b>Teerthanker Mahaveer University</b>
        <p>Master of Computer Applications</p>   [2023-2025]
      </div>
      <br/>
      <br/>
      <h1 className='text-green-700 font-semibold text-xl'>Skills & Expertise</h1>
      <p className=' pl-4'>Proficient in Python Programming Languages Experience I have completed many certification courses on it and develope many projects as well. I am also fimiliar with python frameworks such as Pandas Numpy Matplotlib Scikit-Learn and development tools Jupyter Notebook vs Code and Pycharm also.
      </p>
      <br/>
      <br/>
      <h1 className='text-green-700 font-semibold text-xl'>Projects</h1>
      <b>1. Dog Breed Classification</b><br></br>
      <p className=' pl-4'>
        My dog breed classification program is a sophisticated machine learning project that leverages deep learning techniques to accurately identify dog breeds from images. Utilizing a Convolutional Neural Network (CNN) architecture, the model has been trained on a comprehensive dataset of dog images, encompassing a wide variety of breeds. The system employs data augmentation strategies, such as rotation and zoom, to enhance the model's robustness and accuracy.
      </p><br></br>
      <b>2. Blood Donation Website</b><br></br>
      <p className=' pl-4'>
      My blood donation website program is a dedicated platform designed to streamline the process of connecting blood donors with those in need. This web-based application features a user-friendly interface where potential donors can easily register, update their availability, and find nearby donation drives or hospitals. The system also includes a robust matching algorithm that pairs donors with patients based on blood type, location, and urgency of need, ensuring efficient and timely donations. Additionally, the website provides educational resources on the importance of blood donation and maintains a secure database to protect user information.
      </p><br></br>
      <b>3. Word to PDF converter</b><br></br>
      <ul className=' pl-4'>
        <li>Implemented cost-effective solutions, resulting in a 20% reduction in project expenses.</li>
        <li>Streamlined project workflows, enhancing overall efficiency by 25%.</li>
        <li>Led a team in successfully delivering a complex engineering project on time and within</li>
      </ul>
      <br/>
      <br/>
      <h1 className='text-green-700 font-semibold text-xl'>Achievement & Awards</h1>
        <div className=' pl-4'>
          <ul>
            <li>Machine Learning and Data Science Bootcamp offered by <b>Udemy</b>   [2023] </li>
            <li>Machine learning operations (MLOps) Course By <b>Udemy</b>   [2023] </li>
            <li>Space Science and Technology Awarness Training by <b>ISRO</b> [2024] </li>
            <li>Online Quize Test on Java arranged by <b>IIT MADRAS</b> [2024] </li>
          </ul>
        </div>
      <br/>
      <br/>
      <h1 className='text-green-700 font-semibold text-xl'>Mission Statement</h1>
      <p className=' pl-4'>My Mission is leverage my skills and creativity to deliver innovative
        Development solutions that exceed client expectations and contribute 
        positively to the digital landscape. I am committed to continuous learning and 
        growth, always seeking new challanges and opportunities to expand my horizons.
      </p>
    </div>
  )
}
