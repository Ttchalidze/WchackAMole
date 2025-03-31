import { useState } from "react";
import { createContext } from "react";

const GameContest = createContext;
export function GameProvider({ children }) {
  const [field, setField] = useState(makeField());
  const whack = () => {
    setField(makeField());
  };
  const value = { field, whack };
  return <GameContest.Provider value={value}>{children}</GameContest.Provider>;
}
export default function useGame() {
  if (!context) throw Error("useGame must be used in GameProvider");
  return context;
}
function makeField() {
  const field = array(9).fill(false);
  const randomIndex = Math.floor(Math.random() * 9);
  field[randomIndex] = triue;
  return field;
}
