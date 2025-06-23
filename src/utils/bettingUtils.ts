import { BettingContext } from "App";
import { Betting } from "interfaces/betting";
import { useContext } from "react";

export function GetMatchById(id: number): Betting {
  const bettingData = useContext(BettingContext);

  const match = bettingData?.bettingData.find((item) => item.matchId === id);
  if (!match) {
    throw new Error(`Match with id ${id} not found`);
  }
  return match;
}
