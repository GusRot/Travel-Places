import { createContext, useState } from "react";
import bonitoImg2 from "./assets/camping/bonito.jpg";
import bonitoImg from "./assets/camping/bonitoTirolesa.jpg";
import jpImg from "./assets/camping/JPBarraca.jpg";
import jpImg2 from "./assets/camping/JPCamping.jpg";
import caruaruImg from "./assets/paisagens/Caruaru.jpg";
import caruaruImg2 from "./assets/paisagens/Caruaru1.jpg";
import BAImg from "./assets/paisagens/BAFarol.jpg";
import BAImg2 from "./assets/paisagens/BAFarol1.jpg";
import TambabaImg from "./assets/praia/Tambaba.jpg";
import TambabaImg2 from "./assets/praia/Tambaba1.jpg";
import BArestImg from "./assets/restaurante/BA.jpg";
import PErestImg from "./assets/restaurante/PERest.jpg";
import PErestImg1 from "./assets/restaurante/Armenio.jpg";

export const DestinationsContext = createContext({});

export function ModalContext(props) {
    const [modalOpen, setModalOpen] = useState(false);
    const Destinations = [
        {
            img: [bonitoImg, bonitoImg2],
            title: "Cachoeiras Bonito(PE)",
            text: "Camping da Pousada Vale dos Lagos oferece Camping, Hostel e Pousada para estadia. Localizada no coração das melhores cachoeiras da região",
            category: ["Camping", "Paisagens"],
            url: "https://www.google.com/maps/place/Pousada+S%C3%ADtio+Vale+dos+Lagos/@-8.5654294,-35.7357655,15.08z/data=!4m8!3m7!1s0x7aa04b0811bcc7b:0x42e1825e13368ef2!5m2!4m1!1i2!8m2!3d-8.5593108!4d-35.7230115",
            filter: "show",
        },
        {
            img: [jpImg, jpImg2],
            title: "Camping PB",
            text: "A Rota das Trilhas é bem localizada(sul da Paraíba), está entre as melhores praias da região. Otimo convivio com a Natureza",
            category: ["Camping", "Praia"],
            url: "https://www.google.com/maps/place/Camping+Rota+das+Trilhas/@-7.3174725,-34.8062457,15.33z/data=!4m9!1m2!2m1!1sCamping+Rota+das+Trilhas,+Rua+Maria+Lourdes+Carvalho+da+Silva+-+Tabatinga,+Conde+-+PB!3m5!1s0x7acbefce6a93bd9:0xc29e35794caf264a!8m2!3d-7.312952!4d-34.808924!15sClVDYW1waW5nIFJvdGEgZGFzIFRyaWxoYXMsIFJ1YSBNYXJpYSBMb3VyZGVzIENhcnZhbGhvIGRhIFNpbHZhIC0gVGFiYXRpbmdhLCBDb25kZSAtIFBCWlEiT2NhbXBpbmcgcm90YSBkYXMgdHJpbGhhcyBydWEgbWFyaWEgbG91cmRlcyBjYXJ2YWxobyBkYSBzaWx2YSB0YWJhdGluZ2EgY29uZGUgcGKSAQpjYW1wZ3JvdW5kmgEkQ2hkRFNVaE5NRzluUzBWSlEwRm5TVVJ2TlhZeWQzTlJSUkFC",
            filter: "show",
        },
        {
            img: [caruaruImg, caruaruImg2],
            title: "Caruaru(PE)",
            text: "Capital do Forro. Conta com diversas belezas Naturais. Um ponto bastante conhecido e visitado é o Monte Bom Jesus",
            category: ["Paisagem", "Pontos Turisticos"],
            url: "https://www.google.com/maps/place/Morro+do+Bom+Jesus,+Caruaru+-+PE/@-8.2852849,-35.9813887,16z/data=!3m1!4b1!4m5!3m4!1s0x7a98bbdaaa1877b:0x88a8e7ab4df20810!8m2!3d-8.2863353!4d-35.979192",
            filter: "show",
        },
        {
            img: [BAImg, BAImg2],
            title: "Farol da Barra(BA)",
            text: "Local muito bonito, principalmente a vista do mar. Arquitetura e história igualmente incríveis",
            category: ["Praia", "Pontos Turisticos"],
            url: "https://www.google.com/maps/place/Farol+da+Barra+-+Forte+de+Santo+Ant%C3%B4nio+da+Barra/@-13.0095585,-38.5312578,16.33z/data=!4m5!3m4!1s0x716038285844f45:0x123db8b55534402e!8m2!3d-13.0102733!4d-38.5327764",
            filter: "show",
        },
        {
            img: [TambabaImg, TambabaImg2],
            title: "Tambaba PB",
            text: "Famosa por ser a praia do nudismo, porém um parte é acessível da forma tradicional e tem uma beleza impecável",
            category: ["Praia", ""],
            url: "https://www.google.com/maps/place/Praia+de+Tambaba/@-7.3655301,-34.8001312,17z/data=!3m1!4b1!4m5!3m4!1s0x7acbc3f92686687:0xa944c1262c0f4025!8m2!3d-7.3653753!4d-34.7980274",
            filter: "show",
        },
        {
            img: [BArestImg, BArestImg],
            title: "Mercado Modelo(BA)",
            text: "Mercado de artesanato localizado na cidade de Salvador com dois restaurantes ótimos na cobertura com vista para o mar",
            category: ["Restaurante", "Praia"],
            url: "https://www.google.com/maps/place/Mercado+Modelo/@-12.9762143,-38.5146099,15.65z/data=!4m5!3m4!1s0x0:0xb760dfc13018f1dd!8m2!3d-12.9730385!4d-38.5139209",
            filter: "show",
        },
        {
            img: [PErestImg, PErestImg1],
            title: "Tio Armênio",
            text: "A culinária do dia a dia no buffet apurado com especialidades brasileiras em ambiente leve com luz natural.",
            category: ["Restaurante", ""],
            url: "https://tioarmenio.com.br/tioarmenio/",
            filter: "show",
        },
    ];

    const Places = [
        "Todos",
        "Praia",
        "Camping",
        "Restaurante",
        "Pontos Turisticos",
        "Paisagens",
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
