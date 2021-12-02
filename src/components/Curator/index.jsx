import React from "react";
import "./style.scss";
import gustavoImg from "../../assets/perfil.png";

const Curator = () => {
    return (
        <div className="curator__container">
            <div className="curator__content">
                <a href="#" target="_blank">
                    <img
                        src={gustavoImg}
                        alt="Imagem de Gustavo com link para o GitHub"
                    />
                </a>
                <div className="curator__content-flex">
                    <h3>
                        Gustavo
                        <a href="https://github.com/GusRot" target="_blank">
                            Dev Front-End
                        </a>
                    </h3>
                    <p>
                        O Brasil é gigantesco e tem muitas belezas, com certeza
                        você conhece outros lugares maravilhosos e te convido a{" "}
                        <a href="#" target="_blank">
                            me mandar sugestôes
                        </a>
                        , pois ter planos para viagens nunca é demais!
                    </p>
                    <p>
                        Estas foram experiências vividas por mim, serão
                        experiências completamente diferentes para você, te
                        convido também a me{" "}
                        <a href="#">contar como foi sua experiência</a>, eu amo
                        conversar de viagens, teremos bastante coisa para
                        conversar :D
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Curator;
