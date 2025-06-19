import { BettingContext } from "App";
import Card from "components/Card";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { Betting } from "interfaces/betting";
import { imagesFlag, imagesSport } from "interfaces/enum";
import React, { useContext, useEffect, useState } from "react";

const HomePage: React.FC = () => {
  const bettingData = useContext(BettingContext);
  const [paginatedData, setPaginatedDate] = useState<Betting[]>([]);

  useEffect(() => {
    paginationBy20();
  }, [bettingData?.filters.pagination]);

  if (!bettingData) {
    return <div>Loading...</div>;
  }

  const paginationBy20 = (): void => {
    const pagination = bettingData.filters.pagination ?? 0;
    setPaginatedDate(
      bettingData.bettingData.slice(pagination, pagination + 20)
    );
  };

  return (
    <div>
      <div className="pb-20">
        {paginatedData.map((elem, index) => (
          <div className="mt-3 pb-2">
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
        <Stack spacing={2} className="items-center p-3">
          <Pagination
            count={Math.floor(bettingData.bettingData.length / 20)}
            variant="outlined"
            shape="rounded"
            color="primary"
            onChange={(event, value) => {
              // value = numéro de page (commence à 1)
              // Mets à jour le filtre pagination :
              bettingData.setFilters((prev) => ({
                ...prev,
                pagination: (value - 1) * 20, // pour afficher la bonne tranche - 1 parce que ça commence a 1
              }));
            }}
          />
        </Stack>
      </div>
    </div>
  );
};
export default HomePage;
