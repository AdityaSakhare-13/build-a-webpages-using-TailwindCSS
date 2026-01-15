import FeaturesCard from "./featuresCard.jsx";
import { FEATURES_CONFIG } from "../config/common.jsx";
import Heading from "./Heading.jsx";



function FeaturesSection() {
  return (
   <div className="pb-[50px]">  

        <Heading heading = "Why Choose Our Bicycle Rental Service?" />

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