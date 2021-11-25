import React from "react";
import './style.scss';
import ciri from '../../assets/Nova pasta/Ciri.jpg'
import Button from "../Button";

const DESTINATIONS = [
    {img: ciri, 
     title: 'TITULO',
     text:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. nem iste doloremque laborum obcaecati harum? Officiis?'},
    {img: ciri, 
     title: 'TITULO',
     text:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. nem iste doloremque laborum obcaecati harum? Officiis?'},
    {img: ciri, 
     title: 'TITULO',
     text:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. nem iste doloremque laborum obcaecati harum? Officiis?'},
    {img: ciri, 
     title: 'TITULO',
     text:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. nem iste doloremque laborum obcaecati harum? Officiis?'},
]

const Card = () => {
    return(
        <div className="card__container">
            <img src={DESTINATIONS[0].img} alt="" />
            <div className="card__container-content">
                <h2>{DESTINATIONS[0].title}</h2>
                <p>{DESTINATIONS[0].text}</p>
                <Button></Button>
                {console.log(DESTINATIONS)}
            </div>
        </div>
        
    )
}

export default Card;