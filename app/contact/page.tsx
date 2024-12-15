import Link from 'next/link'
import React from 'react'

const Contact = () => {
  return (
<div className="bg-gray-100 min-h-screen py-12">
  <div className="container mx-auto px-4">
    {/* <!-- Heading --> */}
    <h1 className="text-4xl font-bold text-gray-800 text-center">Contact Us</h1>
    <p className="text-lg text-gray-600 text-center mt-4">
      Have questions? We'd love to hear from you. Fill out the form or use the details below to get in touch.
    </p>

    {/* <!-- Contact Form --> */}
    <form className="max-w-lg mx-auto mt-8 bg-white p-6 shadow-lg rounded">
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 font-medium">Your Name</label>
        <input id="name" type="text" className="w-full px-4 py-2 border rounded focus:outline-none  focus:ring focus:ring-blue-300" placeholder="Enter your name"/>
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-medium">Your Email</label>
        <input id="email" type="email" className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-300" placeholder="Enter your email"/>
      </div>
      <div className="mb-4">
        <label htmlFor="subject" className="block text-gray-700 font-medium">Subject</label>
        <input id="subject" type="text" className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-300" placeholder="Subject of your message"/>
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block text-gray-700 font-medium">Your Message</label>
        <textarea id="message" className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-300" rows={4} placeholder="Write your message"></textarea>
      </div>
      <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
        Send Message
      </button>
    </form>

    {/* <!-- Contact Information --> */}
    <div className="mt-8 text-center">
      <p className="text-gray-700">
       <b> Email:</b> <Link href="mailto:farihazia2006@gmail.com" className="text-blue-500 hover:underline">farihazia2006@gmail.com</Link>
      </p>
      <p className="text-gray-700 mt-2">
        <b>Phone:</b> <Link href="tel:+1234567890" className="text-blue-500 hover:underline">+1 234 567 890</Link>
      </p>
      <p className="text-gray-700 mt-2">
        <b>Address:</b> 123 Abc Street, Karachi, Pakistan
      </p>
    </div>

  
  </div>
</div>
  )}

  export default Contact
