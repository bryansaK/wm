import logo from "./logo.svg"
import "./App.css";
import { Route, Routes, useLocation } from 'react-router-dom'
import HomePage from "pages/HomePage";
import { createContext, useEffect } from "react";
import { Betting } from "interfaces/betting";
import bettingData from "./json/sample-betting.json";

export const BettingContext = createContext<Betting[] | null>(null)

function App() {

  return (
    <BettingContext.Provider value={bettingData}>
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
