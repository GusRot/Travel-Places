import { createContext, useState } from "react";
import ciri from "./assets/Nova pasta/Ciri.jpg";

export const DestinationsContext = createContext({});

export function ModalContext(props) {
    const [modalOpen, setModalOpen] = useState(false);
    const Destinations = [
        {
            img: ciri,
            title: "TITULO",
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. nem iste doloremque laborum obcaecati harum? Officiis?",
            filter: "text",
        },
        {
            img: ciri,
            title: "TITULO",
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. nem iste doloremque laborum obcaecati harum? Officiis?",
            filter: "text",
        },
        {
            img: ciri,
            title: "TITULO",
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. nem iste doloremque laborum obcaecati harum? Officiis?",
            filter: "text",
        },
        {
            img: ciri,
            title: "TITULO",
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. nem iste doloremque laborum obcaecati harum? Officiis?",
            filter: "text",
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

    function handleModalOpen() {
        setModalOpen(true);
    }

    function handleModalClose() {
        setModalOpen(false);
    }

    return (
        <DestinationsContext.Provider
            value={{
                modalOpen,
                handleModalOpen,
                handleModalClose,
                Destinations,
            }}
        >
            {props.children}
        </DestinationsContext.Provider>
    );
}
