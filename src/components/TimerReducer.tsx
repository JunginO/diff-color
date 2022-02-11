export const timerInitialState = {
  time: 15,
  score: 0,
  stage: 1,
  cards: 4,
  colordiff: 13,
  color: Math.round(Math.random() * 360),
};
type State = {
  time: number;
  score: number;
  stage: number;
  cards: number;
  colordiff: number;
  color: number;
};
type Action =
  | { type: "TIMEPASS" }
  | { type: "WRONGANSWER" }
  | { type: "RESET" }
  | { type: "CORRECT" };

const setColordiff = (state: number) => {
  if (state < 30) {
    return state + 8;
  } else if (state > 65) {
    return state;
  } else {
    return state + 1;
  }
};

const setCards = (state: number) => {
  return Math.pow(Math.round((state + 1 + 0.5) / 2) + 1, 2);
};
const setColors = () => {
  return Math.round(Math.random() * 360);
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
      return {
        time: 15,
        score: 0,
        stage: 1,
        cards: 4,
        colordiff: 13,
        color: setColors(),
      };

    case "CORRECT":
      return {
        stage: state.stage + 1,
        score: state.score + Math.pow(state.stage, 3) * state.time,
        time: 15,
        cards: setCards(state.stage),
        colordiff: setColordiff(state.colordiff),
        color: setColors(),
      };
  }
};
