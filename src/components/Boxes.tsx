import React from "react";
import { useState, useEffect } from "react";
// / style="width: 176px; height: 176px; margin: 2px; background-color: rgb(125, 127, 147);
const Boxes = () => {
  const [stage, setStage] = useState(1);

  const clicks = () => {
    setStage((stage) => stage + 1);
    setCards(Math.pow(Math.round((stage + 1 + 0.5) / 2) + 1, 2));
  };
  const [cards, setCards] = useState(4);

  return (
    <div>
      <p>stage:{stage}</p>
      <button onClick={clicks}>
        {Math.pow(Math.round((stage + 0.5) / 2) + 1, 2)}
      </button>

      <div style={{ width: "250px" }}>
        {[...Array(cards)].map((n, index) => {
          return (
            <div
              style={{
                display: "inline-block",
                width: "100px",
                height: "100px",
                backgroundColor: "red",
                margin: "10px",
              }}
            ></div>
          );
        })}
      </div>
    </div>
  );
};
export default Boxes;
