import { useSearchParams } from "react-router";
import { useState } from "react";
import Navbar from "../components/Navbar";
import {BICYCLES_CONFIG} from "./../config/bicycles";
import Heading from "../components/Heading";
import RatingStars from "../components/RatingStars";
import CategoryBadge from "../components/CategoryBadge";

function BicycleDetails() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");

  const bicycle = BICYCLES_CONFIG.find((bike) => bike.id === parseInt(id));

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  return (
    <div>
      <Navbar/>
     
     <Heading heading={`Let's explore the ${bicycle.name}`} className={"mt-4! mb-4!"} />

     <div className="flex flex-col-reverse md:flex-row justify-center items-center  space-x-4">
      <div className="flex md:flex-col space-x-4 md:space-x-0 md:space-y-4">
        {
          bicycle.images.map((image, index) => {
            return (
              <img
              key={index}
              src={image}
              alt={`Thumbnail ${index + 1}`}
              onClick={() => setCurrentImageIndex(index)}
              className={` h-16 w-16 object-cover mb-2 cursor-pointer rounded-md ${index === currentImageIndex ? "border-2 border-orange-400": "" }`}
              />
            );
          })
        }
      </div>
      <div className="relative ">
        <span className="absolute top-2 right-2">
        <RatingStars rating={bicycle.rating} size={"lg"}/>
        </span>

           {/* Category */}
           <CategoryBadge category={bicycle.catergory} className="top-2! left-2!"/>

 {/* Rental pricing */}
    <span className="absolute text-black bottom-6 right-3 bg-white px-4 rounded-full border-1 border-gray-400 rounded-l-full border-r-0 z-10">
        {bicycle.rentalPrice}/hr
    </span>

        <img 
        src={bicycle.images[currentImageIndex]} 
        alt={bicycle.name} className="w-full h-[250px] md:w-[600px] md:h-[350px] object-cover mb-4 rounded-lg"/>
      </div>
     </div>
     <p className="text-center text-xl">
      {bicycle.description}
     </p>

        <div className="w-[700px] bg-white mx-auto px-10 py-8 mt-8 rounded-lg shadow-lg">
          <h2 className="text-3xl text-orange-500">Booking Form</h2>
        </div>

    </div>
  );
}

export default BicycleDetails;
