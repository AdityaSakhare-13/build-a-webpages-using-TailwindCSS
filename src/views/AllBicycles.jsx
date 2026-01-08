import Navbar from "../components/Navbar"
import imgExploreMainHeader from '../Assets/explore-header-main.png';
import Heading from "../components/Heading";
import { BICYCLES_CONFIG } from "./../config/bicycles";
import BicycleCard from "../components/BicycleCard";

function AllBicycles() {
  return (
    <div>
      <Navbar/>

      <img src={imgExploreMainHeader} alt="Explore Bicycles" className="w-full h-[200px] md:h-[200px] h-60 object-contain my-4 "/>

    <Heading heading={"Your adventure begins here!"}/>
      <p className="text-center text-lg md:text-xl px-4 md:px-8 mt-4">
        Explore our extensive collection of bicycles, carefully curated to suit every rider's needs. From sleek road bikes for speed enthusiasts to sturdy mountain bikes for off-road adventures, we have it all. Each bicycle is maintained to the highest standards, ensuring a safe and enjoyable ride. 
      </p>

    <div className="flex flex-wrap justify-center mt-8">
        {BICYCLES_CONFIG.map((bicycleData)=>{
            const {id, name , description, rentalPrice, rating, catergory, images }= bicycleData;
            return(
                <BicycleCard
                key={id}
                id={id}
                name={name}
                description={description}
                rentalPrice={rentalPrice}
                rating={rating}
                category={catergory}
                images={images}
                />
                
            );
        })}
    </div>

    </div>
  )
}

export default AllBicycles
