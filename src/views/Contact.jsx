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

  const handleSubmit = () => {
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
      
      <div className="w-[700px] bg-white mx-auto px-10 py-8 mt-8 rounded-lg shadow-lg">
        <h2 className="text-3xl text-orange-500">Contact Form</h2>

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
          className="w-full p-3 border border-gray-300 rounded-lg mb-4 h-32 resize-none"
        />

        {showSuccess && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
            🎉 Message Sent Successfully! We'll get back to you soon.
          </div>
        )}

        <button
          onClick={handleSubmit}
          className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors duration-300 mx-auto block mt-6"
        >
          Send Message
        </button>
      </div>
    </div>
  );
}

export default Contact;