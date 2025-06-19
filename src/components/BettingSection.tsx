import { Outcome } from "interfaces/betting";
import React from "react";

interface BettingSectionProps {
  p1: string;
  p2: string;
  outcomes: Outcome[];
}

const BettingSection: React.FC<BettingSectionProps> = ({
  p1,
  p2,
  outcomes,
}) => {
  return (
    <div className="w-full mt-2 p-2 pb-3">
      <div className="text-center m-auto">
        <p className="text-[18px] font-extrabold">
          {p1} - {p2}
        </p>
      </div>
      <div>
        <div
          className={`flex gap-3 mt-3 ${
            outcomes.length === 2 ? "justify-center" : "justify-between"
          }`}
        >
          {outcomes.map((outcome, index) => (
            <div
              key={outcome.outcomeId}
              className={`${
                outcomes.length === 2 ? "w-[45%]" : "w-[30%]"
              } min-h-[60px] flex flex-col justify-between rounded-xl bg-grey text-center text-[12px] p-1 hover:bg-red active:bg-red hover:text-white active:text-white group`}
            >
              <div className="break-words ">{outcome.label}</div>
              <div className="text-darkRed font-extrabold text-[20px] group-hover:text-white group-active:text-white">{outcome.odds}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default BettingSection;
