import { createContext, useState } from "react";

export const DestinationsContext = createContext({});

export function ModalContext(props) {
    const [modalOpen, setModalOpen] = useState(false);
    const [modalObject, setModalObject] = useState({
        img: [
            `https://bn02pap001files.storage.live.com/y4mQnsHp_maoIciS5utaU6jQpfYDOyqebMb9Dql09EbKMh8-vD6_OHXA8VYfjpLpwdMPrJlzmTwtwJyW3igQc1j_xwfQJot1bQtJmEeTWc_1aBZLcMHaWm0Ggb-D6NGxr8FuwjAgtFvFv8RpuRoYa3VDcIHzFGeUKziIX8LmEDagwKNsrA3cQBhCG6O4JKUmUEr?width=960&height=640&cropmode=none`,
            `https://bn02pap001files.storage.live.com/y4m8AGtN9ywkzmDbHygXCx9wU6C_pcpklZ23ch6vrAHLXbmmqbZiWRJ-Fu5zrefESWTSRkRXaXLo-meie9Ut0SANbliTT0eqTrcqkLlukZZpmFd4WgV2Aa3KFrVCPh9Ub1Yhp9nPLUDgO1bjRQ7Q1Yg30C_p-VCMRtCkRZYPyFzFNchNtEoqw3BX6lQLwpP104K?width=3000&height=4000&cropmode=none`,
        ],
        title: "Cachoeiras Bonito(PE)",
        text: "Camping da Pousada Vale dos Lagos oferece Camping, Hostel e Pousada para estadia. Localizada no coração das melhores cachoeiras da região",
        category: ["Camping", "Paisagens"],
        url: "https://www.google.com/maps/place/Pousada+S%C3%ADtio+Vale+dos+Lagos/@-8.5654294,-35.7357655,15.08z/data=!4m8!3m7!1s0x7aa04b0811bcc7b:0x42e1825e13368ef2!5m2!4m1!1i2!8m2!3d-8.5593108!4d-35.7230115",
        filter: "show",
    });
    const [pillRerender, setPillRerender] = useState("Todos");

    const Destinations = [
        {
            img: [
                `https://bn02pap001files.storage.live.com/y4mQnsHp_maoIciS5utaU6jQpfYDOyqebMb9Dql09EbKMh8-vD6_OHXA8VYfjpLpwdMPrJlzmTwtwJyW3igQc1j_xwfQJot1bQtJmEeTWc_1aBZLcMHaWm0Ggb-D6NGxr8FuwjAgtFvFv8RpuRoYa3VDcIHzFGeUKziIX8LmEDagwKNsrA3cQBhCG6O4JKUmUEr?width=960&height=640&cropmode=none`,
                `https://bn02pap001files.storage.live.com/y4m8AGtN9ywkzmDbHygXCx9wU6C_pcpklZ23ch6vrAHLXbmmqbZiWRJ-Fu5zrefESWTSRkRXaXLo-meie9Ut0SANbliTT0eqTrcqkLlukZZpmFd4WgV2Aa3KFrVCPh9Ub1Yhp9nPLUDgO1bjRQ7Q1Yg30C_p-VCMRtCkRZYPyFzFNchNtEoqw3BX6lQLwpP104K?width=3000&height=4000&cropmode=none`,
            ],
            title: "Cachoeiras Bonito(PE)",
            text: "Camping da Pousada Vale dos Lagos oferece Camping, Hostel e Pousada para estadia. Localizada no coração das melhores cachoeiras da região.",
            modal: "",
            category: ["Camping", "Paisagens"],
            url: "https://www.google.com/maps/place/Pousada+S%C3%ADtio+Vale+dos+Lagos/@-8.5654294,-35.7357655,15.08z/data=!4m8!3m7!1s0x7aa04b0811bcc7b:0x42e1825e13368ef2!5m2!4m1!1i2!8m2!3d-8.5593108!4d-35.7230115",
            filter: "show",
        },
        {
            img: [
                `https://bn02pap001files.storage.live.com/y4mf7ENy1NYMdlQsJKzEecDlBSGWHdP22eu9hPBI0rQwWt7wuMOy1s8JnG1-E08XupG0drGZAXbzN3zcqS_8mt1l8Qz5-IWKjhk7ajS2C1JSEwUfCl79f--EaI2cR70KH-ZKZIoPJPoEjOqxtkdiYIjaFhAavNOuOStgSYEiDJeYqTWDAob9D7wliadS6IyqGJ6?width=3000&height=4000&cropmode=none`,
                `https://bn02pap001files.storage.live.com/y4mWioewCVDU6hv0Yz5Csv1DXPxIquYikA1Z2udApKB-ea3c0e7M-vMAx1M317Bu1Sex_6ZRbew7jCHt_qvaXzPcsI-kct3FzM8H7zYzkY3cwwlQt4_qqyzJH2L2CJcQXLI6Q_EPMkf7AkNv3ecKBjBObyHwZzW81-IyxYPcMOA1qALAtBQTFNGuTUSzW9oA8V0?width=3000&height=4000&cropmode=none`,
            ],
            title: "Camping PB",
            text: "A Rota das Trilhas é bem localizada(sul da Paraíba), está entre as melhores praias da região. Otimo convivio com a Natureza.",
            modal: "",
            category: ["Camping", "Praia"],
            url: "https://www.google.com/maps/place/Camping+Rota+das+Trilhas/@-7.3174725,-34.8062457,15.33z/data=!4m9!1m2!2m1!1sCamping+Rota+das+Trilhas,+Rua+Maria+Lourdes+Carvalho+da+Silva+-+Tabatinga,+Conde+-+PB!3m5!1s0x7acbefce6a93bd9:0xc29e35794caf264a!8m2!3d-7.312952!4d-34.808924!15sClVDYW1waW5nIFJvdGEgZGFzIFRyaWxoYXMsIFJ1YSBNYXJpYSBMb3VyZGVzIENhcnZhbGhvIGRhIFNpbHZhIC0gVGFiYXRpbmdhLCBDb25kZSAtIFBCWlEiT2NhbXBpbmcgcm90YSBkYXMgdHJpbGhhcyBydWEgbWFyaWEgbG91cmRlcyBjYXJ2YWxobyBkYSBzaWx2YSB0YWJhdGluZ2EgY29uZGUgcGKSAQpjYW1wZ3JvdW5kmgEkQ2hkRFNVaE5NRzluUzBWSlEwRm5TVVJ2TlhZeWQzTlJSUkFC",
            filter: "show",
        },
        {
            img: [
                `https://bn02pap001files.storage.live.com/y4m_9aZmtPWZg3QYn-JeW_nhMjf_O5XbaB_kpkRhJr4MPh_CI1YeUEWK0yHOOgrWWTEYWFD21C3hiuZYqj2qcuVzKkmUD3TImN1rn3Z6RcABlaSfpEc9rhKuWYeqQQF7kQBj6RN22f4Ku6w7tqYmw4UKPYwfmepfBZdLwjQURmTD0vXvryBuVIn6wNiGxVFodoK?width=4160&height=3120&cropmode=none`,
                `https://bn02pap001files.storage.live.com/y4m6Kanok7OCEaR-tcviBKfaQ-ZpWY4cNgj5kfrIpGAGahZXaQ7NTG2U64Gqfpf8zyYBySdSe1p_MR56vkF9Di4rLC5-Vs90VKCGxyiRrOW-cUctP7EmejMBVjiFitll5mcGEbbMaOmXH2ADLiFWzywPK3LoG3y6HZSfjW5pB9rxxg5MsYD5ZYIA1ic1aEKQJ5K?width=2910&height=3090&cropmode=none`,
            ],
            title: "Caruaru(PE)",
            text: "Capital do Forro. Conta com diversas belezas Naturais. Um ponto bastante conhecido e visitado é o Monte Bom Jesus.",
            modal: "",
            category: ["Paisagem", "Pontos Turisticos"],
            url: "https://www.google.com/maps/place/Morro+do+Bom+Jesus,+Caruaru+-+PE/@-8.2852849,-35.9813887,16z/data=!3m1!4b1!4m5!3m4!1s0x7a98bbdaaa1877b:0x88a8e7ab4df20810!8m2!3d-8.2863353!4d-35.979192",
            filter: "show",
        },
        {
            img: [
                `https://bn02pap001files.storage.live.com/y4mcHp2QPajQRPhj5dgRLYUkivzV2anM8AKNzHdku40cxnS7v0xBLIrzbz5Qjb5adhhFpm10ntCuk44MTs08B42YQSYamrzjy7EjQzwpp4TPOB-_VJ6fLVS3-nzGgC9wbIenc_zXiT2Tbj2MPKgm54dVnlmGrdc4lHI3mNcb0WK8GPUyqOzO6YhZhq1KzYG5s_8?width=3403&height=1408&cropmode=none`,
                `https://bn02pap001files.storage.live.com/y4mGINuIr4hD1vBgtqbpGGpF2k4yS0HdREaHsbwDi5QK1IjdHyuXTm4BGg0xjh0PkFxKWIJhwmczL0Xkn7hW1sJqZGhz63igjAP4x0SfWEZcN5STYcgmhg8JKkVkPoP4HvRBSpcMbRTpoNiA6MMIDrrm0fE7UrGEi0ZiF4yqV4IJIcbKiP7LOo4-EBNgisbKBEv?width=780&height=1040&cropmode=none`,
            ],
            title: "Farol da Barra(BA)",
            text: "Local muito bonito, principalmente a vista do mar. Arquitetura e história igualmente incríveis.",
            modal: "",
            category: ["Praia", "Pontos Turisticos"],
            url: "https://www.google.com/maps/place/Farol+da+Barra+-+Forte+de+Santo+Ant%C3%B4nio+da+Barra/@-13.0095585,-38.5312578,16.33z/data=!4m5!3m4!1s0x716038285844f45:0x123db8b55534402e!8m2!3d-13.0102733!4d-38.5327764",
            filter: "show",
        },
        {
            img: [
                `https://bn02pap001files.storage.live.com/y4mcOKX7JTfnyyPzV9OFSpGN2FQjJJQg4orEjxONevB6nX5GVzOLDqeifr5azbUiFELaw2ggV19C5jhrxEeaSYq_d3HB9IJQL4rZyrcZmi2He96dSWcxbAEJ5jO9N8KrDlnFnxZir9viD8FANc0pXonKIHANMGtSfuIdU4tfTlQdexw84ncLiQy_GPF5Q-IPan0?width=1903&height=2166&cropmode=none`,
                `https://bn02pap001files.storage.live.com/y4mGYXE4ZvUfsNX4g_JUKPUKOSLGPCtrlUTRse20R9AYA0gg18y0-8nyOkCtH7TdpChxA67OIQhSIjn0NipjzqPdZ41J-qvmrEPbnZM5hCtyPH-F8_M39q2GqMd5EDvvHqAFDIhNB0hNblCgp1jx9JG_rXJkWf7lC1k6ypI8J2k_W52mODqzdb5JC4b6lKDqfgo?width=4160&height=2340&cropmode=none`,
            ],
            title: "Tambaba PB",
            text: "Famosa por ser a praia do nudismo, porém um parte é acessível da forma tradicional e tem uma beleza impecável.",
            modal: "",
            category: ["Praia", ""],
            url: "https://www.google.com/maps/place/Praia+de+Tambaba/@-7.3655301,-34.8001312,17z/data=!3m1!4b1!4m5!3m4!1s0x7acbc3f92686687:0xa944c1262c0f4025!8m2!3d-7.3653753!4d-34.7980274",
            filter: "show",
        },
        {
            img: [
                `https://bn02pap001files.storage.live.com/y4mH-cz30BbUct96kTojBvtPFdh9beaeshK55xZ_GMCdZyioKBtbziLyMk92BME_WpthR-Ap4heYp4PX3--74M7ymO1iVo8tFNDKUubu-ordr-dhLS1qhl-l411XSlcmnACFbpkiRIesmY6fWJcjGSniAm2qcN6h5u8vzOtV-zxVnRvh2NKbaCK4zfBAZYfM5eh?width=3682&height=3120&cropmode=none`,
                `https://bn02pap001files.storage.live.com/y4mD7ejxnOLkwBPWFL0f_nBrzUb9jBI-fngw8Hv8EdnElBfChoMKQ1dLjYoR28dwWEEaDn7Wngn3dz_dtksq9ygXJTklfENOVNbamiHdO9H1_RvoeSmdd-YJm2YSPFgtFVnk9-jV4HHw9gyeoafkbIlY--_ni2iMBTXgR6pL-CYRA2exoEPpX6GRH7a5M2w7LxE?width=800&height=486&cropmode=none`,
            ],
            title: "Mercado Modelo(BA)",
            text: "Mercado de artesanato localizado na cidade de Salvador com dois restaurantes ótimos na cobertura com vista para o mar.",
            modal: "",
            category: ["Restaurante", "Praia"],
            url: "https://www.google.com/maps/place/Mercado+Modelo/@-12.9762143,-38.5146099,15.65z/data=!4m5!3m4!1s0x0:0xb760dfc13018f1dd!8m2!3d-12.9730385!4d-38.5139209",
            filter: "show",
        },
        {
            img: [
                `https://bn02pap001files.storage.live.com/y4meurqWd7UUPNJyTp35-RNsi_Mk-Xp5N7IkYRdpmbSHLsPdGHnrbC_wijlD-FpDa1br7D5RTuiO_ZrVw1RyO9ICqSI-GIK_ASPugLUNadnyPCgJbs6HakwFqBooZxmdp4vhp2EghrtRpl5lGBppHV6_fEt8Sycm8FqJdYSQMRILLfAGd9_HQesoIpvU5HJj18o?width=3000&height=4000&cropmode=none`,
                `https://bn02pap001files.storage.live.com/y4m6GHKanlhHNCqJ9kFsBnUPHAi35CWblRxynxBRTfGXZP4oj0Yt86sCblIhEHar4OBQgrgINkoS3d29ZorTiXVY5IEzzUNmWDCy23U1mGN5QEDAMRWQkvauG6LfDX7NtH5mQPA6jrRh3QgBWpDb4SX2tt7fh3v3uuuhOkbizcjdthhsLo8dmoCyReCKonR7O1T?width=600&height=600&cropmode=none`,
            ],
            title: "Tio Armênio",
            text: "A culinária do dia a dia no buffet apurado com especialidades brasileiras em ambiente leve com luz natural.",
            modal: "",
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

    function handleModalOpen(index) {
        setModalOpen(true);
        setModalObject(Destinations[index]);
    }

    function handleModalClose() {
        setModalOpen(false);
    }

    function pillRerenderCards(selectedPill) {
        setPillRerender(selectedPill);
    }

    return (
        <DestinationsContext.Provider
            value={{
                modalOpen,
                handleModalOpen,
                handleModalClose,
                Destinations,
                Places,
                pillRerenderCards,
                pillRerender,
                modalObject,
            }}
        >
            {props.children}
        </DestinationsContext.Provider>
    );
}
