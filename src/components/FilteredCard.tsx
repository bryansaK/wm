import { CardLabel } from "interfaces/enum";
import React, { useEffect, useState } from "react";
import SmallSection from "./SmallSection";
import { filteredMatches, Outcome } from "interfaces/betting";
import BettingSection from "./BettingSection";
import { formatRelativeDate } from "utils/dateUtils";
import SummarySection from "./SummarySection";
import Card from "./Card";
import { GetMatchById } from "utils/bettingUtils";

interface FilteredCardProps {
  data: filteredMatches;
}

const FilteredCard: React.FC<FilteredCardProps> = ({ data }) => {
  useEffect(() => {
    console.log(data);
  });
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="flex">
      <div className="w-[94%] lg:w-[30%] min-h-[100px]  m-auto shadow rounded-3xl">
        {" "}
        {/**ne pas toucher aus tyle ici pas mettre de pb */}
        <div
          className={`w-full min-h-[100px] rounded-3xl  bg-white shadow-lg relative pb-2`}
        >
          <div className="flex items-center justify-between pb-2">
            <div className="mt-2">
              <div className="flex items-center">
                <span className="ml-3 max-w-[150px] breakword">
                  {"Côte final: " + Number(data.coteFinale).toFixed(2)}
                </span>
              </div>
            </div>
            <div className="mr-3 mt-1 text-red">
              <a
                onClick={() => setShowPopup(true)}
                className="underline cursor-pointer text-red-500 hover:text-red-700 transition"
              >
                Détail du pari composé
              </a>
            </div>
          </div>
          <div className="mt-2">
            {data.cotes.map((match, index) => {
              return (
                <div>
                  <SummarySection
                    cote={match}
                    matchId={data.matchesId[index]}
                    tournamentName={data.matchesName[index]}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-xl p-6 shadow-lg transform transition-all duration-300 scale-100 w-[90%]">
            {/* Bouton de fermeture */}
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-2 right-4 text-red text-xl"
            >
              ✕
            </button>

            {/* Tes 3 composants custom ici */}
            <div className="space-y-4 mt-3">
              {data.matchesId.map((matchId, index) => {
                const match = GetMatchById(matchId);
                return (
                  <div>
                    <Card
                      date={match.startDate}
                      outcomes={match.outcomes}
                      p1={match.competitor1Name}
                      p2={match.competitor2Name}
                      tournamentName={match.tournamentName}
                      flagIcon={match.flag}
                      isTop={match.hot}
                      defaultSelected={data.matches[index]}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default FilteredCard;
