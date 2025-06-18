import React from "react";

interface SmallSectionProps {
  sportIcon: string;
  flagIcon?: string | null;
}

const SmallSection: React.FC<SmallSectionProps> = ({ sportIcon, flagIcon }) => {
  return (
    <div className={`flex w-[70px] bg-grey rounded-3xl items-center p-1 -ml-2 ${!flagIcon ? "justify-center" : "gap-2 justify-center"}`}>
      <img
        src={sportIcon}
        alt="Sport Icon"
        className="h-6 object-contain"
      />
      {flagIcon && (
        <img
          src={flagIcon}
          alt="Flag Icon"
          className="h-4 object-contain"
        />
      )}
    </div>
  );
};
export default SmallSection;
