import { BettingContext } from "App";
import Card from "components/Card";
import Header from "components/Header";
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
      <Header></Header>
      <div>
        {paginatedData.map((elem, index) => (
          <div className="mt-3 pb-5">
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
      </div>
    </div>
  );
};
export default HomePage;
