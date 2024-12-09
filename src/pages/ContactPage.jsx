import React, { useState } from "react";

const ContactPage = () => {
  const [form, setForm] = useState({
    fullName: "",
    subject: "",
    email: "",
    body: "",
  });

  const [errors, setErrors] = useState({});

  // Funktion för att hantera ändringar i input-fälten
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    console.log(`Changed ${name} to: ${value}`); // Logga ändring av inputfält
  };

  // Funktion för att validera formuläret
  const validateForm = () => {
    const newErrors = {};

    if (form.fullName.trim().length < 3) {
      newErrors.fullName = "Full name must be at least 3 characters.";
    }

    if (form.subject.trim().length < 3) {
      newErrors.subject = "Subject must be at least 3 characters.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (form.body.trim().length < 3) {
      newErrors.body = "Body must be at least 3 characters.";
    }

    console.log("Validation errors:", newErrors); // Logga valideringsfel
    return newErrors;
  };

  // Funktion för att hantera formulärinlämning
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      console.log("Form submission prevented due to errors:", validationErrors); // Logga om formuläret inte skickas
    } else {
      setErrors({});
      alert("Form submitted successfully!");
      console.log("Form data:", form); // Logga formdata när formuläret skickas
      setForm({ fullName: "", subject: "", email: "", body: "" });
    }
  };

  return (
    <div className="mx-auto max-w-2xl p-6">
      <h1 className="mb-6 text-center text-3xl font-bold text-gray-800">
        Contact Us
      </h1>
      <form
        onSubmit={handleSubmit}
        className="space-y-6 rounded-lg bg-white p-6 shadow-lg"
      >
        {/* Full name */}
        <div>
          <label
            htmlFor="fullName"
            className="block text-sm font-medium text-gray-700"
          >
            Full Name
          </label>
          <div className="relative mt-1">
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
              className={`w-full border ${
                errors.fullName ? "border-red-500" : "border-gray-300"
              } rounded-lg px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500`}
              placeholder="Enter your full name"
              required
            />
            {errors.fullName && (
              <p className="mt-2 text-sm text-red-500">{errors.fullName}</p>
            )}
          </div>
        </div>

        {/* Subject */}
        <div>
          <label
            htmlFor="subject"
            className="block text-sm font-medium text-gray-700"
          >
            Subject
          </label>
          <div className="relative mt-1">
            <input
              type="text"
              id="subject"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              className={`w-full border ${
                errors.subject ? "border-red-500" : "border-gray-300"
              } rounded-lg px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500`}
              placeholder="Enter the subject"
              required
            />
            {errors.subject && (
              <p className="mt-2 text-sm text-red-500">{errors.subject}</p>
            )}
          </div>
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <div className="relative mt-1">
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className={`w-full border ${
                errors.email ? "border-red-500" : "border-gray-300"
              } rounded-lg px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500`}
              placeholder="Enter your email address"
              required
            />
            {errors.email && (
              <p className="mt-2 text-sm text-red-500">{errors.email}</p>
            )}
          </div>
        </div>

        {/* Body */}
        <div>
          <label
            htmlFor="body"
            className="block text-sm font-medium text-gray-700"
          >
            Body
          </label>
          <div className="relative mt-1">
            <textarea
              id="body"
              name="body"
              value={form.body}
              onChange={handleChange}
              className={`w-full border ${
                errors.body ? "border-red-500" : "border-gray-300"
              } rounded-lg px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500`}
              placeholder="Enter your message"
              rows={5}
              required
            ></textarea>
            {errors.body && (
              <p className="mt-2 text-sm text-red-500">{errors.body}</p>
            )}
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="flex w-full items-center justify-center rounded-lg bg-indigo-600 py-2 font-medium text-white transition-colors duration-300 hover:bg-indigo-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="mr-2 h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.862 3.487l4.123 4.124m0 0L10.75 17.847a4.5 4.5 0 01-1.662 1.059l-4.884 1.627 1.627-4.884a4.5 4.5 0 011.059-1.662L16.862 3.487zm4.123 4.124L18 5m-3 10l-3-3m2.133-6.117l-.743.744"
            />
          </svg>
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactPage;
