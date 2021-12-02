import React, { useContext } from "react";
import Card from "../Card";
import SwiperCore, {
    Navigation,
    Scrollbar,
    A11y,
    Autoplay,
    Keyboard,
    Mousewheel,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "./style.scss";
import { DestinationsContext } from "../../ModalContext";

SwiperCore.use([Navigation, Scrollbar, A11y, Autoplay, Keyboard, Mousewheel]);

function Slider() {
    const { modalOpen } = useContext(DestinationsContext);
    const { Destinations } = useContext(DestinationsContext);

    return (
        <Swiper
            className={`swiper-container ${
                modalOpen ? "swiper-container-active" : ""
            }`}
            loop={true}
            mousewheel={true}
            keyboard={true}
            modules={[Navigation, Scrollbar, A11y]}
            navigation={{ clickable: true }}
            scrollbar={{ draggable: true }}
            slidesPerView={1}
            autoplay={{
                delay: 10000,
                disableOnInteraction: false,
            }}
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
