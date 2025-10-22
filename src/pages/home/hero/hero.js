import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Loading from "@/components/loading/loading";
import { fetchTrendingMovies } from "@/services/movieService";
import { useEffect, useState } from "react";
import SwiperComponent from "@/components/swiper/swiper-component";
import { HeroSwiperConfig } from "@/utils/swiper.config";
import { NumberConstant } from "@/constants/Numbers.constant";
import { API_ERROR, StringConstant } from "@/constants/string-constant";
import { ButtonTypeEnum } from "@/models/button.model";
import { FiPlus } from "react-icons/fi";
import { env } from "@/config/env";
import './hero.scss';
export default function Hero() {
    const [heroData, setHeroData] = useState([]);
    const [loading, setLoading] = useState(true);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [_isError, setError] = useState("");
    useEffect(() => {
        const getTrendingMovieData = async () => {
            const { data, loading, error } = await fetchTrendingMovies();
            setLoading(loading);
            setSwiperData(data);
            setError(error || API_ERROR.GENERIC_ERROR);
        };
        getTrendingMovieData();
    }, []);
    function setSwiperData(data) {
        const heroSwiperData = [];
        const movies = data?.results?.slice(NumberConstant.ZERO, NumberConstant.FIVE);
        movies?.forEach((movie) => {
            const maxLength = NumberConstant.ONE * NumberConstant.HUNDRED;
            const overviewText = movie?.overview || "";
            const swiperList = {
                title: movie?.title,
                subTitle: overviewText.length > maxLength
                    ? overviewText.slice(0, maxLength) + "…"
                    : overviewText,
                image: `${env.imdbImgUrl}${movie?.backdrop_path}`,
                buttons: [
                    {
                        btnName: StringConstant.WATCH_NOW,
                        btnType: ButtonTypeEnum.PRIMARY,
                    },
                    {
                        btnName: StringConstant.WATCH_LIST,
                        btnType: ButtonTypeEnum.SECONDARY_OUTLINE,
                        icon: _jsx(FiPlus, {}),
                    },
                ],
            };
            heroSwiperData.push(swiperList);
        });
        setHeroData(heroSwiperData);
    }
    return loading ? (_jsx(Loading, {})) : (_jsxs("div", { className: "relative h-screen hero-swiper", children: [_jsx("div", { className: "header-blur" }), _jsx(SwiperComponent, { items: heroData, config: HeroSwiperConfig, className: '' })] }));
}
