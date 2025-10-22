import { Autoplay, Navigation } from "swiper/modules";
import { SwiperOptions } from "swiper/types";

export const HeroSwiperConfig: SwiperOptions = {
  modules: [Autoplay, Navigation], // no Pagination module
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: false, // disable Swiper-generated bullets
  navigation: false, // using custom prev/next buttons
  loop: true,
};
