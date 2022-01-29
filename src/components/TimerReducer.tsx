export const timerInitialState = { state: 15 };

type Action =
  | { type: "TIMEPASS" }
  | { type: "WRONGANSWER" }
  | { type: "RESET" };

export const timerReducer = (state: number, action: Action) => {
  switch (action.type) {
    case "TIMEPASS":
      return state - 1;
    case "WRONGANSWER":
      if (state >= 3) {
        return state - 3;
      } else {
        return (state = 0);
      }

    case "RESET":
      return (state = 15);
  }
};
