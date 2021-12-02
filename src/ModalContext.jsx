import { createContext, useState } from "react";
import ciri from "./assets/Nova pasta/Ciri.jpg";

export const DestinationsContext = createContext({});

export function ModalContext(props) {
    const [modalOpen, setModalOpen] = useState(false);
    const Destinations = [
        {
            img: ciri,
            title: "Camping",
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. nem iste doloremque laborum obcaecati harum? Officiis?",
            category: "Camping",
            filter: "show",
        },
        {
            img: ciri,
            title: "Camping",
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. nem iste doloremque laborum obcaecati harum? Officiis?",
            category: "Camping",
            filter: "show",
        },
        {
            img: ciri,
            title: "Restaurante",
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. nem iste doloremque laborum obcaecati harum? Officiis?",
            category: "Restaurante",
            filter: "show",
        },
        {
            img: ciri,
            title: "Restaurante",
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. nem iste doloremque laborum obcaecati harum? Officiis?",
            category: "Restaurante",
            filter: "show",
        },
        {
            img: ciri,
            title: "Parque",
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. nem iste doloremque laborum obcaecati harum? Officiis?",
            category: "Parque",
            filter: "show",
        },
        {
            img: ciri,
            title: "Loja",
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. nem iste doloremque laborum obcaecati harum? Officiis?",
            category: "Loja",
            filter: "show",
        },
    ];

    const Places = [
        "Todos",
        "Praca",
        "Parque",
        "Camping",
        "Restaurante",
        "Pontos Turisticos",
        "Loja",
        "Essenciais",
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
                Places,
            }}
        >
            {props.children}
        </DestinationsContext.Provider>
    );
}
