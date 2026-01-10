import Heading from "./Heading";
import {RVIEWS_CONFIG} from "../config/common"; 
import ReviewCard from "./ReviewCard";

function ReviewsSection() {
  return (
    <div>

    <Heading heading ="What Our Customer Say..." />
    
    <div className="flex flex-wrap justify-center">
{RVIEWS_CONFIG.map((item) =>{
  const {name , review , rating , avatar} = item;
  return<ReviewCard
  key={name}
  name={name}
  review={review}
  rating={rating}
  avatar={avatar}
  />
})}
</div>
    </div>
  );
}

export default ReviewsSection;



