import "./SingleCard.css"
import React,{useState} from 'react'

export default function SingleCard({ card, handleChoice }) {
const handleClick=()=> {
    handleChoice(card)
    console.log(card)
}
   
    return (
        
        <div className="card">
            <div>
                <img className="front" src={card.src} alt="card front" />
                <img
                    className="back"
                    src="/img/cover.png"
                     onClick={handleClick}
                    alt="card back"
 
                    />
            </div>
        </div>
    )
}
