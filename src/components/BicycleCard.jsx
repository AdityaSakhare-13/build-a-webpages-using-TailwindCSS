import { ChevronLeft ,ChevronRight} from "lucide-react";
import RaingStars from "./RatingStars";
import { useState } from "react";
import {Link} from "react-router";
import CategoryBadge from "./CategoryBadge";


function BicycleCard({
    id, name , description ,rentalPrice ,rating , category, images,
}) {

   
    const [slideIndex, setSlideIndex] = useState(0);

    const showPreImg = () => {
        if(slideIndex > 0){
        setSlideIndex(slideIndex -1);
        }else{
            setSlideIndex(images.length -1);
        }
    };

    const showNextImg = () => {
        if(slideIndex < images.length -1){
            setSlideIndex(slideIndex + 1);
    }else{
        setSlideIndex(0);
    }
    };
  return (
    <div className="bg-white w-[400px] m-4 px-6 py-2 rounded-md relative shadow-lg"
        key={id}>

    {/* Category */}
<CategoryBadge category={category} />

     {/* Rating */}

     <span className="absolute top-4 right-7 flex text-white z-10" >
        <RaingStars rating={rating}/> ({rating}) 
     </span>

 {/* Rental pricing */}
    <span className="absolute text-black top-[172px] right-7 bg-white px-4 rounded-full border-1 border-gray-400 rounded-l-full border-r-0 z-10">
        {rentalPrice}/hr
    </span>

    <div className="shadow-lg rounded-md relative">
        <ChevronLeft className="absolute text-white left-0 top-18 h-[40px] w-[40px] cursor-pointer" onClick={showPreImg}/>
      <img src={images[slideIndex]} alt={name} 
      className="w-full h-48 object-cover rounded-md mb-3" />
      <ChevronRight className="absolute text-white right-0 bottom-20 h-[40px] w-[40px] cursor-pointer" onClick={showNextImg}/>
    </div>

      <h2 className="text-lg md:text-xl text-slate-700">{name}</h2>
      <p className="text-gray-500 text-md ">
        {description}
      </p>

      <Link className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md mt-4 transition-colors duration-200 block mx-auto cursor-pointer w-fit" to={`/Bicycle-details?id=${id}`}>
        Rent Now
      </Link>
    </div>
  )
}

export default BicycleCard;
