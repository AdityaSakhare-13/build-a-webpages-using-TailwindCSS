import { useState } from "react";
import Navbar from "../components/Navbar";
import Heading from "../components/Heading";
import Input from "../components/Input";

function Contact() {
  const [contactDetails, setContactDetails] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleSubmit = () => {
    if (!contactDetails.name || !contactDetails.email || !contactDetails.phone || !contactDetails.message) {
      setShowError(true);
      setTimeout(() => {
        setShowError(false);
      }, 3000);
      return;
    }
    setShowError(false);
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      setContactDetails({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    }, 1000);
  };

  return (
    <div>
      <Navbar />
      
      <Heading heading={"Get in Touch with Us"} className={"mt-4! mb-4!"} />
      
      <div className="w-full sm:w-[95%] md:w-[700px] bg-white mx-auto px-4 sm:px-6 md:px-10 py-6 sm:py-8 md:py-8 mt-6 sm:mt-8 md:mt-8 rounded-lg shadow-lg">
        <h2 className="text-2xl sm:text-3xl md:text-3xl text-orange-500">Contact Form</h2>

        <Input
          type="text"
          placeholder="Your Name"
          value={contactDetails.name}
          onChange={(value) => {
            setContactDetails({
              ...contactDetails,
              name: value,
            });
          }}
          className=""
        />

        <Input
          type="email"
          placeholder="Your Email"
          value={contactDetails.email}
          onChange={(value) => {
            setContactDetails({
              ...contactDetails,
              email: value,
            });
          }}
          className=""
        />

        <Input
          type="tel"
          placeholder="Your Phone Number"
          value={contactDetails.phone}
          onChange={(value) => {
            setContactDetails({
              ...contactDetails,
              phone: value,
            });
          }}
          className="mb-4"
        />

        <textarea
          placeholder="Your Message"
          value={contactDetails.message}
          onChange={(e) => {
            setContactDetails({
              ...contactDetails,
              message: e.target.value,
            });
          }}
          className="w-full p-2 sm:p-3 md:p-3 border border-gray-300 rounded-lg mb-4 h-24 sm:h-32 md:h-32 resize-none text-sm sm:text-base md:text-base"
        />

        {showError && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-3 sm:px-4 md:px-4 py-2 sm:py-3 md:py-3 rounded mb-4 text-xs sm:text-sm md:text-base">
            ⚠️ Please fill in all fields before sending the message.
          </div>
        )}

        {showSuccess && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-3 sm:px-4 md:px-4 py-2 sm:py-3 md:py-3 rounded mb-4 text-xs sm:text-sm md:text-base">
            🎉 Message Sent Successfully! We'll get back to you soon.
          </div>
        )}

        <button
          onClick={handleSubmit}
          className="bg-orange-500 text-white px-4 sm:px-6 md:px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors duration-300 mx-auto block mt-6 text-xs sm:text-sm md:text-base"
        >
          Send Message
        </button>
      </div>
    </div>
  );
}

export default Contact;