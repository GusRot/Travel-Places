import React from "react";
import "./style.scss";

const Footer = () => {
    return (
        <div className="footer__container">
            <div className="footer__content">
                <h6>
                    PROJETO ELABORADO DURANTE A RDW <span>E.B.A.C</span> 2021
                </h6>
                <p>
                    Design inspirado na imersão com alterações de acordo com a
                    nova ideia de projeto
                </p>
            </div>
            <div className="footer__container-img">
                <img
                    src={`https://bn02pap001files.storage.live.com/y4mh4PQP1qUy8jHBBm-t1PCRbywqb3AC7iI1QH8y7YsWicmkuGTrZIsC2lzb6kfcevsFTYGUhCQl68WI9ghZM3-pUnhdhqvZW_NTtr-L8g5tyhFfeW2xHc-B-ruSdXlmvTratsxRx32dyODpGq2pbzqz_h1Cc1t_I1h8fSI7p9O1XT0eL2nhKnCznx1P78UiF9C?width=20&height=13&cropmode=none`}
                    alt="vectorUp"
                />
            </div>
        </div>
    );
};

export default Footer;
