import Header from "components/Header";
import React from "react";

// Page pour la HomePage
import { useLocation } from "react-router-dom";


const HomePage: React.FC = () => {
  return (
    <div className="bg-grey h-screen">
      <Header />
    </div>
  );
}
export default HomePage;