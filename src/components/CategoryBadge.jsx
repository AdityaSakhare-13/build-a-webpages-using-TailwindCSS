import { Mountain,TrainTrack,EvCharger,Merge,Motorbike,Building2,Baby,ListChevronsDownUp} from "lucide-react";

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
};

function CategoryBadge({category, className = ""}){
     const styleObj = CATEGORY_STYLE[category] || {};
    return(
     <span className={`${styleObj?.bgColor} flex items-center rounded-full text-white px-6 py-1 text-xs absolute top-3 left-7 z-5 ${className}`}>
        {styleObj?.icon}
    <span className="ml-2">{category}</span>
    </span>
    );
}

export default CategoryBadge;