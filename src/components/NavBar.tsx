import React from "react";
import homeInactif from "../assets/tabbar/Home-Inactif.svg";
import homeActif from "../assets/tabbar/Home-Actif.svg";
import readmeInactif from "../assets/tabbar/Readme-Inactif.svg";
import readmeActif from "../assets/tabbar/Readme-Actif.svg";
import { useLocation } from "react-router";
import { TabLabel } from "interfaces/enum";
import { useNavigate } from "react-router-dom";

const Navbar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    // utilisation de header pour la seo
    <div className="fixed bottom-0 z-50 w-full flex flex-row items-center bg-white border-t-2  overflow-hidden p-2">
      <div className="flex-1 flex flex-col justify-center items-center" onClick={() => {navigate("/")}}>
        <img src={location.pathname === '/' ? homeActif : homeInactif} alt="home" className="h-8 w-auto" />
        <div className="text-[12px]">{TabLabel.HOME}</div>
      </div>
      <div className="flex-1 flex flex-col justify-center items-center" onClick={() => {navigate("/readme")}}>
        <img src={location.pathname === '/readme' ? readmeActif : readmeInactif} alt="readme" className="h-8 w-auto" />
        <div className="text-[12px]">{TabLabel.README}</div>
      </div>
    </div>
  );
};
export default Navbar;
