import { CardLabel } from "interfaces/enum";
import React from "react";
import SmallSection from "./SmallSection";
import { Outcome } from "interfaces/betting";
import BettingSection from "./BettingSection";
import { formatRelativeDate } from "utils/dateUtils";

interface CardProps {
  isTop?: boolean;
  sportsIcon?: string | null;
  flagIcon?: string | null;
  tournamentName: string;
  outcomes: Outcome[];
  p1: string;
  p2: string;
  date: string;
  defaultSelected?: number;
  p1flag?: string;
  p2flag?: string;
  canSelect: boolean;
}

const Card: React.FC<CardProps> = ({
  isTop,
  sportsIcon,
  flagIcon,
  tournamentName,
  outcomes,
  p1,
  p2,
  date,
  defaultSelected,
  p1flag,
  p2flag,
  canSelect,
}) => {
  return (
    <div className="flex">
      <div className="flex flex-1"></div>
      <div className="w-[94%] lg:w-[30%] min-h-[100px]  m-auto shadow rounded-3xl">
        {isTop && (
          <div className="w-[100%] bg-yellow text-black justify-center items-center text-center font-extrabold p-1 pb-6  rounded-t-3xl text-lg shadow-lg">
            {CardLabel.TOP}
          </div>
        )}
        <div
          className={`w-full min-h-[100px] rounded-3xl bg-white cursor-pointer group
    transition-transform duration-200 ease-in-out transform hover:scale-105 ${
            isTop ? "-mt-5 z-1" : ""
          } shadow-lg relative`}
        >
          <div className="flex items-center justify-between">
            <div className="mt-2">
              <div className="flex items-center">
                  {/**Section a gauche avec le drapeau et le l'icone de sport */}
                <SmallSection
                  sportIcon={sportsIcon ? sportsIcon : null}
                  flagIcon={flagIcon ? flagIcon : null}
                />
                <span className="ml-3 max-w-[150px] breakword">
                  {tournamentName ? tournamentName : "Win un max de thune"}
                </span>
              </div>
            </div>
            <div className="mr-3 mt-1">{formatRelativeDate(date)}</div>
          </div>
          <BettingSection
            p1={p1}
            p2={p2}
            outcomes={outcomes}
            defaultSelected={defaultSelected}
            p1Flag={p1flag}
            p2Flag={p2flag}
            canSelect={canSelect}
          />
        </div>
      </div>
      <div className="flex flex-1"></div>
    </div>
  );
};
export default Card;
