import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import facebook from '../assets/facebook.png';
import instagram from '../assets/instagram.png';
import linkedin from '../assets/linkedin.png';
import Lottie from 'lottie-react';
import contact from '../assets/Contact.json';

const Contact = () => {
  const [state, handleSubmit] = useForm("xzzdrnkj");

  return (
    <section id="contact" className="z-50 bg-gray-800 relative py-10 px-5 md:px-0">
      <div className="mb-16 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          
          {/* Left Side: Contact Details & Animation */}
          <div className="md:w-1/2 mb-8 ml-2 md:mb-0">
            <h2 className="text-3xl font-bold mb-3 text-red-500">Get in Touch</h2>
            <p className="mb-4 text-white/85">
              I'm always open to new opportunities and collaboration. Feel free to reach out!
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-foreground/60 hover:text-foreground/80">
                <img src={facebook} alt="Facebook" className="h-6 w-6"/>
              </a>
              <a href="#" className="text-foreground/60 hover:text-foreground/80">
                <img src={instagram} alt="Instagram" className="h-6 w-6"/>
              </a>
              <a href="#" className="text-foreground/60 hover:text-foreground/80">
                <img src={linkedin} alt="LinkedIn" className="h-6 w-6"/>
              </a>
            </div>
            <Lottie animationData={contact} className="w-[350px] mx-auto lg:w-[500px]"/>
          </div>

          {/* Right Side: Contact Form */}
          <form onSubmit={handleSubmit} className="w-full md:w-1/2 bg-gray-100 rounded-lg border border-red-300 shadow-lg shadow-red-500 p-10">
            <h1 className="text-gray-900 text-4xl font-bold mb-7">Contact Me</h1>
            
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                placeholder="Full Name" 
                required
                className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
              <ValidationError prefix="Name" field="name" errors={state.errors} />
            </div>
            
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                placeholder="Email" 
                required
                className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
              <ValidationError prefix="Email" field="email" errors={state.errors} />
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea 
                id="message" 
                name="message" 
                placeholder="Enter Your Message" 
                required
                className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
              <ValidationError prefix="Message" field="message" errors={state.errors} />
            </div>

            <button 
              type="submit" 
              disabled={state.submitting}
              className="bg-red-500 text-white px-3 py-2 rounded-lg"
            >
              {state.submitting ? "Sending..." : "Send Message"}
            </button>

            {state.succeeded && <p className="text-green-500 mt-2">Thanks for reaching out! I'll get back to you soon.</p>}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
