import { useState } from "react";
function generateGameBoard() {
  return Array(5000);
}
export default function Dumbo() {
  // If you need to set the initial state from a function then just use the name of the function and not the () (run the function through rather than execute it), and it will only run the first time and not subsequent times that the state is updated and component is rerendered
  const [board, setBoard] = useState(generateGameBoard);
  return (
    <button onClick={() => setBoard("hello")}>Click me to change state</button>
  );
}
