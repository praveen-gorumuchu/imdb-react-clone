import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { VscArrowSmallLeft, VscArrowSmallRight } from "react-icons/vsc";
import "./swiper-component.scss";
import { SwiperDataConfigModel } from "./swiper-data.model";
import { ButtonModel } from "@/models/button.model";
import { ICONS_MAP } from "@/utils/icons-mappers";

export interface SwiperItem {
  title: string;
  subTitle?: string;
  description?: string;
  image: string;
}

interface SwiperWrapperProps {
  items: SwiperDataConfigModel[];
  className?: string;
  config?: object;
}

const SwiperComponent: React.FC<SwiperWrapperProps> = ({
  items,
  className = "",
  config = {},
}) => {
  const swiperRef = useRef<SwiperClass | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const handleToggle = () => {
    if (!swiperRef.current) return;
    if (isPlaying) swiperRef.current.autoplay.stop();
    else swiperRef.current.autoplay.start();
    setIsPlaying(!isPlaying);
  };

  const handlePrev = () => swiperRef.current?.slidePrev();
  const handleNext = () => swiperRef.current?.slideNext();

  // Update active bullet on slide change
  useEffect(() => {
    const swiper = swiperRef.current;
    if (!swiper) return;

    const updateIndex = () => setActiveIndex(swiper.realIndex);
    swiper.on("slideChange", updateIndex);

    // Initialize activeIndex on mount
    setActiveIndex(swiper.realIndex);

    return () => {
      swiper.off("slideChange", updateIndex);
    };
  }, []);

  return (
    <div className={`swiper-main-container relative w-full ${className}`}>
      <Swiper
        {...config}
        modules={[Autoplay, Navigation]}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        loop
      >
        {items.map((item: SwiperDataConfigModel, index: number) => {
          return (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center justify-center text-center text-white h-[80vh] bg-cover bg-center custom-swiper-slide">
                <img src={item.image} alt="" className="swiper-iimage" />
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="swiper-content">
                  <h1 className="mb-4 text-5xl font-bold">{item.title}</h1>
                  {item.subTitle && (
                    <p className="max-w-xl mx-auto text-lg text-gray-200">
                      {item.subTitle}
                    </p>
                  )}
                  {item?.des && (
                    <p className="max-w-xl mx-auto mt-2 text-gray-300">
                      {item?.des}
                    </p>
                  )}
                  <div className="swiper-slide-buttons">
                    {item?.buttons.map((btn: ButtonModel, idx: number) => {
                      const BtnIcon = btn?.icon ? ICONS_MAP[btn?.icon] : null; 
                      return (
                        <button
                          type="button"
                          className={`mx-2 siwper-cta ${btn?.btnType}`}
                          key={idx}
                        >
                          <span>{BtnIcon && <BtnIcon className="" />}</span>
                          <span>{btn?.btnName}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      {/* Controls wrapper */}
      <div className="flex swiper-controls-wrapper">
        {/* Pagination Bullets */}
        <div className="flex space-x-2 swiper-pagination">
          {items.map((item, i) => (
            <span
              key={i}
              className={`swiper-pagination-bullet ${
                i === activeIndex ? "swiper-pagination-bullet-active" : ""
              }`}
              onClick={() => swiperRef.current?.slideToLoop(i)} // clickable bullets
            >
              <div className="thumbnail-preview">
                <img src={item.image} alt={`Thumbnail ${i + 1}`} />
              </div>
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex space-x-2 custom-buttons">
          <button onClick={handlePrev} className="space-x-2 arrows custom-btn">
            <VscArrowSmallLeft />
          </button>
          <button onClick={handleNext} className="space-x-2 arrows custom-btn">
            <VscArrowSmallRight />
          </button>
          <button
            onClick={handleToggle}
            className="space-x-2 play_pause custom-btn"
          >
            {isPlaying ? (
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 16 16"
                height="18"
                width="18"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M4.5 3H6v10H4.5V3zm7 0v10H10V3h1.5z"></path>
              </svg>
            ) : (
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 16 16"
                height="18"
                width="18"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M3 2.5v11l10-5.5-10-5.5z"></path>
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SwiperComponent;
