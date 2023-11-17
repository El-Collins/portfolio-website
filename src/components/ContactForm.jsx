import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaArrowRight } from "react-icons/fa6";


const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    if (successMessage || errorMessage) {
      setTimeout(() => {
        setSuccessMessage("");
        setErrorMessage("");
      }, 3000);
    }
  }, [successMessage, errorMessage]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make an HTTP POST request to your server
      await axios.post("http://localhost:3000/", formData);

      // Reset form after successful submission
      e.target.reset();

      setSuccessMessage("Form submitted successfully");
      setErrorMessage(""); // Clear any previous error messages

      console.log("Form submitted successfully");
    } catch (error) {
      setSuccessMessage(""); // Clear any previous success messages
      setErrorMessage("Error submitting form. Please try again.");
      console.error("Error submitting form:", error);
    }
  };

  //col-lg-4 col-md-4 col-12 lg:grid-cols-3 md:grid-cols-4
  return (
    <div >
      <form  onSubmit={handleSubmit} action="/Contact" method="post">
        <div className="grid gap-4 lg:grid-cols-3">
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          placeholder="Your name"
          className="input max-sm:col-span-12 "
          required
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          placeholder="Your email"
          className="input max-sm:col-span-12"
          required
          onChange={handleChange}
        />

        <input
          type="text"
          name="subject"
          id="subject"
          value={formData.subject}
          placeholder="Your subject"
          className="input max-sm:col-span-12"
          required
          onChange={handleChange}
        />

        <textarea
          id="message"
          name="message"
          placeholder="Your message"
          value={formData.message}
          className="input col-start-1 col-end-4 max-sm:col-span-12"
          rows="4"
          required
          onChange={handleChange}
        />

        {errorMessage && (
          <p className="text-red-500 mt-2">{errorMessage}</p>
        )}

        {successMessage && (
          <p className="text-green-500 mt-2">{successMessage}</p>
        )}

        
        </div>
        <button 
              to="/About"
              class="btn cursor-pointer w-[260px] relative flex text-left py-[16px] px-[35px] mt-5"
            >
              <span className="text-white relative">SEND MESSAGE</span>{" "}
              <span className="absolute z-50 rounded-full bg-[#dddddd21] w-[64px] h-[64px] right-[0px] top-0 flex justify-center items-center">
                <FaArrowRight />
              </span>
            </button>
      </form>
      </div>
  );
};

export default ContactForm;
