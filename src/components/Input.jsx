function Input({type="text" , value, onChange, placeholder, className}) {

  return (
    <input
    type={type}
    value={value}
    onChange={(e) => {
    onChange(e.target.value);
    }}
    placeholder={placeholder}
    className={`w-full p-2 mt-6 border border-orange-400 rounded-full px-6  ${className} `}
    />
  );
}

export default Input
