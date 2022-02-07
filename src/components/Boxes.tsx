import React from "react";
import { useState, useEffect, useReducer } from "react";
import { timerInitialState, timerReducer } from "./TimerReducer";
import Box from "./Box";

const Boxes = () => {
  const [ans, setAns] = useState(0);
  const [boxWidth, setBoxwidth] = useState(176);
  const [color, setColor] = useState(0);
  const [{ time, score, stage, cards, colordiff }, dispatch] = useReducer(
    timerReducer,
    timerInitialState
  );

  useEffect(() => {
    const countdown = setInterval(() => {
      if (time > 0) {
        dispatch({ type: "TIMEPASS" });
      } else {
        alert("GAME OVER!\n 스테이지:" + stage + ", 점수:" + score);
        clearInterval(countdown);
        dispatch({ type: "RESET" });
      }
    }, 1000);
    return () => clearInterval(countdown);
  }, [time, stage, score]);

  useEffect(() => {
    setBoxwidth(360 / Math.sqrt(cards) - 4);
    setAns(Math.floor(Math.random() * cards));
    setColor(Math.round(Math.random() * 360));
  }, [stage, cards]);
  const boxClicked = (index: number, ans: number) => {
    index === ans
      ? dispatch({ type: "CORRECT" })
      : dispatch({ type: "WRONGANSWER" });
  };
  return (
    <div>
      <div>
        <p>
          스테이지:{stage}, 남은 시간:{time}, 점수:{score}
        </p>
      </div>

      <div style={{ width: "360px", height: "360px" }}>
        {[...Array(cards)].map((n, index) => {
          return (
            <Box
              colordiff={colordiff}
              colors={color}
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
