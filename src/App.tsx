import { useState, useEffect, useReducer } from "react";
import { timerInitialState, timerReducer } from "./components/TimerReducer";
import Box from "./components/Box";
import styled from "styled-components";

const MainBox = styled.div`
  .main-box {
    width: 360px;
    height: 360px;
  }
`;

function App() {
  const [ans, setAns] = useState<number>(0);
  const [boxWidth, setBoxwidth] = useState<number>(176);
  const [{ time, score, stage, cards, colordiff, color }, dispatch] =
    useReducer(timerReducer, timerInitialState);

  useEffect(() => {
    const countdown = setInterval(() => {
      if (time > 0) {
        dispatch({ type: "TIMEPASS" });
      } else {
        alert("GAME OVER!\n 스테이지:" + stage + ", 점수:" + score);
        setAns(Math.floor(Math.random() * cards));
        dispatch({ type: "RESET" });
      }
    }, 1000);
    return () => clearInterval(countdown);
  }, [time, stage, score, cards]);

  useEffect(() => {
    setBoxwidth(360 / Math.sqrt(cards) - 4);
    setAns(Math.floor(Math.random() * cards));
  }, [stage, cards]);

  const boxClicked = (index: number, ans: number) => {
    index === ans
      ? dispatch({ type: "CORRECT" })
      : dispatch({ type: "WRONGANSWER" });
  };
  return (
    <MainBox>
      <div>
        <p>
          스테이지:{stage}, 남은 시간:{time}, 점수:{score}
        </p>
      </div>

      <div className="main-box">
        {[...Array(cards)].map((n, index) => {
          return (
            <Box
              colordiff={colordiff}
              colors={color}
              width={boxWidth}
              diffrentBox={ans}
              currentBox={index}
              onClick={() => boxClicked(index, ans)}
            ></Box>
          );
        })}
      </div>
    </MainBox>
  );
}

export default App;
