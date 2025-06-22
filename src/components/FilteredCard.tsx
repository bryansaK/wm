import { CardLabel } from "interfaces/enum";
import React, { useEffect } from "react";
import SmallSection from "./SmallSection";
import { filteredMatches, Outcome } from "interfaces/betting";
import BettingSection from "./BettingSection";
import { formatRelativeDate } from "utils/dateUtils";

interface FilteredCardProps {
  data: filteredMatches;
}

const FilteredCard: React.FC<FilteredCardProps> = ({ data }) => {
  return (
    <div className="flex">
      <div className="w-[94%] lg:w-[30%] min-h-[100px]  m-auto shadow rounded-3xl ">
        <div
          className={`w-full min-h-[100px] rounded-3xl  bg-white shadow-lg relative`}
        >
          <div className="flex items-center justify-between">
            <div className="mt-2">
              <div className="flex items-center">
                <span className="ml-3 max-w-[150px] breakword">
                  {"Côte final: " + Number(data.coteFinale).toFixed(2)}
                </span>
              </div>
            </div>
            <div className="mr-3 mt-1 text-red">
              <a>Détail du paris composé</a>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-2">

        </div>
    </div>
  );
};
export default FilteredCard;
