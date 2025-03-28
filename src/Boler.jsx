import { useState } from "react";
import handleWideBall from "./handleWideBall";

const Boler = () => {
  const [totalBalls, settotalBalls] = useState(0);

  const handleRightBall = () => {
    const rightBall = totalBalls + 1;

    settotalBalls(rightBall);
  };

  const handleWicketBall = () => {
    handleRightBall();
  };

  return (
    <>
      <h1>Mustafizur</h1>
      <h3>
        Total Ball:{" "}
        {totalBalls < 7 ? totalBalls : (settotalBalls(0), totalBalls)}
      </h3>
      {totalBalls > 5 && totalBalls > 0 && <h2>Over Done</h2>}

      <button onClick={handleRightBall}>Right Ball</button>
      <button onClick={handleWideBall}>Wide Ball</button>
      <button>No Ball</button>
      <button onClick={handleWicketBall}>Wicket Ball</button>
    </>
  );
};

export default Boler;
