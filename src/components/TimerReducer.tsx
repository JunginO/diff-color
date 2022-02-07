export const timerInitialState = {
  time: 15,
  score: 0,
  stage: 1,
  cards: 4,
  colordiff: 13,
};
type State = {
  time: number;
  score: number;
  stage: number;
  cards: number;
  colordiff: number;
};
type Action =
  | { type: "TIMEPASS" }
  | { type: "WRONGANSWER" }
  | { type: "RESET" }
  | { type: "CORRECT" };
const setColordiff = (state: number) => {
  if (state < 30) {
    return state + 10;
  } else {
    return state + 1;
  }
};
export const timerReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "TIMEPASS":
      return { ...state, time: state.time - 1 };
    case "WRONGANSWER":
      if (state.time >= 3) {
        return { ...state, time: state.time - 3 };
      } else {
        return { ...state, time: 0 };
      }
    case "RESET":
      return { time: 15, score: 0, stage: 1, cards: 4, colordiff: 13 };
    case "CORRECT":
      return {
        score: state.score + Math.pow(state.stage, 3) * state.time,
        stage: state.stage + 1,
        time: 15,
        cards: Math.pow(Math.round((state.stage + 1 + 0.5) / 2) + 1, 2),
        colordiff: setColordiff(state.colordiff),
      };
  }
};
