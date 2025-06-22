import React, { useContext, useState } from "react";
import logo from "../assets/logo.png";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import { MoneyBonus } from "./Money";
import { Slider } from "@mui/material";
import { BettingContext } from "App";
// Component du Header (Logo + filtre + search inc)

const Header: React.FC = () => {
  const bettingData = useContext(BettingContext);
  const [filterIsActive, setFilterIsActive] = useState<boolean>(false);

  const handleCoteSlider = (firstValue: number, secondValue: number): void => {
    bettingData?.setFilters((prev) => ({
      ...prev,
      minCote: firstValue,
      maxCote: secondValue,
    }));
  };

  return (
    // utilisation de header pour la seo
    <header className="sticky top-0 z-50 relative w-full bg-grey border-b-2  overflow-hidden p-1">
      <div className="flex flex-row items-center">
        {/*<MoneyBonus />  désativer parce que c pas stable*/}
        <div className="flex-1 flex justify-center items-center">
          <ManageSearchIcon
            fontSize="large"
            className="text-red"
            onClick={() => setFilterIsActive(!filterIsActive)}
          />
        </div>
        <div className="flex-1 flex justify-center items-center h-12">
          <img src={logo} alt="Logo" className="h-full w-auto" />
        </div>
        <div className="flex-1"></div>
      </div>
      <div
        className={`
    border-t-2 mt-1 overflow-hidden transition-all duration-300 ease-in-out
    ${
      filterIsActive
        ? "opacity-100 translate-y-0 max-h-[400px] pointer-events-auto"
        : "opacity-0 -translate-y-2 max-h-0 pointer-events-none"
    }
  `}
      >
        <h2>Filtres:</h2>
        <div className="p-2 w-[50%] ml-2 mt-2">
          <div className="flex items-center justify-between">
            <span className="font-semibold">
              Paris combinés: {bettingData?.filters.minCote} -{" "}
              {bettingData?.filters.maxCote}
            </span>
          </div>
          {/**penser a ajouter deux input pour saisir manuellement les cotes */}
          <Slider
            step={0.01}
            color="error"
            getAriaLabel={() => "Côte"}
            value={[
              bettingData?.filters.minCote ?? 0,
              bettingData?.filters.maxCote ?? 200,
            ]}
            onChange={(e, newValue) =>
              handleCoteSlider(newValue[0], newValue[1])
            }
            valueLabelDisplay="off"
            max={200}
            className="mt-0"
          />
        </div>
        <div
          className={`p-2 w-[50%] text-center mb-2 ${
            bettingData?.filters.isActive
              ? "bg-red text-white"
              : "bg-grey text-black"
          } rounded-2xl border-2 cursor-pointer transition-colors duration-1000`}
          onClick={() => {
            bettingData?.setFilters((prev) => ({
              ...prev,
              isActive: !prev.isActive,
            }));
          }}
        >
          {bettingData?.filters.isActive
            ? "Désactiver le filtre"
            : "Activer le filtre"}
        </div>
      </div>
    </header>
  );
};
export default Header;
