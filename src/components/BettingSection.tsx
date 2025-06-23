import { Outcome } from "interfaces/betting";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { logo, money } from "interfaces/enum";

interface BettingSectionProps {
  p1: string;
  p2: string;
  outcomes: Outcome[];
  defaultSelected?: number;
  p1Flag?: string;
  p2Flag?: string;
}

const BettingSection: React.FC<BettingSectionProps> = ({
  p1,
  p2,
  outcomes,
  defaultSelected,
  p1Flag,
  p2Flag,
}) => {
  const [showFlag, setShowFlag] = useState(false);
  const [selected, setSelected] = useState<number | null>(null);
  return (
    <div className="w-full mt-2 p-2 pb-3">
      <div className="text-center m-auto">
        <p className="text-[18px] font-extrabold">
          {p1} - {p2}
        </p>
      </div>
      <div>
        <div
          className={`flex gap-3 mt-3 ${
            outcomes.length === 2 ? "justify-center" : "justify-between"
          }`}
        >
          {outcomes.map((outcome, index) => (
            <div
              key={outcome.outcomeId}
              onClick={() => {
                setSelected(selected === index ? null : index);
                setShowFlag(true);
              }}
              className={`${
                outcomes.length === 2 ? "w-[45%]" : "w-[30%]"
              } min-h-[60px] flex flex-col justify-between rounded-xl text-center text-[12px] p-1 cursor-pointer group
    transition-transform duration-200 ease-in-out transform hover:scale-125
    ${
      selected === index || defaultSelected === index
        ? "bg-red text-white"
        : "bg-grey text-black"
    }
  `}
            >
              <div className="break-words">{outcome.label}</div>
              <div
                className={`text-darkRed font-extrabold text-[20px] pb-1 ${
                  selected === index ? "text-white" : ""
                }`}
              >
                {outcome.odds}
              </div>
              <AnimatePresence>
                {p1Flag && showFlag && selected === index && (
                  <motion.img
                    key={outcome.outcomeId + "flag"}
                    src={
                      index === 0
                        ? p1Flag
                        : index === outcomes.length
                        ? p2Flag
                        : money["MONEY"]
                    }
                    alt="flag"
                    initial={{ opacity: 0, x: -40, rotate: -10 }}
                    animate={{
                      opacity: 1,
                      x: 0,
                      rotate: [-10, 10, -5, 5, 0],
                      transition: {
                        duration: 0.5,
                        type: "tween",
                        stiffness: 100,
                      },
                    }}
                    exit={{ opacity: 0, x: 20, transition: { duration: 0.3 } }}
                    className="w-auto h-6 object-contain"
                  />
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default BettingSection;
