import {HandCoins, Motorbike ,MapPin , Phone, CalendarCheck, ShieldPlus} from "lucide-react"
import FeaturesCard from "./featuresCard";
const FEATURES_CONFIG =[
    {
        title: "Low Price",
        description: "we offer the most cometitive price in th market",
        icon:<HandCoins className="h-[70px] w-[70px]  text-green-500" />,
        
    },

    {
        title: "Wide Selection",
        description: "Choose from a variety of bicycle to suit your needs.",
        icon: <Motorbike className="h-[70px] w-[70px] text-blue-500" />,
       
    },

    {
        title:"Convenient Location",
        description:"Our rental stations are conveniently located across the city.",
        icon:<MapPin className="h-[70px] w-[70px] text-red-500" />,
    
    },

    {
        title: "24/7 Support",
        description: "Our support team is available around the clock to assist you.",
        icon:<Phone className="h-[70px] w-[70px] text-purple-500" />
    },

    {
        title: "Easy Booking",
        description: "Book your bicycle online in just a few clicks. ",
        icon:<CalendarCheck className="h-[70px] w-[70px] text-yellow-500" />,
       
    },

    {
        title: "safety First",
        description: "We prioritize your safety with well-maintained bicycles and safety gear.",
        icon:<ShieldPlus className="h-[70px] w-[70px] text-orange-500" />,
        
    },
]

function FeaturesSection() {
  return (
   <div>  
        <h2 className="text-center text-gray-600 text-3xl mt-[100px] mb-[50px] font-bold"> Why Our Bicycle Rental Service? </h2>  

        <div className="flex flex-wrap justify-around">
            {FEATURES_CONFIG.map((featureObj)=>{
                const {title , description, icon} = featureObj;
                
                return(
                    <FeaturesCard title={title} description={description} icon={icon} key={title}/>
                );
            })}
        </div> 

      </div> 
  )
}

export default FeaturesSection;