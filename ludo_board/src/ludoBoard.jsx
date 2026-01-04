import React, { useState } from "react";

const LudoBoard = () => {
  const [moves, setMoves] = useState({
    blue: 0,
    red: 0,
    green: 0,
    yellow: 0,
  });

  let updateBlue = () => {
    setMoves((prevVal) => {
      return { ...prevVal, blue: prevVal.blue + 1 };
    });
  };
  let updateRed = () => {
    setMoves((prevVal) => {
      return { ...prevVal, red: prevVal.red + 1 };
    });
  };
  let updateYellow = () => {
    setMoves((prevVal) => {
      return { ...prevVal, yellow: prevVal.yellow + 1 };
    });
  };
  let updateGreen = () => {
    setMoves((prevVal) => {
      return { ...prevVal, green: prevVal.green + 1 };
    });
  };

  return (
    <div className="board">
      <p>Blue moves= {moves.blue}</p>
      <button onClick={updateBlue} style={{ background: "blue" }}>
        +1
      </button>
      <p>Yellow moves={moves.yellow}</p>
      <button
        onClick={updateYellow}
        style={{ background: "yellow", color: "black" }}
      >
        +1
      </button>
      <p>Green moves={moves.green}</p>
      <button onClick={updateGreen} style={{ background: "green" }}>
        +1
      </button>
      <p>Red moves={moves.red}</p>
      <button onClick={updateRed} style={{ background: "red" }}>
        +1
      </button>
    </div>
  );
};

export default LudoBoard;
