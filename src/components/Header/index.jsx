import React from "react";
import "./style.scss";

const Header = () => {
    return (
        <header className="header__container">
            <div className="header__logo--state">
                <a href="#Content">
                    <img
                        src={`https://bn02pap001files.storage.live.com/y4mb11MBgAmdWgG3QL-9BsUlEaB0-lgt1hEt9I4XJToKZ1DhBUdN1gut54je9GlFaMApELKNvqn47ipbYB0z8kZyAje-OwLnAN-DW7GYnlQEtCSIwcwtIp0vzzajpBXtJcnf0_ApJ5PBnFLc5kXqx-_z7J70-GPz5aIqw2V25XSDYFWQJXV3UfdPCIVaFyJ4A81?width=338&height=133&cropmode=none`}
                        alt="Logo"
                    ></img>
                </a>
                <span>/</span>
                <p>Nordeste - BR</p>
            </div>
            <div className="header__logo--logo">
                <span>Desenvolvido:</span>
                <a
                    href="https://www.linkedin.com/in/gustavo-rotta-6447b0163/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img
                        src={`https://bn02pap001files.storage.live.com/y4mcZoEyMSgN0xoPigPOPfdWBw1TsgMbiUhGyli7IWt9g9cMYtqXoh0Yxzo0bViyLHKgdEWffJxzRym9962eRRPVA_Fx2UFeNhQ-_7PpNImg2DqFtbqHBZQzykSL8_ZUuRqXOOyc0AqB9OMSWFEIYPvK_3mMfK5GxiQa0iGLnfC9ODABQZAwSdxCfnwJXBEgevl?width=48&height=45&cropmode=none`}
                        alt="Logo"
                    ></img>
                </a>
            </div>
        </header>
    );
};

export default Header;
