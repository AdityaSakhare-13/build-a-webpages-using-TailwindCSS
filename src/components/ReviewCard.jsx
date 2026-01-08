import RatingStars from "./RatingStars";

function ReviewCard({name, review, rating, avatar}) {
  return (
    <div className="bg-white m-4 px-6 py-4 rounded-md flex w-full md:max-w-fit ">
      <img src={avatar} alt={`${name}'s avatar`}
      className="rounded-full w-20 h-20 mr-6 "
      />

    <div>
      <h3 className="text-lg font-semibold mt-2">{name}</h3>

    <RatingStars rating={rating} />

      <p className="text-gray-600 mt-2">{review}</p>
    </div>
    </div>
  );
}

export default ReviewCard;
