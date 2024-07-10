import React from 'react'
import steve from '../assets/steve-jobs.jpeg';

function Quote() {
  return (
    <div className='w-full bg-white py-8 px-4'>
    <div className='max-w-[1210px] mx-auto grid md:grid-cols-2'>
      <img className='w-[250px] mx-auto my-4 ' src={steve} alt='/' />
      <div className='flex flex-col justify-center'>
        <p className='text-[#010103] md:text-4xl sm:text-3xl text-2xl font-bold font-Afacad  '> I want to put a ding in the universe</p>
        <h1 className='text-gray-500 '>- Steve Jobs</h1>
        
      </div>
    </div>
  </div>
  )
}

export default Quote