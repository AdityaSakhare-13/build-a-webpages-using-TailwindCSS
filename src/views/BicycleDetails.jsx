import { useSearchParams } from "react-router";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import {BICYCLES_CONFIG} from "./../config/bicycles";
import Heading from "../components/Heading";
import RatingStars from "../components/RatingStars";
import CategoryBadge from "../components/CategoryBadge";
import Input from "../components/Input";
import { COUPON_CODES } from "../config/common";

function BicycleDetails() {
  const [searchParams] = useSearchParams();

  const [bookingDetails, setBookingDetails] = useState({
    bicycleId:searchParams.get("id"),
    bookingDate:"",
    bookingTime:"",
    bookingDuration:"",
    userName:"",
    userEmail:"",
    userPhone:"",
    userAddress:"",
    userIdType:"",
    userIdNumber:"",
    couponCode:"",
    couponDiscount:0,
    couponDescription:"",
    totalAmount:0,

  });

  const id = searchParams.get("id");

  const bicycle = BICYCLES_CONFIG.find((bike) => bike.id === parseInt(id));

  useEffect(() => {
    const couponConfig = COUPON_CODES[bookingDetails.couponCode];

    const totalAmount =
    bookingDetails.bookingDuration * bicycle.rentalPrice;

    const discount =
      (bookingDetails.totalAmount * (couponConfig?.discount || 0) || 0) / 100;
    
    setBookingDetails((prevDetails) => ({
      ...prevDetails,
      couponDiscount: discount,
      couponDescription: couponConfig?.description || "",
      totalAmount:
       discount > 0 ?
        totalAmount - discount : totalAmount,
    }));

    }, [
      bookingDetails.couponCode,
      bookingDetails.bookingDuration,
  ]);


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

        <Input
        type="date"
        placeholder="Booking Date"
        value={bookingDetails.bookingDate}
        onChange={(value) => {
          setBookingDetails({
            ...bookingDetails,
            bookingDate: value,
          });
        }}
        className=""
        />

        <Input
        type="time"
        placeholder="Booking Time"
        value={bookingDetails.bookingTime}
        onChange={(value) => {
          setBookingDetails({
            ...bookingDetails,
            bookingTime: value,
          });
        }}
        className=""
        />
        
        <Input
        type="number"
        placeholder="Booking Duration (in hours)"
        value={bookingDetails.bookingDuration}
        onChange={(value) => {
          setBookingDetails({
            ...bookingDetails,
            bookingDuration: value,
          });
        }}
        className=""
        />

        <div className="text-xl mt-4 px-4">
          <p>
          Total Amount: ₹{" "}
          {bookingDetails.totalAmount + bookingDetails.couponDiscount}
        </p>

        {bookingDetails.couponDiscount > 0 ? (
        
        <p className="text-orange-400 text-sm italic">
        Coupon Applied 🎉 : {bookingDetails.couponCode} - {" "}
      {bookingDetails.couponDescription}. You Saved ₹
      {bookingDetails.couponDiscount}!
        </p>
      ) : null}

      <p>
        Payable Amount: ₹ {Math.floor(bookingDetails.totalAmount)}
      </p>

        </div>

        <Input
        type="text"
        placeholder="Coupon Code (If Any)"
        value={bookingDetails.couponCode}
        onChange={(value) => {
          setBookingDetails({
            ...bookingDetails,
            couponCode: value.toUpperCase(),
            
          });
        }}
        className=""
        />

        <p className="text-orange-500 pl-4">('Can You Have these Coupons : SAVE10 , FREERIDE , WEEKEND20 & FAMILY50') </p>

        <Input
        type="text"
        placeholder="Your Name"
        value={bookingDetails.userName}
        onChange={(value) => {
          setBookingDetails({
            ...bookingDetails,
            userName: value,
          });
        }}
        className=""
        />

        <Input
        type="text"
        placeholder="Your Email"
        value={bookingDetails.userEmail}
        onChange={(value) => {
          setBookingDetails({
            ...bookingDetails,
            userEmail: value,
          });
        }}
        className=""
        />

        <Input
        type="tel"
        placeholder="Your Phone Number"
        value={bookingDetails.userPhone}
        onChange={(value) => {
          setBookingDetails({
            ...bookingDetails,
            userPhone: value,
          });
        }}
        className=""
        />

        <Input
        type="text"
        placeholder="Your Address"
        value={bookingDetails.userAddress}
        onChange={(value) => {
          setBookingDetails({
            ...bookingDetails,
            userAddress: value,
          });
        }}
        className=""
        />

        <Input
        type="text"
        placeholder="Your ID Type (e.g., Aadhar , Passport)"
        value={bookingDetails.userIdType}
        onChange={(value) => {
          setBookingDetails({
            ...bookingDetails,
            userIdType: value,
          });
        }}
        className=""
        />

        <Input
        type="text"
        placeholder="Your ID Number"
        value={bookingDetails.userIdNumber}
        onChange={(value) => {
          setBookingDetails({
            ...bookingDetails,
            userIdNumber: value,
          });
        }}
        className=""
        />

        <button className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors duration-300 mx-auto block mt-6">
          Book Now
        </button>

        </div>

    </div>
  );
}

export default BicycleDetails;
