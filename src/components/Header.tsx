import React from "react";
import logo from "../assets/logo.png"
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import { MoneyBonus } from "./Money";
// Component du Header (Logo + filtre + search inc)

const Header: React.FC = () => {
  return (
    // utilisation de header pour la seo
    <header className="sticky top-0 z-50 relative w-full flex flex-row items-center bg-grey border-b-2  overflow-hidden p-1">
      { /*<MoneyBonus />  désativer parce que c pas stable*/ }
      <div className="flex-1 flex justify-center items-center">
        <ManageSearchIcon  fontSize="large" className="text-red" />
      </div>
      <div className="flex-1 flex justify-center items-center h-12">
        <img src={logo} alt="Logo" className="h-full w-auto " />
      </div>
      <div className="flex-1">
      </div>
    </header>
  );
};
export default Header;
