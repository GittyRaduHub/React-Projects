import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const iubitBtnClick = () => {
    setCount(count + 1);
  };

  return (
    <div className="App">
      {count === 0 ? (
        <h1>Ma iubesti?</h1>
      ) : (
        <h1> M-ai iubit de {count} ori!</h1>
      )}

      {count === 0 ? (
        <img className="imgSad" src="/poze/sadCat.jpg" alt="sadCat"></img>
      ) : (
        <img className="imgHappy" src="/poze/kitty.gif" alt="happyCat"></img>
      )}
      <button className="loveBtn" onClick={iubitBtnClick}>
        Te iubesc!
      </button>
    </div>
  );
}

export default App;
