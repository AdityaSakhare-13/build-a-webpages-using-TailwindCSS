import ImgHome from '../Assets/Home.png';
import { Link } from 'react-router';

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

    <Link to="/explore" className="text-3xl block mx-auto bg-orange-400 text-white m-4 py-2 px-4 rounded-md cursor-pointer w-fit">
      Explore Now 🛞
    </Link>
      </div>
  )
}

export default HeroSection
