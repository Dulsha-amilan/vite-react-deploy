import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import { Quote, Star } from 'lucide-react';

const Testimonials = () => {

    const testimonials = [
        {
            id: 1,
            name: "Anoj Samarasekera",
            rating: 5,
            text: "Dulsha was a dedicated and skilled intern at ICTA, contributing effectively to key projects like the Sri Lanka e-Participation Portal and the Sri Lanka Lighting Digital Portal. Their technical expertise, attention to detail, and proactive approach were commendable and made a positive impact on the team."
        },
        {
            id: 2,
            name: "Sanjayan Vithyashankar",
            rating: 5,
            text: "Dulsha has been a valuable team member at Stalione Lanka, showing strong technical skills and a great problem-solving approach. Their contributions to the development of Pasofin 2.0 and HIPPOS have been impressive, and they consistently demonstrate dedication, teamwork, and innovation."
        },
        {
            id: 3,
            name: "Sujay Kumar",
            rating: 5,
            text: "Dulsha was a proactive and talented intern at ICTA, showcasing strong technical skills and contributing significantly to projects like the Sri Lanka e-Participation Portal and the Sri Lanka Lighting Digital Portal. Their dedication and ability to deliver quality work were highly commendable."
        },
        {
            id: 4,
            name: "Firos Ahamed",
            rating: 5,
            text: "Dulsha is a skilled and dedicated software engineer at Stalione Lanka. Their expertise in full-stack development and attention to detail have greatly contributed to the success of projects like Pasofin 2.0 and HIPPOS. Dulsha consistently demonstrates a strong work ethic and a collaborative approach to problem-solving."
        },
        {
            id: 5,
            name: "Geethanjali Wimalaratne",
            rating: 4,
            text: "Dulsha has demonstrated excellent technical skills and dedication in their project work. Their ability to tackle complex problems, combined with a strong understanding of software development, contributed significantly to the success of the project. Dulsha’s proactive approach and eagerness to learn were highly impressive throughout the course."
        }
    ]

    return (
        <div id='testimonials' className='py-10 bg-gray-100 relative' >
            <h1 className='text-center text-2xl lg:text-4xl font-bold'>Supervisor Feedback</h1>
            <div className='max-w-6xl mx-auto py-10 px-5'>
                <Swiper
                    style={{
                        "--swiper-pagination-color": "#EF4444",
                        "--swiper-pagination-bullet-inactive-color": "#999999",
                        "--swiper-pagination-bullet-inactive-opacity": "1",
                        "--swiper-pagination-bullet-size": "10px",
                        "--swiper-pagination-bullet-horizontal-gap": "6px",
                    }}
                    modules={[Pagination, Autoplay]}
                    loop={true}
                    speed={600}
                    autoplay={{ delay: 5000 }}
                    slidesPerView={3}
                    spaceBetween={30}
                    breakpoints={{
                        320: { slidesPerView: 1 },
                        480: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    pagination={{
                        el: ".swiper-pagination",
                        type: "bullets",
                        clickable: true,
                    }}
                    className="mySwiper"
                >
                    {testimonials.map((item) => {
                        return <SwiperSlide key={item.id}>
                            <div className='border border-gray-400 shadow-md shadow-red-500 rounded-lg flex flex-col p-4'>
                                {item.rating === 4 ? (
                                    <div className='flex'>
                                        <Star fill='true' />
                                        <Star fill='true' />
                                        <Star fill='true' />
                                        <Star fill='true' />
                                        <Star />
                                    </div>
                                ) : (
                                    <div className='flex'>
                                        <Star fill='true' />
                                        <Star fill='true' />
                                        <Star fill='true' />
                                        <Star fill='true' />
                                        <Star fill='true' />
                                    </div>
                                )}
                                <p className='py-3'>{item.text}</p>
                                <div className='flex justify-between items-center'>
                                    <div>
                                        <h3 className='font-semibold text-red-500 text-lg'>{item.name}</h3>
                                        <p className='text-sm mt-1'>Supervisor</p>
                                    </div>
                                    <Quote className='text-red-400'/>
                                </div>
                            </div>
                        </SwiperSlide>
                    })}
                    <div className='swiper-pagination my-10 gap-1 relative'></div>

                </Swiper>
            </div>
        </div>
    )
}

export default Testimonials
