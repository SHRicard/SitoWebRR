import { createContext } from "react";

const ThemeContext = createContext();
const ThemeProvider = ({ Children }) => {
  const data = {};

  return <ThemeContext.Provider value={data}>{Children}</ThemeContext.Provider>;
};

export { ThemeProvider };
export default ThemeContext;
