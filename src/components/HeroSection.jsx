import ImgHome from '../Assets/Home.png';



import React from 'react'

function HeroSection() {
  return (
     <div className='mt-10'>
    <img src={ImgHome} alt="bicycle" className='h-[200px] md:h-[400px] block mx-auto object-contain'  />

      <h1 className='text-center text-5xl text-gray-800 font-bold my-8'>

        Rent a Bicycle with <span className='text-green-600 px-4 py-1 rounded-md inline-block rotate-6'>Easy</span> and <span className='text-yellow-500 px-4 py-1 rounded-md inline-block mt-6 md:mt-0 rotate-0 md:rotate-6'>convenience!</span>
      </h1>


      <p className='text-center text-2xl text-gray-700 mb-6'>
        Explore our wide range of bicycles available for rent. Whether you're looking for a leisurely ride around the city or an adventurous trail experience, we have the perfect bike for you.
      </p>

      </div>
  )
}

export default HeroSection
