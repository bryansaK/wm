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
    <div className="w-full ">
      <div className="text-center m-auto">
        <h3>{p1} - {p2}</h3>
      </div>
    </div>
  );
};
export default BettingSection;
