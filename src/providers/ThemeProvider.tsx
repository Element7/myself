import React, { createContext, useReducer } from "react";

import {
  createTheme,
  ThemeProvider as Provider,
} from "@material-ui/core/styles";

export const InitialState: IState = {
  theme: "light",
};
export interface IState {
  theme: string;
}
export interface IActions {
  type: "SET_LIGHT_MODE" | "SET_DARK_MODE";
}
export interface IThemeContextProps {
  theme: string;
  dispatch: React.Dispatch<IActions>;
}
const ThemeContext = createContext<IThemeContextProps>({
  theme: "light",
  dispatch: () => {},
});

const reducer = (state: IState, action: IActions) => {
  switch (action.type) {
    case "SET_LIGHT_MODE":
      return { theme: "light" };
    case "SET_DARK_MODE":
      return { theme: "dark" };
    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
};

const ThemeProvider: React.FC<React.ReactNode> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, { theme: "light" });

  const theme = createTheme({
    palette: {
      secondary: {
        light: "#ff4400",
        main: "#000",
      },
      type: state.theme === "dark" ? "dark" : "light",
    },
  });

  return (
    <ThemeContext.Provider value={{ dispatch, theme: state.theme }}>
      <Provider theme={theme}>{children}</Provider>
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };
