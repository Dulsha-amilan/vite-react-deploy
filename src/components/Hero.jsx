import React from 'react';
import hero from '../assets/Hero.png';
import facebook from '../assets/facebook.png';
import twitter from '../assets/twitter.png';
import linkedin from '../assets/linkedin.png';
import reactLogo from '../assets/NodeLogo.png';
import reduxLogo from '../assets/Redux.png';
import tailwind from '../assets/Express.png';
import cv from '../assets/Dulsha Senavirathna.pdf';

const Hero = () => {
  return (
    <section className='relative'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex flex-col md:flex-row items-center lg:h-[90vh] justify-between'>
          <div className='md:w-1/2 mb-8 md:mb-0 flex flex-col space-y-4 px-6 lg:px-0 lg:mt-0 mt-10'>
            <h1 className='lg:text-7xl text-4xl font-bold lg:leading-snug'>
              Hi There, <br />I'm Dulsha <span className='text-red-500'>Amilan</span>
            </h1>
            <p className='md:text-2xl text-xl mb-4'>Software Engineer | B.Sc (Hons) in Information Technology</p>
            <p className='mb-4'>
              Enthusiastic Software and Computer Engineer deeply passionate about technology, seeking an exciting opportunity as a software engineer. Eager to leverage my diverse skill set and practical knowledge to craft innovative solutions in a dynamic professional software environment. Proficient in problem-solving, effective communication, and talented at managing time efficiently. I aim to bring an adaptable mindset and a drive for excellence to contribute meaningfully to your team's success.
            </p>
            <a href={cv} download="Dulsha_Senavirathna_CV.pdf">
              <button className='bg-black text-white px-3 py-2 w-max rounded-md'>Download CV</button>
            </a>
          </div>
          <div className='md:w-1/2 relative flex justify-center items-end'>
            <img src={hero} alt='Hero' className='lg:h-[90vh] h-96' />
            <img src={reactLogo} alt='React' className='absolute w-10 top-36 left-0 rounded-full md:hidden' />
            <img src={reduxLogo} alt='Redux' className='absolute w-10 top-0 right-5 md:hidden' />
            <img src={tailwind} alt='Tailwind' className='absolute w-10 rounded-full right-1 bottom-8 md:hidden' />
          </div>
        </div>
      </div>
      <div className='absolute top-40 right-10 hidden bg-gray-200 p-4 md:flex flex-col gap-6 rounded-full'>
        <a href='https://github.com/Dulsha-amilan'>
          <img src={facebook} alt='Facebook' className='w-20' />
        </a>
        <a href='https://x.com/DulshaS76276'>
          <img src={twitter} alt='Twitter' className='w-20' />
        </a>
        <a href='https://www.linkedin.com/in/dulsha-senavirathna-4ba699218/'>
          <img src={linkedin} alt='LinkedIn' className='w-20' />
        </a>
      </div>
    </section>
  );
};

export default Hero;
