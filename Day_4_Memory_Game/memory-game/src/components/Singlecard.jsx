import React from "react";
import "./singlecard.css";
const Singlecard = ({ card, handleChoice, flipped, disabled }) => {
  //handle choices
  const handleClick = (card) => {
    if (!disabled) handleChoice(card);
  };
  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <img src={card.src} alt="cards" className="front" />
        <img
          onClick={() => handleClick(card)}
          src="/img/cover.png"
          alt="cards"
          className="back"
        />
      </div>
    </div>
  );
};

export default Singlecard;
