import React, { useState, useCallback } from "react";
import { IoMail } from "react-icons/io5";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { Link } from "react-router-dom";

export const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // null, 'success', 'error'

  const validateForm = useCallback(() => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Invalid email format";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    if (formData.phone && !/^\+?[\d\s-]{7,}$/.test(formData.phone))
      newErrors.phone = "Invalid phone number";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitStatus(null);

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Here you can send the formData to a backend API using fetch/axios
    console.log("Form submitted:", formData);

    // After successful submission
    setFormData({ name: "", email: "", phone: "", message: "" });
    setSubmitStatus("success");

    setIsSubmitting(false);
    setTimeout(() => setSubmitStatus(null), 5000); // Clear status after 5s
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const Input = ({ type, name, placeholder, rows, label }) => (
    <div className='mb-4'>
      <label
        htmlFor={name}
        className='block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1'>
        {label}
      </label>
      {rows ? (
        <textarea
          id={name}
          name={name}
          rows={rows}
          placeholder={placeholder}
          value={formData[name]}
          onChange={handleChange}
          className={`w-full rounded-md border p-3 text-gray-700 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition ${
            errors[name] ? "border-red-500" : "border-gray-300"
          }`}
          aria-invalid={!!errors[name]}
          aria-describedby={errors[name] ? `${name}-error` : undefined}
          disabled={isSubmitting}
        />
      ) : (
        <input
          id={name}
          type={type}
          name={name}
          placeholder={placeholder}
          value={formData[name]}
          onChange={handleChange}
          className={`w-full rounded-md border p-3 text-gray-700 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition ${
            errors[name] ? "border-red-500" : "border-gray-300"
          }`}
          aria-invalid={!!errors[name]}
          aria-describedby={errors[name] ? `${name}-error` : undefined}
          disabled={isSubmitting}
        />
      )}
      {errors[name] && (
        <p id={`${name}-error`} className='mt-1 text-sm text-red-500'>
          {errors[name]}
        </p>
      )}
    </div>
  );

  return (
    <section className='bg-white py-12 dark:bg-gray-900 md:py-16 lg:py-20'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-wrap gap-8 lg:flex-nowrap'>
          {/* Contact Info */}
          <div className='w-full lg:w-1/2'>
            <span className='block text-sm font-semibold text-indigo-600 mb-3'>
              Contact Me
            </span>
            <h2 className='mb-4 text-2xl font-bold uppercase text-gray-900 dark:text-white md:text-3xl'>
              Get in Touch with Me
            </h2>
            <p className='mb-6 text-base text-gray-600 dark:text-gray-300'>
              I'm here to assist you! Reach out with any questions or inquiries.
            </p>

            {/* WhatsApp Info */}
            <div className='mb-4 flex gap-3'>
              <div className='h-10 w-10 flex-shrink-0 rounded-lg bg-indigo-50 text-indigo-600 dark:bg-gray-700 dark:text-indigo-400 flex items-center justify-center'>
                <FaSquareWhatsapp />
              </div>
              <div>
                <h4 className='text-base font-semibold text-gray-900 dark:text-white'>
                  WhatsApp
                </h4>
                <Link
                  to='https://wa.me/201150690708?text=Hello!'
                  className='text-sm text-gray-600 hover:text-indigo-500 dark:text-gray-300 dark:hover:text-indigo-400 transition-colors'
                  target='_blank'
                  rel='noopener noreferrer'>
                  (+20) 1150690708
                </Link>
              </div>
            </div>

            {/* Email Info */}
            <div className='mb-4 flex gap-3'>
              <div className='h-10 w-10 flex-shrink-0 rounded-lg bg-indigo-50 text-indigo-600 dark:bg-gray-700 dark:text-indigo-400 flex items-center justify-center'>
                <IoMail />
              </div>
              <div>
                <h4 className='text-base font-semibold text-gray-900 dark:text-white'>
                  Email
                </h4>
                <Link
                  to='https://mail.google.com/mail/?view=cm&to=mostafa9922m@gmail.com'
                  className='text-sm text-gray-600 hover:text-indigo-500 dark:text-gray-300 dark:hover:text-indigo-400 transition-colors'
                  target='_blank'
                  rel='noopener noreferrer'>
                  mostafa9922m@gmail.com
                </Link>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className='w-full lg:w-1/2'>
            <div className='rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800'>
              <form onSubmit={handleSubmit} noValidate>
                <Input
                  type='text'
                  name='name'
                  placeholder='Your Name'
                  label='Name'
                />
                <Input
                  type='email'
                  name='email'
                  placeholder='Your Email'
                  label='Email'
                />
                <Input
                  type='tel'
                  name='phone'
                  placeholder='Your Phone (Optional)'
                  label='Phone (Optional)'
                />
                <Input
                  name='message'
                  placeholder='Your Message'
                  rows={5}
                  label='Message'
                />
                <button
                  type='submit'
                  className='w-full rounded-md bg-indigo-600 p-3 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed transition'
                  disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
                {submitStatus === "success" && (
                  <p className='mt-4 text-sm text-green-500 text-center'>
                    Message sent successfully!
                  </p>
                )}
                {submitStatus === "error" && (
                  <p className='mt-4 text-sm text-red-500 text-center'>
                    Failed to send message. Please try again.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
