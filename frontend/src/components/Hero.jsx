import React from 'react'

function Hero() {
  return (
    <div className='text-white pt-32'>
      <div className="mt-[-70px] w-full mx-auto text-center flex  flex-col justify-center h-screen bg-center bg-cover">
        <p className='mx-24 text-left text-3xl font-bold  font-Afacad leading-tight sm:text-5xl md:text-7xl'>
          The man <br />
          who has <br />
          <span className='text-left font-normal font-barriecito '>no imagination</span> <br />
          <span className='text-left font-bold font-barriecito'>has no wings.</span>
        </p>
        <p className='mx-24 text-sm font-thin text-left mt-4'>- MUHAMMAD ALI</p>
        <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button>
      </div>
    </div>
  )
}

export default Hero