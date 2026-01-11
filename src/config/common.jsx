import {HandCoins, Motorbike ,MapPin , Phone, CalendarCheck, ShieldPlus} from "lucide-react"

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
];

const RVIEWS_CONFIG = [
{
  name:"john Doe",
  review:"Great Services and friendly staff",
  rating:2,
  avatar:"https://i.pravatar.cc/150?img=3",
},

{
  name:"Jane smith",
  review:"The bike were in excellent condition",
  rating:3,
  avatar:"https://i.pravatar.cc/150?img=5",
},

{
  name:"Alice Johnson",
  review:"Excellent service and great value for money",
  rating:4,
  avatar:"https://i.pravatar.cc/150?img=7",
},

{
    name:"Bob Williams",
    review:"The booking process was quick and easy",
    rating:5,
    avatar:"https://i.pravatar.cc/150?img=9",
  },

  {
    name:"Emily Davis",
    review:"Highly recommend this bicycle rental service",
    rating:4,
    avatar:"https://i.pravatar.cc/150?img=11",  
  },

  {
    name:"Michael Brown",
    review:"Wide selection of bicycles to choose from",
    rating:3,
    avatar:"https://i.pravatar.cc/150?img=13",
  }

]

const  COUPON_CODES ={

  "SAVE10": {
    discount:10,
    description:"Get off on your first rental."
  },

  "FREERIDE":{
    discount:100,
    description:"Enjoy a free ride for the first hour."
  },

  "WEEKEND20":{
    discount:20,
    description:"20% off on weekend rentals."
  },

  "FAMILY50":{
    discount:50,
    description: "50% off for family rentals (3 or more bikes)."
  }

}

export {COUPON_CODES,FEATURES_CONFIG, RVIEWS_CONFIG };