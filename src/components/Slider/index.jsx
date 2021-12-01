import React from "react";
import Card from "../Card";
import ciri from "../../assets/Nova pasta/Ciri.jpg";
import SwiperCore, { Navigation, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

SwiperCore.use([Navigation, Scrollbar, A11y]);

const Destinations = [
    {
        img: ciri,
        title: "TITULO",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. nem iste doloremque laborum obcaecati harum? Officiis?",
    },
    {
        img: ciri,
        title: "TITULO",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. nem iste doloremque laborum obcaecati harum? Officiis?",
    },
    {
        img: ciri,
        title: "TITULO",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. nem iste doloremque laborum obcaecati harum? Officiis?",
    },
    {
        img: ciri,
        title: "TITULO",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. nem iste doloremque laborum obcaecati harum? Officiis?",
    },
    {
        img: ciri,
        title: "TITULO",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. nem iste doloremque laborum obcaecati harum? Officiis?",
    },
    {
        img: ciri,
        title: "TITULO",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. nem iste doloremque laborum obcaecati harum? Officiis?",
    },
];

function Slider() {
    return (
        <Swiper
            modules={[Navigation, Scrollbar, A11y]}
            navigation={{ clickable: true }}
            scrollbar={{ draggable: true }}
            slidesPerView={1}
            breakpoints={{
                600: {
                    slidesPerView: 2,
                },
                900: {
                    slidesPerView: 3,
                },
                1200: {
                    slidesPerView: 4,
                },
            }}
        >
            {Destinations.map((Destinations, index) => (
                <SwiperSlide key={index + "sdsd"}>
                    <Card DESTINATIONS={Destinations} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

export default Slider;
