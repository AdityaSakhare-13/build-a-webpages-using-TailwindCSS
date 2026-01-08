import { Mountain,TrainTrack,EvCharger,Merge,Motorbike,Building2,Baby,ListChevronsDownUp} from "lucide-react";
import RaingStars from "./RatingStars";

const CATEGORY_STYLE ={
    "Mountain":{
        icon:<Mountain className="text-white inline-block h-[16px] w-[16px] "/>,
        bgColor: "bg-green-500"
    },
    "Road":{
        icon: <TrainTrack className="text-white inline-block h-[16px] w-[16px] "/>,
        bgColor: "bg-red-500"
    },
    "Electric":{
        icon:<EvCharger className="text-white inline-block h-[16px] w-[16px]"/>,
        bgColor: "bg-blue-500"
    },
    "Hybrid":{
        icon:<Merge className="text-white inline-block h-[16px] w-[16px] "/>,  
        bgColor: "bg-yellow-500"
    },
    "BMX":{
        icon:<Motorbike className="text-white inline-block h-[16px] w-[16px] "/>,
        bgColor: "bg-purple-500"
    },
    "City":{
        icon:<Building2 className="text-white inline-block h-[16px] w-[16px] "/>,
        bgColor: "bg-pink-500"
    },
    "Kids":{
        icon:<Baby className="text-white inline-block h-[16px] w-[16px] "/>,
        bgColor: "bg-orange-500"
    },
    "Folding":{
        icon:<ListChevronsDownUp className="text-white inline-block h-[16px] w-[16px] "/>,
        bgColor: "bg-teal-500"
    },
}



function BicycleCard({
    id, name , description ,rentalPrice ,rating , category, images,
}) {

    const styleObj = CATEGORY_STYLE[category] || {}

  return (
    <div className="bg-white w-[400px] m-4 px-6 py-2 rounded-md relative shadow-lg"
        key={id}>

    {/* Category */}
    <span className={`${styleObj?.bgColor} text-white   rounded-full px-6 py-1 text-xs absolute top-4 left-4 flex items-center`}>{styleObj?.icon}
    <span className="ml-2">{category}</span>
    </span>

     {/* Rating */}

     <span className="absolute top-4 right-4 flex">
        <RaingStars rating={rating}/> ({rating}) 
     </span>

 {/* Rental pricing */}
    <span className="absolute text-black top-[160px] right-0 bg-white px-4 rounded-full border-1 border-gray-400 rounded-l-full border-r-0">
        {rentalPrice}
    </span>

      <img src="https://cdn-icons-png.flaticon.com/512/9842/9842417.png" alt={name} className="w-full h-48 object-contain  " />

      <h2 className="text-lg md:text-xl text-slate-700">{name}</h2>
      <p className="text-gray-500 text-md ">
        {description}
      </p>

      <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md mt-4 transition-colors duration-200 block mx-auto cursor-pointer">
        Rent Now
      </button>
    </div>
  )
}

export default BicycleCard;
