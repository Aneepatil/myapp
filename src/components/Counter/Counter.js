import React, { useState } from "react";

const Counter = () => {
  let [count, setCount] = useState(0);
  let [count2, setCount2] = useState(0);

  const handleCounter = (action) => {
    action === "res"
      ? setCount(0)
      : action === "dic"
      ? setCount((prev) => prev - 1)
      : setCount((prev) => prev + 1);
  };

  const handleIncreement = () => {
    setCount2((prev) => prev + 1);
  };

  const handleDecreement = () => {
    setCount2((prev) => prev - 1);
  };

  const handleReset = () => {
    setCount2(0);
  };

  return (
    <div>
      <button disabled={count === 0} onClick={() => handleCounter("dic")}>
        Decreement
      </button>
      <p>{count}</p>
      <button onClick={() => handleCounter("inc")}>Increement</button>
      <button onClick={() => handleCounter("res")}>Reset Count</button>

      <button disabled={count2 === 0} onClick={handleDecreement}>
        Decreement
      </button>
      <p>{count2}</p>
      <button onClick={handleIncreement}>Increement</button>
      <button onClick={handleReset}>Reset Count</button>
    </div>
  );
};

export default Counter;
