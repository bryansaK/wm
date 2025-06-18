import logo from "./logo.svg";
import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from "pages/HomePage";
import { createContext, useEffect, useState } from "react";
import { Betting, BettingContextType, Filters } from "interfaces/betting";
import bettingData from "./json/sample-betting.json";

export const BettingContext = createContext<BettingContextType | null>(null);

function App() {
  const [filters, setFilters] = useState<Filters>({
    sport: undefined,
    pagination: undefined,
    desc:  undefined,
    search: undefined,
    country: undefined,
  });

  return (
    <BettingContext.Provider value={{ bettingData, filters, setFilters }}>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" />
        </Routes>
      </div>
    </BettingContext.Provider>
  );
}

export default App;
