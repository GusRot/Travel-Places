import React from "react";
import ReactDOM from "react-dom";
import "./styles/global.scss";
import Header from "./components/Header";
import Home from "./pages/Home";
import Curator from "./components/Curator";
import Obs from "./components/Obs";
import Footer from "./components/Footer";
import Places from "./components/Places";
import { ModalContext } from "./ModalContext";

ReactDOM.render(
    <React.StrictMode>
        <header>
            <Header />
        </header>
        <main>
            <ModalContext>
                <Home />
                <Curator />
                <Places />
            </ModalContext>
        </main>
        <footer>
            <Obs />
            <Footer />
        </footer>
    </React.StrictMode>,
    document.getElementById("root")
);
