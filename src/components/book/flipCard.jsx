import React, { useState } from "react";
import "./flipCard.css";

const Card = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className={`card ${isFlipped ? "is-flipped" : ""}`}
      onClick={handleClick}
    >
      <div className="card-inner">
        <div className="card-front">
          <h2>Front</h2>
        </div>
        <div className="card-back">
          <h2>Back</h2>
        </div>
      </div>
    </div>
  );
};

export default Card;
