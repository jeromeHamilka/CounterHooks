import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState("");

  return (
    <div>
      <input
        type="text"
        value={count}
        onChange={(event) => setCount(parseInt(event.target.value))}
      />
      <p>Le compteur est à : {count} </p>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(count - 1)}>-1</button>
    </div>
  );
};
export default Counter;
