import { BettingContext } from "App";
import { Betting } from "interfaces/betting";
import { useContext } from "react";

const bettingData = useContext(BettingContext);

export function getMatchById(id: number): Betting {

    const match = bettingData?.bettingData.find((item) => item.matchId === id);
    if (!match) {
        throw new Error(`Match with id ${id} not found`);
    }
    return match;
}