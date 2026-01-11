import ImgFavicon from '../Assets/Favicon.png';
import { Link } from "react-router";

function Navbar() {
  return (
    <div className='sticky top-0 bg-orange-300 py-4 px-10 border-b-3 border-orange-400 shadow-md z-50 flex justify-between items-center'>
     <Link className='text-xl font-semibold text-orange-500 flex items-center' to="/">
        <img src={ImgFavicon} alt="logo" className='h-10 w-10 inline-block mr-2'/>
        Rent a Bicycle
     </Link>
     <nav className='flex space-x-4'>
       <Link to="/contact" className='text-orange-500 hover:text-orange-700'>Contact</Link>
     </nav>
    </div>
  )
}

export default Navbar