import React, { useState, useEffect } from 'react';
import hero from '../assets/Hero.png';
import facebook from '../assets/facebook.png';
import twitter from '../assets/twitter.png';
import linkedin from '../assets/linkedin.png';
import reactLogo from '../assets/NodeLogo.png';
import reduxLogo from '../assets/Redux.png';
import tailwind from '../assets/Express.png';
import cv from '../assets/Dulsha Senavirathna.pdf';

const Hero = () => {
  const names = ['Dulsha Amilan', 'Creative Coder'];
  const professions = [
    'Software Engineer',
    'Full-Stack Developer', 
    'UI/UX Developer',
    'Web Developer'
  ];

  const [currentNameIndex, setCurrentNameIndex] = useState(0);
  const [currentProfessionIndex, setCurrentProfessionIndex] = useState(0);
  const [isNameAnimating, setIsNameAnimating] = useState(false);
  const [isProfessionAnimating, setIsProfessionAnimating] = useState(false);

  // Name animation effect
  useEffect(() => {
    const nameInterval = setInterval(() => {
      setIsNameAnimating(true);
      setTimeout(() => {
        setCurrentNameIndex((prev) => (prev + 1) % names.length);
        setIsNameAnimating(false);
      }, 300);
    }, 3000);

    return () => clearInterval(nameInterval);
  }, [names.length]);

  // Profession animation effect
  useEffect(() => {
    const professionInterval = setInterval(() => {
      setIsProfessionAnimating(true);
      setTimeout(() => {
        setCurrentProfessionIndex((prev) => (prev + 1) % professions.length);
        setIsProfessionAnimating(false);
      }, 400);
    }, 2500);

    return () => clearInterval(professionInterval);
  }, [professions.length]);

  return (
    <section className='relative overflow-hidden'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex flex-col md:flex-row items-center lg:h-[90vh] justify-between'>
          <div className='md:w-1/2 mb-8 md:mb-0 flex flex-col space-y-4 px-6 lg:px-0 lg:mt-0 mt-10'>
            <div className='relative'>
              <h1 className='lg:text-7xl text-4xl font-bold lg:leading-snug'>
                Hi There, <br />
                I'm{' '}
                <span className='relative inline-block'>
                  <span 
                    className={`text-red-500 transition-all duration-500 ${
                      isNameAnimating 
                        ? 'transform -translate-y-8 opacity-0' 
                        : 'transform translate-y-0 opacity-100'
                    }`}
                  >
                    {names[currentNameIndex]}
                  </span>
                  {/* Animated underline */}
                  <div className='absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-pink-500 transform scale-x-0 animate-pulse'></div>
                </span>
              </h1>
              
              {/* Floating particles animation */}
              <div className='absolute -top-4 -right-4 w-2 h-2 bg-red-400 rounded-full animate-bounce opacity-60'></div>
              <div className='absolute top-8 -left-2 w-1 h-1 bg-pink-400 rounded-full animate-ping opacity-40'></div>
            </div>

            <div className='relative h-16 flex items-center'>
              <p 
                className={`md:text-2xl text-xl font-semibold transition-all duration-600 absolute ${
                  isProfessionAnimating 
                    ? 'transform translate-y-8 opacity-0' 
                    : 'transform translate-y-0 opacity-100'
                }`}
              >
                <span className='bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
                  {professions[currentProfessionIndex]}
                </span>
                {' | B.Sc (Hons) in Information Technology'}
              </p>
            </div>

            <div className='transform transition-all duration-1000 hover:scale-105'>
              <p className='mb-4 text-gray-700 leading-relaxed'>
                Enthusiastic Software and Computer Engineer deeply passionate about technology, seeking an exciting opportunity as a software engineer. Eager to leverage my diverse skill set and practical knowledge to craft innovative solutions in a dynamic professional software environment. Proficient in problem-solving, effective communication, and talented at managing time efficiently. I aim to bring an adaptable mindset and a drive for excellence to contribute meaningfully to your team's success.
              </p>
            </div>

            <a href={cv} download="Dulsha_Senavirathna_CV.pdf">
              <button className='bg-gradient-to-r from-black to-gray-800 text-white px-6 py-3 w-max rounded-lg hover:from-gray-800 hover:to-black transition-all duration-300 transform hover:scale-105 hover:shadow-xl'>
                <span className='flex items-center gap-2'>
                  Download CV
                  <svg className='w-4 h-4 animate-bounce' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' />
                  </svg>
                </span>
              </button>
            </a>
          </div>

          <div className='md:w-1/2 relative flex justify-center items-end'>
            <div className='relative'>
              <img 
                src={hero} 
                alt='Hero' 
                className='lg:h-[90vh] h-96 transform transition-transform duration-1000 hover:scale-105' 
              />
              
              {/* Floating tech icons with enhanced animations */}
              <img 
                src={reactLogo} 
                alt='React' 
                className='absolute w-12 top-36 left-0 rounded-full md:hidden animate-spin-slow hover:animate-spin' 
              />
              <img 
                src={reduxLogo} 
                alt='Redux' 
                className='absolute w-12 top-0 right-5 md:hidden animate-pulse hover:scale-110 transition-transform' 
              />
              <img 
                src={tailwind} 
                alt='Tailwind' 
                className='absolute w-12 rounded-full right-1 bottom-8 md:hidden animate-bounce hover:animate-ping transition-all' 
              />
            </div>

            {/* Animated background elements */}
            <div className='absolute top-1/4 left-1/4 w-4 h-4 bg-blue-300 rounded-full animate-pulse opacity-30'></div>
            <div className='absolute top-3/4 right-1/4 w-3 h-3 bg-purple-300 rounded-full animate-bounce opacity-40'></div>
          </div>
        </div>
      </div>

      {/* Enhanced social media sidebar */}
      <div className='absolute top-40 right-10 hidden bg-white/80 backdrop-blur-sm p-4 md:flex flex-col gap-6 rounded-2xl shadow-xl border border-gray-100'>
        <a 
          href='https://github.com/Dulsha-amilan'
          className='transform transition-all duration-300 hover:scale-110 hover:rotate-6'
        >
          <img src={facebook} alt='Facebook' className='w-16 rounded-lg hover:shadow-lg' />
        </a>
        <a 
          href='https://x.com/DulshaS76276'
          className='transform transition-all duration-300 hover:scale-110 hover:-rotate-6'
        >
          <img src={twitter} alt='Twitter' className='w-16 rounded-lg hover:shadow-lg' />
        </a>
        <a 
          href='https://www.linkedin.com/in/dulsha-senavirathna-4ba699218/'
          className='transform transition-all duration-300 hover:scale-110 hover:rotate-6'
        >
          <img src={linkedin} alt='LinkedIn' className='w-16 rounded-lg hover:shadow-lg' />
        </a>
      </div>

      {/* Animated background gradient */}
      <div className='absolute inset-0 -z-10 bg-gradient-to-br from-blue-50 via-white to-purple-50 opacity-60'></div>
      
      {/* Additional CSS for custom animations */}
      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;