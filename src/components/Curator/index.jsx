import React from "react";
import "./style.scss";

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
                        src={`https://bn02pap001files.storage.live.com/y4mnGBF8n2pr5k3m2jdr3fCS26P4o06xXYmPYDEwehlnA8nXFxijj9TwBVZroYh442C5liEDs8ipwhDsvFNuC26vs4ULro7DmL16LbIxNqwNpb8owzZF3j-VPgHxIZvW2qqsYDYgJc113B6kRW_uNFJ80mOEF5E5swqiwAzq-lVtON_SeMa-H2lLPUugp5bUyAj?width=203&height=203&cropmode=none`}
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
