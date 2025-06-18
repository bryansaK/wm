import Card from "components/Card";
import Header from "components/Header";
import { imagesFlag, imagesSport } from "interfaces/enum";
import React from "react";

// Page pour la HomePage
import { useLocation } from "react-router-dom";

const HomePage: React.FC = () => {
  return (
    <div className="h-screen">
      <Header />
      <div className="mt-2">
        <Card
          isTop
          flagIcon={imagesFlag["FR"]}
          sportsIcon={imagesSport["IceHockey"]}
          tournamentName="Champions League"
          outcomes={[]}
          p1="Team A"
          p2="Team B"
        />
      </div>
    </div>
  );
};
export default HomePage;
