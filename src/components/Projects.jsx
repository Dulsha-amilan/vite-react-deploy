import React from 'react';
import Portfolio from '../assets/Portfolio.png';
import SpicyBites from '../assets/SpicyBites.png';
import Youtube from '../assets/Youtube.png';
import Webelite from '../assets/Webelite.png';
import Supercar from '../assets/Supercar.png';
import Selltheworld from '../assets/Selltheworld.png';
import Shilpa from '../assets/Shilpa.png';
import Codeflyvlog from '../assets/codfly.png';
import Fitconntect from '../assets/fitconnect.png';
import Uben from '../assets/Uben.png';
import REWAP from '../assets/REWAP.png';
import red from '../assets/red.png';
import Fation from '../assets/fashion.png';
import Chat from '../assets/chat.png';
import Cards from './Cards';

const Projects = () => {
    const projectJson = [
        {
            title: 'Pasofin 2.0 – Finance Application',
            desc: 'Revamped a cloud-based financial accounting system, enhancing usability and functionality. Worked as a full-stack developer throughout the project.',
            image: Portfolio,
            live: "https://pasofin.com.au/",
            github: "https://github.com/rohitsingh93300/portfolio",
            techStack: ['React', 'Node.js', 'Tailwind CSS', 'MySQL']
        },
        {
            title: 'HIPPOS - Billing & Inventory Management with POS',
            desc: 'Developed a full-stack billing and inventory management system, including sales, purchases, stock management, and POS integration.',
            image: SpicyBites,
            live: "https://stalionelanka.com/hippos/",
            github: "https://github.com/rohitsingh93300/YtSpicyBites",
            techStack: ['Laravel', 'React', 'PostgreSQL', 'Bootstrap']
        },
        {
            title: 'Sri Lanka e-participation Portal',
            desc: 'The eParticipation Portal implemented by the Government of Sri Lanka is a digital platform designed to enhance citizen engagement and participation in governance processes.',
            image: Youtube,
            live: "https://www.eparticipation.gov.lk/",
            github: "https://github.com/rohitsingh93300/YouTube-clone",
            techStack: ['React', 'Node.js', 'Express.js', 'MongoDB']
        },
        {
            title: 'Sri Lanka Lighting Digital Portal',
            desc: 'Designed for the youth who have basic ICT skills who want to enter the ICT industry. Here the admin panel is developed to make its changes and the administrators to develop its functionality.',
            image: Webelite,
            live: "https://www.webelitebuilders.com/",
            github: "#",
            techStack: ['Laravel', 'PHP', 'MySQL', 'Bootstrap']
        },
        {
            title: 'Skkunah',
            desc: 'Skkunah is a vibrant platform blending internet cultures creativity with cryptocurrencys excitement, offering a community-driven hub for enthusiasts to explore, trade, and engage in the dynamic world of meme coins.',
            image: Supercar,
            live: "https://www.skkunah.com/",
            github: "https://github.com/rohitsingh93300/supercars",
            techStack: ['Next.js', 'Tailwind CSS']
        },
        {
            title: 'Sell The World',
            desc: 'Global marketing enables dynamic brands to extend their influence, exploring new opportunities. With creative strategies and powerful campaigns, we assist companies in growing, engaging varied audiences',
            image: Selltheworld,
            live: "https://www.selltheworld.org/",
            github: "https://github.com/rohitsingh93300/supercars",
            techStack: ['React', 'Node.js', 'GraphQL']
        },
    ];

    const projectsJson = [
      {
        title: 'Education Management System',
        desc: 'Completed student management functions for both web and mobile platforms. Application now fully manages all aspects',
        image: Shilpa,
        live: "https://supercar123.netlify.app/",
        github: "https://github.com/Dulsha-amilan/Shilpa-education-institutions-management-system-ITP.git",
        techStack: ['React', 'Node.js', 'MongoDB','Express.js']
    },
    {
        title: 'Fit-Connect',
        desc: 'FitConnect provides features for community engagement, progress tracking, and knowledge sharing in fitness.',
        image: Fitconntect,
        live: "https://supercar123.netlify.app/",
        github: "https://github.com/Dulsha-amilan/Fit-Connect.git",
        techStack: ['React', 'JAVA', 'Spring Boot','MySQL']
    },
    {
        title: 'Ubern Mall Application',
        desc: 'Ubern mall application offers a seamless shopping experience with product browsing, purchasing, and order tracking.',
        image: Uben,
        live: "https://supercar123.netlify.app/",
        github: "https://github.com/Dulsha-amilan/Ubern-mall-aplication.git",
        techStack: ['React', 'Node.js', 'MongoDB','Express.js']
    },
    {
        title: 'Electronic Store',
        desc: 'The electronic store e-commerce website offers seamless shopping, showcasing electronics with easy purchasing and delivery options.',
        image: REWAP,
        live: "https://supercar123.netlify.app/",
        github: "https://github.com/Dulsha-amilan/Electronic-Store.git",
        techStack: ['React', 'Node.js', 'MongoDB','Express.js']
    },
    {
        title: 'RED Rooster Farm',
        desc: 'RED Rooster Farm is an online store offering fresh farm products with convenient delivery options.',
        image: red,
        live: "https://supercar123.netlify.app/",
        github: "https://github.com/Dulsha-amilan/Red-Rooster-Farm-Outlet-New.git",
        techStack: ['PHP', 'HTML', 'CSS', 'JavaScript','MySQL']
    },
    {
        title: 'Fashion Laura Store',
        desc: 'Sandipa Fashion Store is an online platform offering trendy apparel and accessories with convenient shopping options.',
        image: Fation,
        live: "https://supercar123.netlify.app/",
        github: "https://github.com/Dulsha-amilan/IT21357930-Online-Market-Store-Fashion-Laura-.git",
        techStack: ['PHP', 'HTML', 'CSS', 'JavaScript','MySQL']
    },
    {
        title: 'Codefly Vlog',
        desc: 'Codefly Vlog is a technology website delivering insights, tutorials, and updates for tech enthusiasts worldwide.',
        image: Codeflyvlog,
        live: "https://supercar123.netlify.app/",
        github: "https://github.com/Dulsha-amilan/Codefly-Vlog.git",
        techStack: ['React', 'Node.js', 'MONOGO DB','Express.js']
    },
    {
        title: 'Real Time Chat Application',
        desc: 'The Real-Time Chat Application enables instant messaging, file sharing, and seamless communication for users worldwide.',
        image: Chat,
        live: "https://supercar123.netlify.app/",
        github: "https://github.com/Dulsha-amilan/Real-Time-Chat-App.git",
        techStack: ['React', 'Node.js', 'MONOGO DB','Express.js']
    },
    ];

    return (
        <section id='projects' className='relative bg-gray-100 py-16 px-6'>
            <div className='mb-16 max-w-7xl mx-auto'>
                <h2 className='text-4xl font-bold mb-8 text-gray-800 border-b-4 border-red-500 w-max pb-3'>Industrial Projects</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-8'>
                    {projectJson.map((item) => (
                        <Cards key={item.title} item={item} isAcademic={false} />
                    ))}
                </div>
            </div>

            <div className='max-w-7xl mx-auto'>
                <h2 className='text-4xl font-bold mb-8 text-gray-800 border-b-4 border-red-500 w-max pb-3'>Academic Projects</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-8'>
                    {projectsJson.map((item) => (
                        <Cards key={item.title} item={item} isAcademic={true} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
