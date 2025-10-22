import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { VscArrowSmallLeft, VscArrowSmallRight } from "react-icons/vsc";
import "./swiper-component.scss";
const SwiperComponent = ({ items, className = "", config = {}, }) => {
    const swiperRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);
    const handleToggle = () => {
        if (!swiperRef.current)
            return;
        if (isPlaying)
            swiperRef.current.autoplay.stop();
        else
            swiperRef.current.autoplay.start();
        setIsPlaying(!isPlaying);
    };
    const handlePrev = () => swiperRef.current?.slidePrev();
    const handleNext = () => swiperRef.current?.slideNext();
    // Update active bullet on slide change
    useEffect(() => {
        const swiper = swiperRef.current;
        if (!swiper)
            return;
        const updateIndex = () => setActiveIndex(swiper.realIndex);
        swiper.on("slideChange", updateIndex);
        // Initialize activeIndex on mount
        setActiveIndex(swiper.realIndex);
        return () => {
            swiper.off("slideChange", updateIndex);
        };
    }, []);
    return (_jsxs("div", { className: `swiper-main-container relative w-full ${className}`, children: [_jsx(Swiper, { ...config, modules: [Autoplay, Navigation], onSwiper: (swiper) => (swiperRef.current = swiper), loop: true, children: items.map((item, index) => (_jsx(SwiperSlide, { children: _jsxs("div", { className: "flex flex-col items-center justify-center text-center text-white h-[80vh] bg-cover bg-center custom-swiper-slide", children: [_jsx("img", { src: item.image, alt: "", className: "swiper-iimage" }), _jsx("div", { className: "absolute inset-0 bg-black/50" }), _jsxs("div", { className: "swiper-content", children: [_jsx("h1", { className: "mb-4 text-5xl font-bold", children: item.title }), item.subTitle && (_jsx("p", { className: "max-w-xl mx-auto text-lg text-gray-200", children: item.subTitle })), item?.des && (_jsx("p", { className: "max-w-xl mx-auto mt-2 text-gray-300", children: item?.des })), _jsx("div", { className: "swiper-slide-buttons", children: item?.buttons.map((btn, idx) => (_jsxs("button", { type: "button", className: `mx-2 siwper-cta ${btn?.btnType}`, children: [_jsx("span", { children: btn?.icon }), _jsx("span", { children: btn?.btnName })] }, idx))) })] })] }) }, index))) }), _jsxs("div", { className: "flex swiper-controls-wrapper", children: [_jsx("div", { className: "flex space-x-2 swiper-pagination", children: items.map((item, i) => (_jsx("span", { className: `swiper-pagination-bullet ${i === activeIndex ? "swiper-pagination-bullet-active" : ""}`, onClick: () => swiperRef.current?.slideToLoop(i), children: _jsx("div", { className: "thumbnail-preview", children: _jsx("img", { src: item.image, alt: `Thumbnail ${i + 1}` }) }) }, i))) }), _jsxs("div", { className: "flex space-x-2 custom-buttons", children: [_jsx("button", { onClick: handlePrev, className: "space-x-2 arrows custom-btn", children: _jsx(VscArrowSmallLeft, {}) }), _jsx("button", { onClick: handleNext, className: "space-x-2 arrows custom-btn", children: _jsx(VscArrowSmallRight, {}) }), _jsx("button", { onClick: handleToggle, className: "space-x-2 play_pause custom-btn", children: isPlaying ? (_jsx("svg", { stroke: "currentColor", fill: "currentColor", strokeWidth: "0", viewBox: "0 0 16 16", height: "18", width: "18", xmlns: "http://www.w3.org/2000/svg", children: _jsx("path", { d: "M4.5 3H6v10H4.5V3zm7 0v10H10V3h1.5z" }) })) : (_jsx("svg", { stroke: "currentColor", fill: "currentColor", strokeWidth: "0", viewBox: "0 0 16 16", height: "18", width: "18", xmlns: "http://www.w3.org/2000/svg", children: _jsx("path", { d: "M3 2.5v11l10-5.5-10-5.5z" }) })) })] })] })] }));
};
export default SwiperComponent;
