import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
// / style="width: 176px; height: 176px; margin: 2px; background-color: rgb(125, 127, 147);
interface IBox {
  num: number;
  diff: number;
  current: number;
  onClick: any;
}

const Box = styled.div<IBox>`
  background: ${(props) => (props.current === props.diff ? "red" : "black")};
  width: ${(props) => props.num}px;
  height: ${(props) => props.num}px;
  display: inline-block;
  margin: 2px;
`;

const Boxes = () => {
  const [stage, setStage] = useState(1);
  const [cards, setCards] = useState(4);
  const [boxWidth, setBoxWidth] = useState(176);
  const [ans, setAns] = useState(0);
  const clicks = () => {
    setStage((stage) => stage + 1);
    setCards(Math.pow(Math.round((stage + 1 + 0.5) / 2) + 1, 2));
  };
  useEffect(() => {
    setBoxWidth(360 / Math.sqrt(cards) - 4);
    setAns(Math.floor(Math.random() * cards));
  }, [stage, cards]);
  const boxClicked = (index: number, ans: number) => {
    {
      index === ans ? console.log("correct!") : console.log("wrong!");
    }
  };
  return (
    <div>
      <p>stage:{stage}</p>
      <button onClick={clicks}>{cards}</button>

      <div style={{ width: "360px", height: "360px" }}>
        {[...Array(cards)].map((n, index) => {
          return (
            <Box
              num={boxWidth}
              diff={ans}
              current={index}
              onClick={() => boxClicked(index, ans)}
            ></Box>
          );
        })}
      </div>
    </div>
  );
};
export default Boxes;
