import React, { createContext, useReducer } from "react";

export const ThemeContext = createContext();

const initialState = {
  darkMode: true,
};

const themeReducer = (state, action) => {
    let root = document.getElementsByTagName("html")[0];
  switch (action.type) {
    case "LIGHTMODE":
        root.classList.remove("dark");
      return { darkMode: false };
    case "DARKMODE":
        root.classList.add("dark");
      return { darkMode: true };
    default:
      return state;
  }
};

export function ThemeProvider(props) {
  const [state, dispatch] = useReducer(themeReducer, initialState);

  return <ThemeContext.Provider value={{ state, dispatch }}>{props.children}</ThemeContext.Provider>;
}