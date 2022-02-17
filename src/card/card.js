import React from "react";
import { FaPython } from "react-icons/fa";

import "./card.css";
function Card(props) {
  return (
    <div>
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">{props.icon}</div>
          <div class="flip-card-back">
            <h1>{props.language}</h1>
            <p>{props.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Card;
