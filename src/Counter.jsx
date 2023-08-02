import { useState } from "react";
export default function Counter() {
  const [count, setCount] = useState(0);
  const addOne = () => {
    setCount(count + 1);
  };
  const addThree = () => {
    // Use this method whenever the state depends on the previous state within a function like this
    setCount((currentCount) => currentCount + 1);
    setCount((currentCount) => currentCount + 1);
    setCount((currentCount) => currentCount + 1);
    // Can't do this, because state doesn't update until after the whole sequence
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
  };
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={addOne}>+1</button>
      <button onClick={addThree}>+3</button>
    </div>
  );
}
