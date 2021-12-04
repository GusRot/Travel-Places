import React, { useContext, useEffect, useState } from "react";
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
    const { pillRerender } = useContext(DestinationsContext);
    const { Destinations } = useContext(DestinationsContext);
    const [render, setRender] = useState(0);
    const [test, setTest] = useState(0);
    const [destinations, setDestinations] = useState([]);

    useEffect(() => {
        for (let i = 0; i < Destinations.length; i++) {
            if (
                Destinations[i].category[0] !== pillRerender &&
                pillRerender !== "Todos" &&
                Destinations[i].category[1] !== pillRerender
            ) {
                Destinations[i].filter = "none";
            } else {
                Destinations[i].filter = "show";
            }
        }
        setTest(0);
        setRender(Math.random());
    }, [pillRerender, Destinations]);

    useEffect(() => {
        setDestinations(Destinations);
        setTest(1);
    }, [render, test, Destinations]);

    return (
        <Swiper
            className={`swiper-container ${
                modalOpen ? "swiper-container-active" : ""
            }`}
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
            {destinations.map((destination, index) => {
                if (destination.filter === "show") {
                    return (
                        <SwiperSlide key={index + "heuf"}>
                            <Card DESTINATIONS={destination} index={index} />
                        </SwiperSlide>
                    );
                } else {
                    return <div key={index + "heu"}></div>;
                }
            })}
        </Swiper>
    );
}

export default Slider;
