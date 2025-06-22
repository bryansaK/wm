import { Outcome } from "interfaces/betting";
import React, { useEffect, useState } from "react";

interface SummarySectionProps {
  cote: number;
  tournamentName: string;
  matchId: number
}

const SummarySection: React.FC<SummarySectionProps> = ({
  cote,
  tournamentName,
  matchId,
  
}) => {
  return (
    <div className="w-[90%] mt-2 bg-grey m-auto rounded-xl">
      <div className="text-center text-black m-auto">
        <p className="text-[18px]">{"Côte du match: " + cote}</p>
        <p className="text-[10px]">{matchId}</p>
        <p className="text-[18px] font-extrabold">{tournamentName}</p>
      </div>
      <div></div>
    </div>
  );
};
export default SummarySection;
