import React from "react";
import "./style.scss";
import gustavoImg from "../../assets/perfil.png";

const Curator = () => {
    const telefone = 558197359190;
    const encodedText = encodeURIComponent(
        `Olá, estou entrando em contato através do seu site de viagens! Tudo bom?`
    );
    const urlWhatsapp = `https://wa.me/${telefone}?text=${encodedText}`;

    return (
        <div className="curator__container">
            <div className="curator__content">
                <a
                    href="https://github.com/GusRot"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img
                        src={gustavoImg}
                        alt="Imagem de Gustavo com link para o GitHub"
                    />
                </a>
                <div className="curator__content-flex">
                    <h3>
                        Gustavo
                        <a
                            href="https://github.com/GusRot"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Dev Front-End
                        </a>
                    </h3>
                    <p>
                        O Brasil é gigantesco e tem muitas belezas, com certeza
                        você conhece outros lugares maravilhosos e te convido a{" "}
                        <a href={urlWhatsapp} target="_blank" rel="noreferrer">
                            me mandar sugestôes
                        </a>
                        , pois ter planos para viagens nunca é demais!
                    </p>
                    <p>
                        Estas foram experiências vividas por mim, serão
                        experiências completamente diferentes para você, te
                        convido também a me{" "}
                        <a href={urlWhatsapp} target="_blank" rel="noreferrer">
                            contar como foi sua experiência
                        </a>
                        , eu amo conversar de viagens, teremos bastante coisa
                        para conversar :D
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Curator;
