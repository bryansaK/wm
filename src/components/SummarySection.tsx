import { Outcome } from "interfaces/betting";
import React, { useState } from "react";

interface SummarySectionProps {
  cote: number;
  tournamentName: string;
}

const BettingSection: React.FC<SummarySectionProps> = ({
  cote,
  tournamentName,
}) => {
  return (
    <div className="w-full mt-2 p-2 pb-3 bg-red">
      <div className="text-center m-auto">
        <p className="text-[18px] font-extrabold">{"Côte du match: " + cote}</p>
        <p className="text-[18px] font-extrabold">{tournamentName}</p>
      </div>
      <div></div>
    </div>
  );
};
export default BettingSection;
