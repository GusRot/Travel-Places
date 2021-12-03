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
    const { rerender } = useContext(DestinationsContext);
    const { Destinations } = useContext(DestinationsContext);
    const [destinations, setDestinations] = useState([]);
    const [render, setRender] = useState(0);
    const [test, setTest] = useState(0);

    useEffect(() => {
        callRender();
        setRender(Math.random());
    }, [rerender]);

    function callRender() {
        for (let i = 0; i < Destinations.length; i++) {
            if (
                Destinations[i].category[0] !== rerender &&
                rerender !== "Todos" &&
                Destinations[i].category[1] !== rerender
            ) {
                Destinations[i].filter = "none";
            } else {
                Destinations[i].filter = "show";
            }
        }
        setTest(0);
    }

    useEffect(() => {
        console.log(4);
        setTest(1);
        setDestinations(Destinations);
        console.log(destinations);
    }, [render, test]);

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
            {Destinations.map((destinations, index) => {
                if (destinations.filter === "show") {
                    return (
                        <SwiperSlide>
                            <Card
                                DESTINATIONS={destinations}
                                key={rerender + index}
                            />
                        </SwiperSlide>
                    );
                } else {
                    return <div></div>;
                }
            })}
        </Swiper>
    );
}

export default Slider;
