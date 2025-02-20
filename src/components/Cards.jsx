import React from 'react';
import Github from '../assets/Github.png';

const Cards = ({ item, isAcademic }) => {
    return (
        <div className='border border-gray-300 shadow-lg rounded-lg w-[350px] lg:w-[400px] bg-white hover:scale-105 transition-transform duration-300'>
            <img src={item.image} alt="" className='rounded-t-lg object-cover h-48 w-full' />
            <div className='p-6'>
                <h1 className='font-bold text-xl mb-2 text-gray-800'>{item.title}</h1>
                <p className='text-gray-600'>{item.desc}</p>
                <div className='mt-4'>
                    <h3 className='text-sm font-semibold text-gray-700 mb-2'>Technology Stack:</h3>
                    <div className='flex flex-wrap gap-2'>
                        {item.techStack.map((tech, index) => (
                            <span 
                                key={index} 
                                className='bg-gray-100 text-gray-800 text-xs px-3 py-1 rounded-full shadow-sm border border-gray-200'>
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
                <div className='flex gap-3 mt-6'>
                    {isAcademic ? (
                        <button className='bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition'>
                            <a href={item.github} target='_blank' className='flex items-center gap-2'>
                                <img src={Github} alt="" className='w-5' />
                                Github
                            </a>
                        </button>
                    ) : (
                        <button className='bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition'>
                            <a href={item.live} target='_blank'>Live Preview</a>
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Cards;