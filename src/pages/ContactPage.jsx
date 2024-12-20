import React, { useState } from "react";
import { z } from "zod";

const ContactPage = () => {
  const [form, setForm] = useState({
    fullName: "",
    subject: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  // Zod schema för validering
  const schema = z.object({
    fullName: z.string().min(3, "Full name must be at least 3 characters."),
    subject: z.string().min(3, "Subject must be at least 3 characters."),
    email: z.string().email("Please enter a valid email address."),
    message: z.string().min(3, "Message must be at least 3 characters."),
  });

  // Funktion för att hantera ändringar i input-fälten
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    console.log(`Changed ${name} to: ${value}`); // Logga ändring av inputfält
  };

  // Funktion för att validera formuläret
  const validateForm = () => {
    try {
      schema.parse(form); // Validera formdata mot schemat
      setErrors({}); // Rensa fel om validering lyckas
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const validationErrors = {};
        error.errors.forEach((err) => {
          validationErrors[err.path[0]] = err.message;
        });
        setErrors(validationErrors); // Uppdatera fel
        console.log("Validation errors:", validationErrors); // Logga valideringsfel
      }
      return false;
    }
  };

  // Funktion för att hantera formulärinlämning
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Form submitted successfully!");
      console.log("Form data:", form); // Logga formdata när formuläret skickas
      setForm({ fullName: "", subject: "", email: "", message: "" });
    } else {
      console.log("Form submission prevented due to errors.");
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

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700"
          >
            Message
          </label>
          <div className="relative mt-1">
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              className={`w-full border ${
                errors.message ? "border-red-500" : "border-gray-300"
              } rounded-lg px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500`}
              placeholder="Enter your message"
              rows={5}
              required
            ></textarea>
            {errors.message && (
              <p className="mt-2 text-sm text-red-500">{errors.message}</p>
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
