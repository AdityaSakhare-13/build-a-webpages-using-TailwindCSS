function FeaturesCard({title, description, icon}) {
  return(
        <div key={title} className="bg-white m-4 py-4 px-4 w-[400px] rounded-md shadow-xl flex items-end">
        <div className=" w-[100px] h-[100px] ">{icon}</div>

        <div className="ml-6">
        <h3 className="text-xl my-4 mt-6 mb-2  font-bold">{title}</h3>
        <p className=" text-slate-600">{description}</p>
        </div>
    </div>
    );
}

export default FeaturesCard;