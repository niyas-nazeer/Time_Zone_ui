import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./FeatureCarousel.css";
import { Link } from "react-router-dom";

const features = [
  {
    title: "Calendar Watches",
    description:
      "Imagine a world where you never have to adjust your calendar manually. Well, that world is closer than you think! Explore the world of perpetual Calendar Watches, where timekeeping meets precision at its finest.",
    img: "/assets/feature-watches/calenderWatches.jpg",
    slug: "calendar-watches",
  },
  {
    title: "Chronograph Watches",
    description:
      "Here elegance meets performance. More than just a timepiece, it’s your companion in every race, every challenge, every moment that matters.",
    img: "/assets/feature-watches/chronograph watch.jpg",
    slug: "chronograph-watches",
  },
  {
    title: "Diver's Watches",
    description:
      "Diver’s Watches combine strength, precision, and style. With exceptional water resistance and bold design, they’re made to perform under pressure.",
    img: "/assets/feature-watches/divers watches.jpg",
    slug: "diver's-watches",
  },
  {
    title: "Skeleton Watches",
    description:
      "Designed to reveal the intricate gears and craftsmanship within, these watches let you see the art of watchmaking at work. A perfect blend of elegance and engineering.",
    img: "/assets/feature-watches/skeleton watches.jpg",
    slug: "skeleton-watches",
  },
  {
    title: "Smart Watches",
    description:
      "Combining modern technology with sleek design, they keep track of your health, notifications, and daily goals—all from your wrist. Smart, stylish, and made to move with you every day.",
    img: "/assets/feature-watches/smart watches.png",
    slug: "smart-watches",
  },
];

const FeatureCarousel = () => {
  return (
    <section className="feature-carousel-section">
      <Swiper
        modules={[Navigation]}
        navigation
        grabCursor={true}
        spaceBetween={50}
        slidesPerView={1}
        className="feature-carousel"
      >
        {features.map((item, index) => (
          <SwiperSlide key={index} className="feature-slide-container">
            <div className="feature-slide">
              {/* Left Side: Image */}
              <div className="feature-img-wrapper">
                <img src={item.img} alt={item.title} className="feature-img" />
              </div>

              {/* Right Side: Text */}
              <div className="feature-content">
                <p className="feature-label">FEATURED</p>
                <h2 className="feature-title">{item.title}</h2>
                <p className="feature-description">{item.description}</p>
                <Link to={`/features/${item.slug}`}>
                  <button className="explore-btn">EXPLORE</button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default FeatureCarousel;
