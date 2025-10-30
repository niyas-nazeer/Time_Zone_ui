import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules'; 
import 'swiper/css';
import 'swiper/css/navigation';
import './BrandsCarousel.css';
import { Link } from 'react-router-dom';
const brands = [
  { name: 'Amazfit', img: '/assets/brand-adds/amazfit add.jpg', slug: 'amazfit' },
  { name: 'Cassio', img: '/assets/brand-adds/casio add.jpg', slug: 'casio' },
  { name: 'Citizen', img: '/assets/brand-adds/citizen add.jpg', slug: 'citizen' },
  { name: 'Diesel', img: '/assets/brand-adds/diesel add.jpg', slug: 'diesel' },
  { name: 'Fossil', img: '/assets/brand-adds/fossil add.jpg', slug: 'fossil' },
  { name: 'G-shock', img: '/assets/brand-adds/gshock add.jpg', slug: 'gshock' },
  { name: 'Noise', img: '/assets/brand-adds/noise add.jpg', slug: 'noise' },
  { name: 'Police', img: '/assets/brand-adds/police add.jpg', slug: 'police' },
  { name: 'Fastrack', img: '/assets/brand-adds/fastrack add.jpg', slug: 'fastrack' },
  { name: 'Sonata', img: '/assets/brand-adds/sonata add.jpg', slug: 'sonata' },
  { name: 'Timex', img: '/assets/brand-adds/timex add.jpg', slug: 'timex' },
  { name: 'Titan', img: '/assets/brand-adds/titan add.jpg', slug: 'titan' },
];

const BrandsCarousel = () => {
  return (
    <section className="brands-section">
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView="auto"
        navigation
        grabCursor={true}
        className="brands-swiper"
      >
        {brands.map((b, i) => (
          <SwiperSlide key={i} className="brand-slide">
            <Link to={`/brands/${b.slug}`} className="brand-link">
              <img src={b.img} alt={b.name} className="brand-img" />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default BrandsCarousel;
