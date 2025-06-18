import React from "react";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";

interface SmallSectionProps {
  sportIcon?: string | null;
  flagIcon?: string | null;
}

const SmallSection: React.FC<SmallSectionProps> = ({ sportIcon, flagIcon }) => {
  return (
    <div
      className={`flex w-[70px] bg-grey rounded-3xl items-center p-1 -ml-2 ${
        !flagIcon ? "justify-center" : "gap-2 justify-center"
      }`}
    >
      {sportIcon ? (
        <img src={sportIcon} alt="Sport Icon" className="h-6 object-contain" />
      ) : (
        <MonetizationOnIcon color="error"></MonetizationOnIcon>
      )}
      {flagIcon && (
        <img src={flagIcon} alt="Flag Icon" className="h-4 object-contain" />
      )}
    </div>
  );
};
export default SmallSection;
