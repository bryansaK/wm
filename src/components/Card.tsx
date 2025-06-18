import { CardLabel } from "interfaces/enum";
import React from "react";
import SmallSection from "./SmallSection";
import { Outcome } from "interfaces/betting";
import BettingSection from "./BettingSection";

interface CardProps {
  isTop?: boolean;
  sportsIcon?: string | null;
  flagIcon?: string | null;
  tournamentName: string;
  outcomes: Outcome[];
p1: string;
 p2:string;
}

const Card: React.FC<CardProps> = ({ isTop, sportsIcon, flagIcon, tournamentName, outcomes, p1, p2 }) => {
  return (
    <div className="w-[94%] lg:w-[40%] min-h-[100px] m-auto">
      {isTop && (
        <div className="w-[100%] bg-yellow text-black justify-center items-center text-center font-extrabold p-1 pb-6  rounded-t-3xl text-lg shadow-lg">
          {CardLabel.TOP}
        </div>
      )}
      <div className="w-full min-h-[100px] rounded-3xl bg-white -mt-5 z-1 shadow-lg relative">
        <div className="flex items-center justify-between">
          <div className="mt-2">
            {sportsIcon && (
            <div className="flex items-center">
              <SmallSection
                sportIcon={sportsIcon}
                flagIcon={flagIcon ? flagIcon : null}
              />
                <span className="ml-3">{tournamentName}</span>
            </div>
            )}
          </div>
            <div className="mr-2 mt-1">Heure</div>
        </div>
        <BettingSection
          p1={p1}
          p2={p2}
          outcomes={outcomes}
        />
      </div>
    </div>
  );
};
export default Card;
