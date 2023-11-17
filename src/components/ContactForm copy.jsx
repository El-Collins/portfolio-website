import React, { useEffect, useState } from "react";
import axios from "axios";

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

  return (
    <div className="section h-[900px]" id="contact">
      <form className="p-3" onSubmit={handleSubmit} action="">
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          placeholder="Your name"
          className="input"
          required
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          placeholder="Your email"
          className="input"
          required
          onChange={handleChange}
        />

        <input
          type="text"
          name="subject"
          id="subject"
          value={formData.subject}
          placeholder="Your subject"
          className="input"
          required
          onChange={handleChange}
        />

        <textarea
          id="message"
          name="message"
          placeholder="Your message"
          value={formData.message}
          className="input"
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

        <button type="submit" className="btn uppercase py-2 px-5">
          Send message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
