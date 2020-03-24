import React, { Component } from "react";
import card from '../card.png';
import './GameCard.css';

class GameCard extends Component {
    render() {
        return (
            <div className="GameCard">
                <img className="CardBack" alt="" src={card}></img>
            </div>
        );
    }
}

export default GameCard;