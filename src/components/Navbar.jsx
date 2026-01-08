import ImgFavicon from '../Assets/Favicon.png';

function Navbar() {
  return (
    <div className='sticky top-0 bg-orange-300 py-4 px-10 border-b-3 border-orange-400 shadow-md z-50'>
     <span className='text-xl font-semibold text-orange-500 flex items-center'>
        <img src={ImgFavicon} alt="logo" className='h-10 w-10 inline-block mr-2'/>
        Rent a Bicycle
     </span>
    </div>
  )
}

export default Navbar
