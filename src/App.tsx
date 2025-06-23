import logo from "./logo.svg";
import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from "pages/HomePage";
import { createContext, useEffect, useState } from "react";
import { Betting, BettingContextType, Filters } from "interfaces/betting";
import bettingData from "./json/sample-betting.json";
import Header from "components/Header";
import Navbar from "components/NavBar";
import ReadmePage from "pages/ReadmePage";

export const BettingContext = createContext<BettingContextType | null>(null);

function App() {
  const [filters, setFilters] = useState<Filters>({
    sport: undefined,
    pagination: 0,
    desc: undefined,
    search: undefined,
    country: undefined,
    minCote: 0,
    maxCote: 200,
    isActive: false
  });

  return (
    <BettingContext.Provider value={{ bettingData, filters, setFilters }}>
      <div>
        <Header></Header>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/readme" element={<ReadmePage></ReadmePage>} />
        </Routes>
        <Navbar></Navbar>
      </div>
    </BettingContext.Provider>
  );
}

export default App;
