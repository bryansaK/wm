import React, { useEffect, useState } from "react";
import EuroIcon from "@mui/icons-material/Euro";
import { Rubban } from "interfaces/animation";

const generateMoney = (): Rubban => ({
  id: Date.now() + Math.random(),
  left: Math.random() * 100,
  duration: 2,
  sway: Math.random() > 0.5, // effet de balancement aléatoire
});

export const MoneyBonus = () => {
  const [moneys, setMoneys] = useState<Rubban[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setMoneys((prev) => [...prev, generateMoney()]);
    }, 500); // réduire pour augmenter le nombre de money

    return () => clearInterval(interval);
  }, []);

  //  retirer un money du state quand son animation est terminée

  const handleAnimationEnd = (id: number) => {
    setTimeout(() => {
      setMoneys((prev) => prev.filter((m) => m.id !== id));
    }, 100);
  };

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {moneys.map((money) => (
        <div
          key={money.id}
          onAnimationEnd={() => handleAnimationEnd(money.id)}
          className="absolute w-4 h-4"
          style={{
            left: `${money.left}%`, // position horizontale aléatoire
            animation: `
              fall ${money.duration}s linear, 
              ${money.sway ? "sway" : ""} ${
              money.duration * 1.2
            }s ease-in-out infinite
            `,
          }}
        >
          <EuroIcon fontSize="small" className="text-red" />
        </div>
      ))}

      <style>{`
        @keyframes fall {
          0% {
            top: -10px;
            opacity: 1;
            transform: rotate(0deg);
          }
          100% {
            top: 100%;
            opacity: 0;
            transform: rotate(360deg);
          }
        }

        @keyframes sway {
          0% { transform: translateX(0); }
          25% { transform: translateX(-10px); }
          50% { transform: translateX(10px); }
          75% { transform: translateX(-5px); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
};
