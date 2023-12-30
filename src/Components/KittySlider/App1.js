import React, { useState } from "react";
import "./App1.css";

const App1 = () => {
  const [i, setI] = useState(0);
  const nextClick = () => {
    setI((prevI) => (prevI >= 3 ? 0 : prevI + 1));
  };

  const prevClick = () => {
    setI((prevI) => (prevI <= 0 ? 3 : prevI - 1));
  };

  const loveText = [
    "Pisoiul meu alintat",
    "Pisoiul meu mic",
    "Pisoiul meu drag",
    "Pisoiul meu suparacios",
  ];
  return (
    <div className="Slider">
      {
        <h1 className="textLove" key={i}>
          {loveText[i]}
        </h1>
      }
      <div className="main">
        <img className="gifs" key={i} src={`/poze/cat${i}.gif`} alt="Cat1" />
        <div>
          <button className="prev" onClick={prevClick}>
            hei
          </button>
          <button className="next" onClick={nextClick}>
            ye
          </button>
        </div>
      </div>
    </div>
  );
};

export default App1;
