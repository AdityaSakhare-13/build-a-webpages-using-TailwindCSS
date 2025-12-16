import {HandCoins, Motorbike ,MapPin , Phone, CalendarCheck, ShieldPlus} from "lucide-react"
const FEATURES_CONFIG =[
    {
        title: "Low Price",
        description: "we offer the most cometitive price in th market",
        icon:<HandCoins />,
        iconColor: "text-green-500"
    },

    {
        title: "Wide Selection",
        description: "Choose from a variety of bicycle to suit your needs.",
        icon: <Motorbike />,
        iconColor: "text-blue-500"
    },

    {
        title:"Convenient Location",
        description:"Our rental stations are conveniently located across the city.",
        icon:<MapPin />,
        iconColor:"text-red-500"
    },

    {
        title: "24/7 Support",
        description: "Our support team is available around the clock to assist you.",
        icon:<Phone />
    },

    {
        title: "Easy Booking",
        description: "Book your bicycle online in just a few clicks. ",
        icon:<CalendarCheck />,
        iconColor: "text-yellow-500"
    },

    {
        title: "safety First",
        description: "We prioritize your safety with well-maintained bicycles and safety gear.",
        icon:<ShieldPlus />,
        iconColor: "text-purple-500"
    },
]

function FeaturesSection() {
  return (
   <div>  
        <h2 className="text-center text-3xl pt-[100px]"> Why Our Bicycle Rental Service? </h2>  

        <div className="flex flex-wrap justify-around">
            {FEATURES_CONFIG.map((featureObj)=>{
                const {title , description, icon, iconColor} = featureObj;
                return(
                    <div key={title} className="bg-white m-4 p-4">
                       <div className={`${iconColor}`}>{icon}</div>
                       <h3 className="text-xl">{title}</h3>
                       <p>{description}</p>
                    </div>
                );
            })}
        </div> 

      </div> 
  )
}

export default FeaturesSection