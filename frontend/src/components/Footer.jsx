import React from 'react'
import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare,
    FaLinkedin
  } from 'react-icons/fa';
  

function Footer() {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-2 gap-8 text-gray-300 border-b border-b-white'>
    <div>
      <h1 className='w-full text-3xl font-bold text-[#00df9a]'>Pavan Kumar K</h1>
      <p className='py-4'>
          sup bro!!
      </p>
    </div>
    <div className='flex flex-col items-center'>
      <div className='flex justify-between w-full md:w-[75%] my-6'>
        <a href='https://www.linkedin.com/in/pavan-kumar-k-/' target='_blank' rel='noopener noreferrer'>
          <FaLinkedin size={30} />
        </a>
        <a href='https://github.com/PAVAN28GIT' target='_blank' rel='noopener noreferrer'>
          <FaGithubSquare size={30} />
        </a>
        <a href='https://www.instagram.com' target='_blank' rel='noopener noreferrer'>
          <FaInstagram size={30} />
        </a>
        <a href='https://www.twitter.com' target='_blank' rel='noopener noreferrer'>
          <FaTwitterSquare size={30} />
        </a>
  
      </div>
      
    </div>
  </div>
  )
}

export default Footer



