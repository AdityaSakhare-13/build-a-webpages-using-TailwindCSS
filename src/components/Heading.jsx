function Heading({heading , className}) {
  return (
    <div>
      <h2 className={`text-center text-slate-600 text-3xl mt-[100px] mb-[50px] font-bold ${className}`}>{heading} </h2>   
    </div>
  )
}

export default Heading;
