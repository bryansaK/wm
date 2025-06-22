import { BettingContext } from "App";
import Card from "components/Card";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { Betting, filteredMatches } from "interfaces/betting";
import { imagesFlag, imagesSport } from "interfaces/enum";
import React, { useContext, useEffect, useState } from "react";
import FilteredCard from "components/FilteredCard";

const HomePage: React.FC = () => {
  const bettingData = useContext(BettingContext);
  const [paginatedData, setPaginatedDate] = useState<Betting[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [filteredData, setFilteredData] = useState<filteredMatches[]>([]);
  const [filteredSize, setFilteredSize] = useState<number>(0);

  useEffect(() => {
    paginationBy20();
  }, [bettingData?.filters, bettingData]);

  if (!bettingData) {
    return <div>Loading...</div>;
  }

  const paginationBy20 = (): void => {
    let filteredData = bettingData.bettingData;
    if (bettingData.filters.isActive) {
      setIsLoading(true);
      // Lancer le worker ici
      // @ts-ignore
      const worker = new Worker(
        new URL("../workers/algo.ts", import.meta.url),
        { type: "module" }
      );
      worker.postMessage({
        matches: bettingData.bettingData.slice(0, 20),
        min: bettingData.filters.minCote,
        max: bettingData.filters.maxCote,
        start: bettingData.filters.pagination ?? 0, // index de départ
        limit: 20, // nombre de résultats par page
      });

      worker.onmessage = (event) => {
        const result = event.data.data;
        const trueSize = event.data.total;
        setFilteredSize(trueSize);
        setFilteredData(result);
        setIsLoading(false);
      };
      return; // pas aller dans pagniation classique si le filtre est actif
    }
    // Si pas de filtre actif, pagination classique
    setPaginatedDate(filteredData);
  };

  return (
    <div>
      <div className="pb-20">
        {isLoading ? (
          <div className="text-center text-lg py-10">
            Chargement des résultats...
          </div>
        ) : bettingData.filters.isActive ? (
          <>
            {filteredData.map((item, index) => (
              <div className="mt-3">
                <FilteredCard data={item} key={index} />
              </div>
            ))}
          </>
        ) : (
          <>
            {paginatedData
              .slice(
                bettingData.filters.pagination ?? 0,
                (bettingData.filters.pagination ?? 0) + 20
              )
              .map((elem: Betting, index: number) => (
                <div className="mt-3 pb-2" key={index}>
                  <Card
                    date={elem.startDate}
                    isTop={elem.hot ? true : false}
                    flagIcon={elem.flag ? imagesFlag[elem.flag] : null}
                    sportsIcon={imagesSport[elem.sportName]}
                    tournamentName={elem.tournamentName}
                    outcomes={elem.outcomes}
                    p1={elem.competitor1Name}
                    p2={elem.competitor2Name}
                  />
                </div>
              ))}
          </>
        )}
        <Stack spacing={2} className="items-center p-3">
          <Pagination
            count={
              bettingData.filters.isActive
                ? Math.ceil(filteredSize / 20)
                : Math.ceil(paginatedData.length / 20)
            }
            variant="outlined"
            shape="rounded"
            color="primary"
            onChange={(event, value) => {
              bettingData.setFilters((prev) => ({
                ...prev,
                pagination: (value - 1) * 20,
              }));
            }}
          />
        </Stack>
      </div>
    </div>
  );
};
export default HomePage;
