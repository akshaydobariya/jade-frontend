"use client";
import Head from 'next/head';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
import batman from "../../public/batman.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon, faSearch, faHeart, faPlus, faBars, faHeartCircleCheck } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { LatoLightText, PoppinsBoldText } from '@/Style';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const slides = [
    { id: 1, src: 'https://fastly.picsum.photos/id/507/800/600.jpg?hmac=jVQYvzKK6bX3LeLH2oTLkpO9hLUZbI6oBmALM8B6v9s', alt: 'Slide 1' },
    { id: 2, src: 'https://fastly.picsum.photos/id/507/800/600.jpg?hmac=jVQYvzKK6bX3LeLH2oTLkpO9hLUZbI6oBmALM8B6v9s', alt: 'Slide 2' },
    { id: 3, src: 'https://fastly.picsum.photos/id/507/800/600.jpg?hmac=jVQYvzKK6bX3LeLH2oTLkpO9hLUZbI6oBmALM8B6v9s', alt: 'Slide 3' },
    { id: 4, src: 'https://fastly.picsum.photos/id/507/800/600.jpg?hmac=jVQYvzKK6bX3LeLH2oTLkpO9hLUZbI6oBmALM8B6v9s', alt: 'Slide 4' },
    { id: 5, src: 'https://fastly.picsum.photos/id/507/800/600.jpg?hmac=jVQYvzKK6bX3LeLH2oTLkpO9hLUZbI6oBmALM8B6v9s', alt: 'Slide 5' },
    { id: 6, src: 'https://fastly.picsum.photos/id/507/800/600.jpg?hmac=jVQYvzKK6bX3LeLH2oTLkpO9hLUZbI6oBmALM8B6v9s', alt: 'Slide 6' },
    { id: 4, src: 'https://fastly.picsum.photos/id/507/800/600.jpg?hmac=jVQYvzKK6bX3LeLH2oTLkpO9hLUZbI6oBmALM8B6v9s', alt: 'Slide 4' },
    { id: 5, src: 'https://fastly.picsum.photos/id/507/800/600.jpg?hmac=jVQYvzKK6bX3LeLH2oTLkpO9hLUZbI6oBmALM8B6v9s', alt: 'Slide 5' },
    { id: 6, src: 'https://fastly.picsum.photos/id/507/800/600.jpg?hmac=jVQYvzKK6bX3LeLH2oTLkpO9hLUZbI6oBmALM8B6v9s', alt: 'Slide 6' }, { id: 4, src: 'https://fastly.picsum.photos/id/507/800/600.jpg?hmac=jVQYvzKK6bX3LeLH2oTLkpO9hLUZbI6oBmALM8B6v9s', alt: 'Slide 4' },
    { id: 5, src: 'https://fastly.picsum.photos/id/507/800/600.jpg?hmac=jVQYvzKK6bX3LeLH2oTLkpO9hLUZbI6oBmALM8B6v9s', alt: 'Slide 5' },
    { id: 6, src: 'https://fastly.picsum.photos/id/507/800/600.jpg?hmac=jVQYvzKK6bX3LeLH2oTLkpO9hLUZbI6oBmALM8B6v9s', alt: 'Slide 6' },
  ];

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      <Head>
        <title>JadeScrolls - An Exiled Mage`s Odyssey</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="absolute inset-0 z-[-1]">
        <Image
          src="/hero-bg.jpg"
          alt="Fantasy landscape"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="w-full h-full"
        />
      </div>

      <header className="container mx-auto px-4 py-6 relative z-20">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            {/* <Image src="/logo.png" alt="JadeScrolls Logo" width={40} height={40} /> */}
            <span className="ml-2 text-2xl md:text-3xl font-bold">JadeScrolls</span>
          </div>
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              <li><a href="#" className="hover:text-gray-300">Novels</a></li>
              <li><a href="#" className="hover:text-gray-300">Honors</a></li>
              <li><a href="#" className="hover:text-gray-300">Treasury</a></li>
              <li><a href="#" className="hover:text-gray-300">Ebooks</a></li>
            </ul>
          </nav>
          <div className="hidden md:flex items-center space-x-4">
            <button className="p-2" onClick={toggleTheme}>
              <FontAwesomeIcon icon={theme === 'dark' ? faSun : faMoon} />
            </button>
            <button className="p-2">
              <FontAwesomeIcon icon={faSearch} />
            </button>
            <button className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600">
              <Link href="/sign-in">Login</Link>
            </button>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <button className="p-2 mx-2">
              <FontAwesomeIcon icon={faSearch} />
            </button>
            <FontAwesomeIcon icon={faBars} />
            <span className="sr-only">Open menu</span>
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="mt-4 md:hidden">
            <nav className="mb-4">
              <ul className="flex flex-col space-y-2">
                <li><a href="#" className="block py-2 hover:text-gray-300">Novels</a></li>
                <li><a href="#" className="block py-2 hover:text-gray-300">Honors</a></li>
                <li><a href="#" className="block py-2 hover:text-gray-300">Treasury</a></li>
                <li><a href="#" className="block py-2 hover:text-gray-300">Ebooks</a></li>
              </ul>
            </nav>
            <div className="flex items-center space-x-4">
              <button className="p-2 rounded-full bg-gray-700 hover:bg-gray-600" onClick={toggleTheme}>
                <FontAwesomeIcon icon={theme === 'dark' ? faSun : faMoon} />
              </button>
              <button className="p-2 rounded-full bg-gray-700 hover:bg-gray-600">
                <FontAwesomeIcon icon={faSearch} />
              </button>
              <button className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600">
                Login
              </button>
            </div>
          </div>
        )}
      </header>

      <div className="container mx-auto px-4 py-4 relative z-20 mt-9">
        <div className="bg-opacity-50 flex flex-col md:flex-row items-center">
          <div className="p-6 max-w-2xl text-center md:text-left md:px-2xl">
            <span className="inline-block px-3 py-2  mb-4 text-sm text-center bg-green-500 rounded-full">
              New Chapters
            </span>
            <PoppinsBoldText fontWeight={900}>
              <p className="font-bold mb-2 text-3 md:text-6xl">An Exiled Mage`s Odyssey</p>
            </PoppinsBoldText>
            <LatoLightText fontSize="1rem md:text-lg" color="#666">
              <p className="mb-6">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s.
              </p>
            </LatoLightText>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <button className="px-6 py-3 text-green-500 bg-white rounded-full hover:bg-green-600 hover:text-white">
                Read Now
              </button>
              <button className="w-12 h-12 p-3 rounded-full border border-white hover:bg-white hover:text-gray-900 flex items-center justify-center">
                <FontAwesomeIcon
                  icon={faHeart}
                  style={{ color: "#e91616" }}
                  size="1x"
                />              </button>
              <button className="w-12 h-12 p-3 rounded-full border border-white hover:bg-white hover:text-gray-900 flex items-center justify-center">
                <FontAwesomeIcon icon={faPlus} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6 relative z-20 ">
        <div className="flex justify-center md:justify-end">
          <div className="w-full md:w-1/2">
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={10}
              slidesPerView={5} // Default value for larger screens
              centeredSlides={false}
              navigation
              autoplay={{ delay: 3000 }}
              breakpoints={{
                320: {
                  slidesPerView: 3, // For mobile screens
                },
                640: {
                  slidesPerView: 4, // For tablets
                },
                1024: {
                  slidesPerView: 5, // For desktops
                },
              }}
              className="relative"
            >
              {slides.map((slide) => (
                <SwiperSlide key={slide.id} >
                  <div className="relative w-full h-32 "> {/* Adjust height as needed */}
                    <Image
                      src={batman}
                      alt={slide.alt}
                      fill
                      style={{ objectFit: 'cover' }}
                      sizes="(max-width: 640px) 90vw, (max-width: 768px) 40vw, 33vw"
                      className="absolute inset-0 rounded-4 border border-black"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6 relative z-20">
        <h2 className="text-2xl font-bold mb-4">Continue Reading</h2>
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={6}
          navigation
          autoplay={{ delay: 3000 }}
          breakpoints={{
            320: { slidesPerView: 2 },
            640: { slidesPerView: 4 },
            1024: { slidesPerView: 6 },
          }}
          className="relative"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id} >
              <div className="relative w-full h-64">
                <Image
                  src={batman}
                  alt={slide.alt}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-lg"
                />
                {/* {slide.tag && (
                  <span className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                    {slide.tag}
                  </span>
                )} */}
              </div>
            </SwiperSlide>
          ))}
          <div className="swiper-button-prev !text-white"></div>
          <div className="swiper-button-next !text-white"></div>
        </Swiper>
      </div>
    </div>
  );
}
