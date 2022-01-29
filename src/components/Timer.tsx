import React, { useState, useEffect } from "react";
import { useReducer } from "react";
import { timerInitialState, timerReducer } from "./TimerReducer";

const Timer = () => {
  const [state, dispatch] = useReducer(timerReducer, 15);
  //const [timelimit, setTimelimit] = useState(15);
  const onDiscount = () => dispatch({ type: "WRONGANSWER" });
  useEffect(() => {
    const countdown = setInterval(() => {
      if (state <= 0) {
        alert("GAME OVER!\n 스테이지:?, 점수: ?");
        dispatch({ type: "RESET" });
      } else if (state > 0) {
        dispatch({ type: "TIMEPASS" });
      }
    }, 1000);
    return () => clearInterval(countdown);
  }, [state]);
  return (
    <div>
      <p>{state}</p>
      <button onClick={onDiscount}>점수깎기</button>
    </div>
  );
};
export default Timer;
