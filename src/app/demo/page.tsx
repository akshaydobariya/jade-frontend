// "use client";
// import Image from 'next/image';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import { Navigation, Autoplay } from 'swiper/modules';
// import { LatoLightText, LatoMediumText, MontserratMediumText, PoppinsBoldText, PoppinsLightText, PoppinsMediumText } from '@/Style';

// export default function Home() {
//     const slides = [
//         { id: 1, src: 'https://via.placeholder.com/300x200?text=Slide+1', alt: 'Slide 1' },
//         { id: 2, src: 'https://via.placeholder.com/300x200?text=Slide+2', alt: 'Slide 2' },
//         { id: 3, src: 'https://via.placeholder.com/300x200?text=Slide+3', alt: 'Slide 3' },
//         { id: 4, src: 'https://via.placeholder.com/300x200?text=Slide+4', alt: 'Slide 4' },
//         { id: 5, src: 'https://via.placeholder.com/300x200?text=Slide+5', alt: 'Slide 5' },
//         { id: 6, src: 'https://via.placeholder.com/300x200?text=Slide+6', alt: 'Slide 6' },
//     ];

//     return (
//         <div className="mt-8 mx-auto px-4 w-1/2 right-0">

//             <div>
//                 <PoppinsBoldText fontSize="24px" fontWeight={700} color="#333">
//                     This is bold Poppins text
//                 </PoppinsBoldText>
//                 <PoppinsLightText fontSize="18px" color="#666">
//                     This is light Poppins text
//                 </PoppinsLightText>
//                 <PoppinsMediumText fontSize="18px" color="#999">
//                     This is medium Poppins text
//                 </PoppinsMediumText>
//                 <LatoLightText fontSize="18px" color="#666">
//                     This is light Lato text
//                 </LatoLightText>
//                 <LatoMediumText fontSize="16px" color="#FFFFFF">
//                     This is medium Lato text
//                 </LatoMediumText>
//                 <MontserratMediumText fontSize="16px" color="#000">
//                     This is medium Montserrat text
//                 </MontserratMediumText>
//             </div>



//             <Swiper
//                 modules={[Navigation, Autoplay]}
//                 spaceBetween={10}
//                 slidesPerView={5}
//                 centeredSlides={false}
//                 navigation
//                 autoplay={{ delay: 3000 }}
//                 breakpoints={{
//                     640: {
//                         slidesPerView: 3,
//                     },
//                     768: {
//                         slidesPerView: 4,
//                     },
//                     1024: {
//                         slidesPerView: 5,
//                     },
//                 }}
//                 className="relative"
//             >
//                 {slides.map((slide) => (
//                     <SwiperSlide key={slide.id}>
//                         <div className="relative w-full h-32"> {/* Adjust height as needed */}
//                             <Image
//                                 src={slide.src}
//                                 alt={slide.alt}
//                                 fill
//                                 style={{ objectFit: 'cover' }}
//                                 sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
//                                 className="absolute inset-0"
//                             />
//                         </div>
//                     </SwiperSlide>
//                 ))}
//             </Swiper>
//         </div>
//     );
// }
"use client";
"use client";
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faPlus, faBook } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const novels = [
    {
        id: 0,
        title: "An Exiled Mage's Odyssey",
        description: "Lorem Ipsum is simply",
        tags: ['OnGoing', 'Another Original'],
        image: '/api/placeholder/300/400'
    },
    {
        id: 1,
        title: "The Shadow's Embrace",
        description: "A tale of mystery and intrigue in a world of shadows...",
        tags: ['New', 'Fantasy'],
        image: '/api/placeholder/300/400'
    },
    {
        id: 2,
        title: "Echoes of Eternity",
        description: "An epic journey through time and space...",
        tags: ['Sci-Fi', 'Adventure'],
        image: '/api/placeholder/300/400'
    },
    // Add more novels as needed
];

const JadescrollsTop10 = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="bg-gray-900 p-6 relative">
            <h2 className="text-2xl font-bold mb-4 text-white">Jadescrolls Top 10</h2>
            <Swiper
                modules={[Navigation]}
                spaceBetween={10}
                slidesPerView={3} // Display three slides at once
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
                loop={true} // Enable infinite looping
                onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                className="swiper-container"
            >
                {novels.map((novel, index) => (
                    <SwiperSlide key={novel.id} className="flex">
                        <Image
                            src={novel.image}
                            alt={novel.title}
                            className="w-full h-full object-cover"
                            layout="fill"
                        />
                        <div className={`flex ${index === novel.id + 2 ? 'bg-gray-800 rounded-lg overflow-hidden' : 'bg-gray-800'}`}>
                            <div className={`relative ${index === novel.id + 2 ? 'w-2/3' : 'w-full'}`}>
                                <div className="absolute top-2 left-2 bg-green-500 text-white text-2xl font-bold w-10 h-10 flex items-center justify-center rounded-full">
                                    {novel.id}
                                </div>
                            </div>
                            <div className={`p-4 ${index === novel.id ? 'w-1/3' : 'hidden'}`}>
                                <h3 className="text-xl font-bold mb-2 text-white">{novel.title}</h3>
                                <p className="text-gray-400 mb-2 text-sm">{novel.description}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {novel.tags.map((tag, tagIndex) => (
                                        <span key={tagIndex} className="bg-gray-700 text-white text-xs px-2 py-1 rounded-full">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex gap-2">
                                    <button className="p-2 rounded-full bg-white text-gray-900">
                                        <FontAwesomeIcon icon={faBook} />
                                    </button>
                                    <button className="p-2 rounded-full bg-white text-gray-900">
                                        <FontAwesomeIcon icon={faHeart} />
                                    </button>
                                    <button className="p-2 rounded-full bg-white text-gray-900">
                                        <FontAwesomeIcon icon={faPlus} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div>
            <style jsx>{`
                .swiper-button-next, .swiper-button-prev {
                    color: white; /* Adjust color as needed */
                }
                .swiper-button-next::after, .swiper-button-prev::after {
                    font-size: 20px; /* Adjust font size if needed */
                }
            `}</style>
        </div>
    );
};

export default JadescrollsTop10;
